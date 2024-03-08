import { Extension, combineTransactionSteps, findChildren, findChildrenInRange, findDuplicates, getChangedRanges } from '@tiptap/core'
import { nanoid } from 'nanoid'
import type { Transaction } from '@tiptap/pm/state'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export interface UniqueIdOptions {
  attributeName: string
  types: string[]
  generateID: () => string
  injectNodeName: boolean
}

const pluginKey = new PluginKey('uniqueId')

export const uniqueId = Extension.create<Partial<UniqueIdOptions>>({
  name: 'uniqueId',
  addOptions() {
    return {
      attributeName: 'id',
      types: ['blockContainer', 'paragraph'],
      generateID: () => nanoid(),
      injectNodeName: true,
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
      {
        types: this.options.injectNodeName ? types : [],
        attributes: {
          'data-node-name': {
            default: null,
            rendered: true,
            isRequired: true,
            keepOnSplit: false,
            parseHTML: element => element.getAttribute('data-node-name'),
            renderHTML: (attributes) => {
              return {
                'data-node-name': attributes['data-node-name'],
              }
            },

          },
        },
      },
    ]
  },
  onCreate() {
    const { tr, doc } = this.editor.state
    const { attributeName, types, generateID, injectNodeName } = this.options

    findChildren(doc, node => types!.includes(node.type.name)).forEach(({ node }, pos) => {
      if (injectNodeName)
        tr.setNodeAttribute(pos, 'data-node-name', node.type.name)

      if (!node.attrs[attributeName!])
        tr.setNodeAttribute(pos, attributeName!, generateID!())
    })

    this.editor.view.dispatch(tr)
  },
  addProseMirrorPlugins() {
    const { attributeName, types, generateID, injectNodeName } = this.options

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
              if (injectNodeName && !node.attrs['data-node-name'])
                tr.setNodeAttribute(pos, 'data-node-name', node.type.name)

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
