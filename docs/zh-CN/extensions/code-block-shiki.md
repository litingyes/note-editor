# Code Block Shiki

基于 Shiki 进行代码高亮的代码块插件

## 安装

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-code-block-shiki
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-code-block-shiki
```

:::

## 用法

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

## 设置

### theme

高亮主题, 想查看更多请跳转 [shiki themes]([Want to see more please check](https://shiki.style/themes))

```ts
codeBlockShiki.configure({
  theme: 'vitesse-light' // default
})
```
