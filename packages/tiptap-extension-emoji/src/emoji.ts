import { InputRule, Node, PasteRule } from '@tiptap/core'
import emojiJson from 'emojilib'

const emojiMap = new Map<string, string>()
Object.entries(emojiJson).forEach(([emoji, names]) => {
  names.forEach(name => emojiMap.set(name, emoji))
})

export interface EmojiOptions {
}

export const emoji = Node.create<EmojiOptions>({
  name: 'emoji',
  inline: true,
  group: 'inline',
  atom: true,
  addInputRules() {
    return Object.entries(emojiJson).map(([emoji, names]) => new InputRule({
      find: new RegExp(`:(${names.map(name => name.replace(/(\(|\)|\+)/, str => `\\${str}`)).join('|')}):$`),
      handler({ state, range }) {
        state.tr.insertText(emoji, range.from, range.to)
      },
    }))
  },
  addPasteRules() {
    return Object.entries(emojiJson).map(([emoji, names]) => new PasteRule({
      find: new RegExp(`(:(${names.map(name => name.replace(/(\(|\)|\+)/, str => `\\${str}`)).join('|')}):)`, 'g'),
      handler({ state, range }) {
        state.tr.insertText(emoji, range.from, range.to)
      },
    }))
  },
})
