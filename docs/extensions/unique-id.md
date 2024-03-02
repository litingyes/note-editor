# @note-editor/tiptap-extension-unique-id

unique id extension for tiptap

## Install

::: code-group

```bash [npm]
npm install @note-editor/tiptap-extension-unique-id
```

```bash [pnpm]
pnpm add @note-editor/tiptap-extension-unique-id
```

:::

## Usage

```ts
import { Editor } from '@tiptap/core'
import { uniqueId } from '@note-editor/tiptap-extension-unique-id'

const editor = new Editor({
  extensions: [
    uniqueId
  ]
})
```

## Settings

### attributeName

Name of the attribute that is attached to the HTML tag (will be prefixed with **data-**).

```ts
uniqueID.configure({
  attributeName: 'id' // default
})
```

### types

All types that should get a unique ID, for example ['paragraph']

```ts
uniqueID.configure({
  types: ['paragraph'] // default
})
```

### generateID

A function that generates and returns a unique ID.

```ts
import { nanoid } from 'nanoid'

uniqueID.configure({
  generateID: () => nanoid() // default
})
```
