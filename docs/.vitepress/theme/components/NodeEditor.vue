<script lang="ts" setup>
import type { NodeEditorInstance } from '@note-editor/vue-kit'
import { NodeEditor } from '@note-editor/vue-kit'
import { onMounted, ref } from 'vue'
import '@note-editor/vue-kit/style.css'

const nodeEditorRef = ref<NodeEditorInstance>()
onMounted(() => {
  setTimeout(() => {
    nodeEditorRef.value?.editor.commands.setContent('<h1>Node Editor Playground</h1><h2>Code Block Shiki</h2><pre><code class="language-typescript">console.log("Hello, node editor !")</code></pre>')
  }, 1000)
})
</script>

<template>
  <div>
    <NodeEditor ref="nodeEditorRef" />
  </div>
</template>
