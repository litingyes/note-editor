# Emoji

基于 tiptap 的 emoji 插件

## 安装

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-emoji
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-emoji
```

:::

## 用法

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
