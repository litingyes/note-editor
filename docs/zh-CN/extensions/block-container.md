# Block Container（块容器）

用于 Tiptap 的块容器插件

## 安装

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-block-container
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-block-container
```

:::

## 用法

::: tip
`@note-editor/tiptap-extension-block-container` 已经被 [`@note-editor/vue-kit`](/guide/vue) 收集在内, 所以通常来说不需要单独安装
:::

::: danger
`@tiptap/extension-document` 被拓展以实现顶级的块容器，所以请注意新旧数据结构的兼容处理。 如果你想了解更多, 请查看 [源码](https://github.com/liting-yes/note-editor/blob/main/packages/tiptap-extension-block-container/src/extentDocument.ts).
:::

```ts
import { Editor } from '@tiptap/core'
import { blockContainer } from '@note-editor/tiptap-extension-block-container'

const editor = new Editor({
  content: '<p>@note-editor/tiptap-extension-unique-id</p>',
  extensions: [
    blockContainer
  ]
})
```
