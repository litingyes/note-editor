import { Node, createStyleTag, mergeAttributes } from '@tiptap/core'
import { Fragment, Slice } from '@tiptap/pm/model'
import { TextSelection } from '@tiptap/pm/state'
import document from './extentDocument'
import style from './blockContainer.css?raw'

export interface BlockContainerOptions {
  HTMLAttributes: Record<string, any>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    blockContainer: {
      splitBlockContainer: () => ReturnType
    }
  }
}

export const blockContainer = Node.create({
  name: 'blockContainer',
  content: 'block',
  group: 'block top',
  draggable: true,
  defining: true,
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  parseHTML() {
    return [
      {
        tag: 'div.note-editor__block-container',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },
  addExtensions() {
    return [document]
  },
  addCommands() {
    return {
      splitBlockContainer: () => ({ state: { selection, doc, schema, tr }, dispatch }) => {
        if (!dispatch)
          return false

        const startPos = selection.from
        const resolved = doc.resolve(startPos)
        const endPos = resolved.end(resolved.depth)
        const newBlockContent = tr.doc.cut(startPos, endPos)
        const newBlock = schema.nodes[this.name].createAndFill()!

        tr.replace(endPos + 1, endPos + 2, newBlockContent.content.size > 0 ? new Slice(Fragment.from(newBlockContent), 0, 0) : new Slice(Fragment.from(newBlock), 0, 0))
        tr.setSelection(new TextSelection(tr.doc.resolve(endPos + 1)))
        tr.delete(startPos, endPos)

        return dispatch(tr)
      },
    }
  },
  addKeyboardShortcuts() {
    const handleEnter = () => this.editor.commands.first(({ commands }) => {
      return [
        () => commands.newlineInCode(),
        () => commands.splitBlockContainer(),
      ]
    })

    return {
      Enter: handleEnter,
    }
  },
  addNodeView() {
    return ({ HTMLAttributes }) => {
      const dom = window.document.createElement('div')
      dom.classList.add('note-editor__block-container')
      Object.keys(HTMLAttributes).forEach((key) => {
        dom.setAttribute(key, HTMLAttributes[key])
      })

      const dragBar = window.document.createElement('div')
      dragBar.classList.add('note-editor__block-container__drag-bar')

      const content = window.document.createElement('div')
      content.classList.add('note-editor__block-container__content')

      createStyleTag(style, undefined, 'block-container')

      dom.append(dragBar, content)

      return {
        dom,
        contentDOM: content,
      }
    }
  },
})
