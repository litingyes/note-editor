# Emoji

Emoji extension for tiptap

## Installation

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-emoji
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-emoji
```

:::

## Usage

```ts
import { Editor } from '@tiptap/core'
import { emoji } from '@note-editor/tiptap-extension-emoji'

const editor = new Editor({
  content: '<p>@note-editor/tiptap-extension-emoji</p>',
  extensions: [
    emoji
  ]
})
```
