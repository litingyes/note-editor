import { Node, mergeAttributes } from '@tiptap/core'
import type { DetailsSummaryOptions } from './detailsSummary'
import { detailsSummary } from './detailsSummary'
import type { DetailsContentOptions } from './detailsContent'
import { detailsContent } from './detailsContent'

export interface DetailsOptions {
  HTMLAttributes: Record<string, any>
  detailSummaryOptions: Partial<DetailsSummaryOptions>
  detailContentOptions: Partial<DetailsContentOptions>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    details: {
      insertDetails: () => ReturnType
    }
  }
}

export const details = Node.create<DetailsOptions>({
  name: 'details',
  group: 'block',
  content: 'detailsSummary detailsContent',
  addOptions() {
    return {
      HTMLAttributes: {},
      detailSummaryOptions: {},
      detailContentOptions: {},
    }
  },
  addAttributes() {
    return {
      open: {
        default: null,
        rendered: true,
        isRequired: true,
        parseHTML: element => element.getAttribute('open'),
        renderHTML: (attributes) => {
          // @ts-expect-error open
          if (attributes.open) {
            return {
              open: true,
            }
          }

          return {}
        },
      },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'details',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['details', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
      class: 'node-editor__details',
    }), 0]
  },
  addCommands() {
    return {
      insertDetails: () => ({ commands }) => {
        commands.insertContent({
          type: this.name,
          content: [
            {
              type: detailsSummary.name,
            },
            {
              type: detailsContent.name,
            },
          ],
        })

        return true
      },
    }
  },
  addExtensions() {
    return [
      detailsSummary.configure(this.options.detailSummaryOptions),
      detailsContent.configure(this.options.detailContentOptions),
    ]
  },

})
