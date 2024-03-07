# Block Container

bloc container extension for tiptap

## Installation

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-block-container
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-block-container
```

:::

## Usage

::: tip
`@note-editor/tiptap-extension-block-container` is already included by [`@note-editor/vue-kit`](/guide/vue), so usually you don’t need to repeat the installation
:::

::: danger
The `@tiptap/extension-document` has been extended to implement a top-level block container, so please pay attention to the compatibility processing of old and new data structures. If you want to see more, please see the [source code](https://github.com/liting-yes/note-editor/blob/main/packages/tiptap-extension-block-container/src/extentDocument.ts).
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
