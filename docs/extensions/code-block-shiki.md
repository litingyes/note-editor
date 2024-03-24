# Code Block Shiki

Code block extension with shiki for tiptap

## Installation

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-code-block-shiki
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-code-block-shiki
```

:::

## Usage

```ts
import { Editor } from '@tiptap/core'
import { codeBlockShiki } from '@note-editor/tiptap-extension-code-block-shiki'

const editor = new Editor({
  content: '<p>@note-editor/tiptap-extension-code-block-shiki</p>',
  extensions: [
    codeBlockShiki
  ]
})
```

## Settings

### theme

Theme for highlight, want to see more please check [shiki themes](https://shiki.style/themes)

```ts
codeBlockShiki.configure({
  theme: 'vitesse-light' // default
})
```
