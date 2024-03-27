# Details

用于 Tiptap 的 details 插件

## 安装

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-details
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-details
```

:::

## 用法

```ts
import { Editor } from '@tiptap/core'
import { details } from '@note-editor/tiptap-extension-details'

const editor = new Editor({
  content: '<p>@note-editor/tiptap-extension-details</p>',
  extensions: [
    details
  ]
})
```

## 设置

### HTMLAttributes

将渲染到对应 HTMl 标签上的自定义属性

### detailSummaryOptions

**detail summary extension** 的配置项

### detailContentOptions

**detail content extension** 的配置项

## 命令行

### insertDetails

在当前位置插入一个 details
