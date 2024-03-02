<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3'
import { useNoteEditor } from '@note-editor/vue-kit'

const { editor } = useNoteEditor()
</script>

<template>
  <div class="vue-play">
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
.vue-play {
  width: 100vw;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
