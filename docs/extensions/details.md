# Details

Details extension for tiptap

## Installation

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-details
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-details
```

:::

## Usage

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

## Settings

### HTMLAttributes

Custom HTML attributes that should be added to the rendered HTML tag.

### detailSummaryOptions

Options for detail summary extension.

### detailContentOptions

Options for detail content extension.

## Commands

### insertDetails

Insert a details in current pos.
