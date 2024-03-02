# Starter for Vue

The **VueKit** is a collection of [Tiptap](https://tiptap.dev/docs/editor/introduction) extensions with vue. If you’re just getting started, this extension is for you.

## Installation

::: code-group

```bash [npm]
npm install @tiptap/vue-3 @note-editor/vue-kit
```

```bash [pnpm]
pnpm add @tiptap/vue-3 @note-editor/vue-kit
```

:::

## Export

### setupKit

a collection of Tiptap extensions, similar to [StarterKit](https://tiptap.dev/docs/editor/api/extensions/starter-kit)

```ts
import { Editor } from '@tiptap/core'
import { setupKit } from '@note-editor/vue-kit'

const editor = new Editor({
  extensions: [
    setupKit
  ]
})
```

### useNoteEditor

a vue composable for tiptap

```ts
import { useNoteEditor } from '@note-editor/vue-kit'
```

## Usage

```vue
<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import { useNoteEditor } from '@note-editor/vue-kit'

const { editor } = useNoteEditor()
</script>

<template>
  <EditorContent :editor="editor" />
</template>
```

You can configure the included extensions, or even disable a few of them, like shown below.

```vue
<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import { useNoteEditor } from '@note-editor/vue-kit'

const { editor } = useNoteEditor({
  // Equivalent to setupKit
  kitOptions: {
    // Configure an included extension
    heading: {
      levels: [1, 2],
    },

    // Disable an included extension
    history: false,
  }
})
</script>

<template>
  <EditorContent :editor="editor" />
</template>
```

## Included extensions

### Nodes

- [Blockquote](https://tiptap.dev/docs/editor/api/nodes/blockquote)
- [BulletList](https://tiptap.dev/docs/editor/api/nodes/bullet-list)
- [Document](https://tiptap.dev/docs/editor/api/nodes/document)
- [HardBreak](https://tiptap.dev/docs/editor/api/nodes/hard-break)
- [Heading](https://tiptap.dev/docs/editor/api/nodes/heading)
- [HorizontalRule](https://tiptap.dev/docs/editor/api/nodes/horizontal-rule)
- [ListItem](https://tiptap.dev/docs/editor/api/nodes/list-item)
- [OrderedList](https://tiptap.dev/docs/editor/api/nodes/ordered-list)
- [Paragraph](https://tiptap.dev/docs/editor/api/nodes/paragraph)
- [Table](https://tiptap.dev/docs/editor/api/nodes/table)
- [TableCell](https://tiptap.dev/docs/editor/api/nodes/table-cell)
- [TableHeader](https://tiptap.dev/docs/editor/api/nodes/table-header)
- [TableRow](https://tiptap.dev/docs/editor/api/nodes/table-row)
- [TaskItem](https://tiptap.dev/docs/editor/api/nodes/task-item)
- [TaskList](https://tiptap.dev/docs/editor/api/nodes/task-list)
- [Text](https://tiptap.dev/docs/editor/api/nodes/text)

### Marks

- [Bold](https://tiptap.dev/docs/editor/api/marks/bold)

- [Code](https://tiptap.dev/docs/editor/api/marks/code)
- [Highlight](https://tiptap.dev/docs/editor/api/marks/highlight)
- [Italic](https://tiptap.dev/docs/editor/api/marks/italic)
- [Strike](https://tiptap.dev/docs/editor/api/marks/strike)
- [Subscript](https://tiptap.dev/docs/editor/api/marks/subscript)
- [Superscript](https://tiptap.dev/docs/editor/api/marks/superscript)
- [TextStyle](https://tiptap.dev/docs/editor/api/marks/text-style)
- [Underline](https://tiptap.dev/docs/editor/api/marks/underline)

### Extensions

- [CharacterCount](https://tiptap.dev/docs/editor/api/extensions/character-count)
- [Color](https://tiptap.dev/docs/editor/api/extensions/color)
- [Focus](https://tiptap.dev/docs/editor/api/extensions/focus)
- [FontFamily](https://tiptap.dev/docs/editor/api/extensions/font-family)
- [Gapcursor](https://tiptap.dev/docs/editor/api/extensions/dropcursor)
- [History](https://tiptap.dev/docs/editor/api/extensions/history)
- [Placeholder](https://tiptap.dev/docs/editor/api/extensions/placeholder)
- [TextAlign](https://tiptap.dev/docs/editor/api/extensions/text-align)
- [Typography](https://tiptap.dev/docs/editor/api/extensions/typography)
