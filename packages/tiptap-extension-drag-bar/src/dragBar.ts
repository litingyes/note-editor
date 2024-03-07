import { Node, mergeAttributes } from '@tiptap/core'
import { Fragment, Slice } from '@tiptap/pm/model'
import { TextSelection } from '@tiptap/pm/state'
import document from './extentDocument'

export interface DargBarOptions {
  HTMLAttributes: Record<string, any>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    dargBar: {
      splitBragBar: (pos: number) => ReturnType
    }
  }
}

export const dargBar = Node.create({
  name: 'dragBar',
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
        tag: 'div',
        getAttrs: (el) => {
          const dataNodeName = (el as HTMLElement).getAttribute('data-node-name')

          if (dataNodeName === this.name) {
            return {
              'data-node-name': dataNodeName,
            }
          }
          else { return false }
        },
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, { 'data-node-name': this.name }), 0]
  },
  addExtensions() {
    return [document]
  },
  addCommands() {
    return {
      splitBragBar: (pos: number) => ({ state: { schema, tr }, dispatch }) => {
        const resolved = tr.doc.resolve(pos)
        const endPos = resolved.end(resolved.depth)
        const newBlockContent = tr.doc.cut(pos, endPos)
        const newBlock = schema.nodes[this.name].createAndFill()!

        if (dispatch) {
          tr.insert(endPos + 1, newBlock)
          tr.replace(endPos + 1, endPos + 2, newBlockContent.content.size > 0 ? new Slice(Fragment.from(newBlockContent), 0, 0) : undefined)
          tr.setSelection(new TextSelection(tr.doc.resolve(endPos + 1)))
          tr.delete(pos, endPos)
        }

        return true
      },
    }
  },
  addKeyboardShortcuts() {
    const handleEnter = () => this.editor.commands.first(({ commands, state }) => {
      return [() => commands.splitBragBar(state.selection.from)]
    })

    return {
      Enter: handleEnter,
    }
  },
})
