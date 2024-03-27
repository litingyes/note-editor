import { Node, mergeAttributes } from '@tiptap/core'

export interface DetailsContentOptions {
  HTMLAttributes: Record<string, any>
}

export const detailsContent = Node.create<DetailsContentOptions>({
  name: 'detailsContent',
  group: 'details',
  content: 'block*',
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },
  parseHTML() {
    return [
      {
        tag: 'div.node-editor__details-content',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
      class: 'node-editor__details-content',
    }), 0]
  },
})
