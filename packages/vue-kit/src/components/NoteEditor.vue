<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { EditorContent } from '@tiptap/vue-3'
import { useNoteEditor } from '../composables/useNoteEditor'

export interface NodeEditorInstance {
  editor: Editor
}

export default defineComponent({
  name: 'NodeEditor',
  components: {
    EditorContent,
  },
  setup(_, { expose }) {
    const noteEditorRef = ref()
    const { editor } = useNoteEditor()

    expose({
      editor,
    })

    return {
      noteEditorRef,
      editor,
    }
  },
})
</script>

<template>
  <div ref="noteEditorRef" class="note-editor">
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
:root {
  --note-editor-color-bg: #f9fafb;
  --note-editor-color-text: #0a0a0a;
}

.dark {
  --note-editor-color-bg: #030712;
  --note-editor-color-text: ##fafafa;
}

.note-editor {
  .ProseMirror {
    background: var(--note-editor-color-bg);
    color: var(--note-editor-color-text);
    padding: 16px 24px;
    border-radius: 8px;

    &:focus-visible {
      outline: none;
      box-shadow:
        0 1px 3px 0 rgb(0 0 0 / 0.1),
        0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    p {
      margin: 0;

      & + p:not(p:last-child) {
        margin: 8px 0;
      }
    }
  }
}
</style>
