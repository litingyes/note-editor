<script setup lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

const editor = shallowRef<Editor>()
onMounted(() => {
  editor.value = new Editor({
    content: 'Node Editor',
    extensions: [
      StarterKit,
    ],
  })
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})
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
