import { Extension } from '@tiptap/core'
import { nanoid } from 'nanoid'

export interface UniqueIdOptions {
  attributeName?: string
  types?: string[]
  generateID?: () => string
}

export const uniqueId = Extension.create<UniqueIdOptions>({
  name: 'uniqueId',
  addGlobalAttributes() {
    let { attributeName, types, generateID } = this.options

    attributeName ??= 'id'
    types ??= ['paragraph']
    generateID ??= () => nanoid()

    return [
      {
        types,
        attributes: {
          [attributeName]: {
            default: generateID(),
            rendered: true,
            isRequired: true,
            keepOnSplit: true,
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
})
