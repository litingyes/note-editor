import { Extension, combineTransactionSteps, findChildren, findChildrenInRange, findDuplicates, getChangedRanges } from '@tiptap/core'
import { nanoid } from 'nanoid'
import type { Transaction } from '@tiptap/pm/state'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export interface UniqueIdOptions {
  attributeName: string
  types: string[]
  generateID: () => string
}

const pluginKey = new PluginKey('uniqueId')

export const uniqueId = Extension.create<Partial<UniqueIdOptions>>({
  name: 'uniqueId',
  addOptions() {
    return {
      attributeName: 'id',
      types: ['blockContainer', 'paragraph'],
      generateID: () => nanoid(),
    }
  },
  addGlobalAttributes() {
    const { attributeName, types } = this.options

    return [
      {
        types,
        attributes: {
          [attributeName!]: {
            default: null,
            rendered: true,
            isRequired: true,
            keepOnSplit: false,
            parseHTML: element => element.getAttribute(`data-${attributeName}`),
            renderHTML: (attributes) => {
              return {
                [`data-${attributeName}`]: attributes[attributeName!],
              }
            },
          },
        },
      },
    ]
  },
  onCreate() {
    const { tr, doc } = this.editor.state
    const { attributeName, types, generateID } = this.options

    findChildren(doc, node => types!.includes(node.type.name) && !node.attrs[attributeName!]).forEach((node, pos) => {
      tr.setNodeAttribute(pos, attributeName!, generateID!())
    })

    this.editor.view.dispatch(tr)
  },
  addProseMirrorPlugins() {
    const { attributeName, types, generateID } = this.options

    return [
      new Plugin({
        key: pluginKey,
        appendTransaction(trs, { doc: oldDoc }, { doc: newDoc, tr }) {
          if (!trs.some(tr => !!tr.docChanged) || oldDoc.eq(newDoc))
            return

          const transform = combineTransactionSteps(oldDoc, trs as Transaction[])

          getChangedRanges(transform).forEach(({ newRange }) => {
            const newNodes = findChildrenInRange(newDoc, newRange, node => types!.includes(node.type.name))
            const newIds = newNodes.map(({ node }) => node.attrs[attributeName!]).filter(item => !!item)

            newNodes.forEach(({ node, pos }) => {
              const uniqueId = node.attrs[attributeName!]

              if (!uniqueId) {
                tr.setNodeAttribute(pos, attributeName!, generateID!())
                return
              }

              if (tr.mapping.invert().mapResult(pos) && findDuplicates(newIds).includes(uniqueId))
                tr.setNodeAttribute(pos, attributeName!, generateID!())
            })
          })

          if (!transform.steps.length)
            return null

          return tr
        },
      }),
    ]
  },
})
