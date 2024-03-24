import type { CodeBlockOptions } from '@tiptap/extension-code-block'
import { CodeBlock } from '@tiptap/extension-code-block'
import type { Node as ProsemirrorNode } from '@tiptap/pm/model'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import type { DecorationAttrs } from '@tiptap/pm/view'
import { Decoration, DecorationSet } from '@tiptap/pm/view'
import { createStyleTag, findChildren } from '@tiptap/core'
import type { BundledLanguage, BundledTheme, HighlighterGeneric, StringLiteralUnion } from 'shiki/bundle/web'
import { bundledLanguagesInfo, getHighlighter } from 'shiki/bundle/web'
import type { Element } from 'hast'
import style from './codeBlockShiki.css?raw'

const languages = bundledLanguagesInfo.map(item => [item.id, item.name, ...(item.aliases ?? [])]).flat()

export interface CodeBlockShikiOptions extends CodeBlockOptions {
  theme: StringLiteralUnion<BundledTheme, string>
}

export interface CodeBlockShikiStorage {
  highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> | null
}

export const codeBlockShiki = CodeBlock.extend<CodeBlockShikiOptions, CodeBlockShikiStorage>({
  addOptions() {
    return {
      ...this.parent?.(),
      theme: 'vitesse-light',
    }
  },
  addStorage() {
    return {
      highlighter: null,
    }
  },
  async onBeforeCreate() {
    createStyleTag(style, undefined, 'code-block-shiki')
    this.storage.highlighter = await getHighlighter({
      themes: [this.options.theme],
      langs: bundledLanguagesInfo.map(item => item.id),
    })
  },
  addProseMirrorPlugins() {
    return [
      ...(this.parent?.() ?? []),
      new Plugin({
        key: new PluginKey(this.name),
        state: {
          init: (_, { doc }) => getDecorations({ doc, name: this.name, highlighter: this.storage.highlighter, theme: this.options.theme }),
          apply: (transaction, decorationSet, oldState, newState) => {
            const oldNodeName = oldState.selection.$head.parent.type.name
            const newNodeName = newState.selection.$head.parent.type.name

            if (
              transaction.docChanged
              && ([oldNodeName, newNodeName].includes(this.name)
              )
            ) {
              return getDecorations({
                doc: transaction.doc,
                name: this.name,
                highlighter: this.storage.highlighter,
                theme: this.options.theme,
              })
            }

            return decorationSet.map(transaction.mapping, transaction.doc)
          },
        },
        props: {
          decorations(state) {
            // console.log('decorations', this.getState(state))
            return this.getState(state)
          },
        },
      }),
    ]
  },
})

function getDecorations({
  doc,
  name,
  highlighter,
  theme,
}: {
  doc: ProsemirrorNode
  name: string
  highlighter: CodeBlockShikiStorage['highlighter']
  theme: CodeBlockShikiOptions['theme']
}) {
  let decorations: Decoration[] = []

  findChildren(doc, node => node.type.name === name).forEach((block) => {
    // @ts-expect-error language
    const language = block.node.attrs.language || 'text'
    if (!languages.includes(language))
      return

    const preNode = highlighter?.codeToHast(block.node.textContent, {
      theme,
      lang: language,
    }).children[0] as Element

    decorations.push(Decoration.node(block.pos, block.pos + block.node.nodeSize, {
      // @ts-expect-error class
      class: `${preNode.properties.class} node-editor__code-block-shiki`,
      // @ts-expect-error style
      style: preNode.properties.style,
    } as DecorationAttrs))

    let from = block.pos + 1
    const lines = (preNode.children[0] as Element).children as Element[]
    for (const line of lines) {
      if (line.children?.length) {
        let lineFrom = from
        line.children?.forEach((node) => {
          // @ts-expect-error value
          const nodeLen = node.children[0].value.length
          decorations.push(Decoration.inline(lineFrom, lineFrom + nodeLen, (node as Element).properties as DecorationAttrs))
          lineFrom += nodeLen
        })

        // prosemirror do not support add wrap for line
        // decorations.push(Decoration.inline(from, lineFrom, line.properties as DecorationAttrs))
        from = lineFrom
      }
    }
  })

  decorations = decorations.filter(item => !!item)

  return DecorationSet.create(doc, decorations)
}
