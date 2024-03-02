# @note-editor/tiptap-extension-unique-id

用于 Tiptap 的注入唯一 ID 的插件

## 安装

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-unique-id
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-unique-id
```

:::

## 用法

```ts
import { Editor } from '@tiptap/core'
import { uniqueId } from '@note-editor/tiptap-extension-unique-id'

const editor = new Editor({
  extensions: [
    uniqueId
  ]
})
```

## 设置

### attributeName

附加到 HTML 标签上的属性名 (自动添加 **data-** 前缀).

```ts
uniqueID.configure({
  attributeName: 'id' // default
})
```

### types

穷举需要注入 Unique ID 的节点类型, 比如 ['paragraph']

```ts
uniqueID.configure({
  types: ['paragraph'] // default
})
```

### generateID

一个生成并返回唯一 ID 的函数

```ts
import { nanoid } from 'nanoid'

uniqueID.configure({
  generateID: () => nanoid() // default
})
```
