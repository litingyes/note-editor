import { Node, mergeAttributes } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export interface DetailsSummaryOptions {
  HTMLAttributes: Record<string, any>
}

export const detailsSummary = Node.create<DetailsSummaryOptions>({
  name: 'detailsSummary',
  group: 'details',
  content: 'inline*',
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  parseHTML() {
    return [
      {
        tag: 'summary',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['summary', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
      class: 'node-editor__details-summary',
    }), 0]
  },
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey(this.name),
        props: {
          handleClickOn: (view, pos, node, nodePos, event, direct) => {
            if (!direct || node.type.name !== this.name)
              return

            const detailsNode = view.state.doc.resolve(nodePos).parent
            // @ts-expect-error open
            const tr = view.state.tr.setNodeAttribute(nodePos - 1, 'open', !detailsNode.attrs.open)
            view.dispatch(tr)
          },
        },
      }),
    ]
  },
})
