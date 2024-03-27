<script lang="ts" setup>
import type { NodeEditorInstance } from '@note-editor/vue-kit'
import { NodeEditor } from '@note-editor/vue-kit'
import { onMounted, ref } from 'vue'
import '@note-editor/vue-kit/style.css'

const nodeEditorRef = ref<NodeEditorInstance>()
onMounted(() => {
  setTimeout(() => {
    nodeEditorRef.value?.editor.commands.setContent(`
    <h1>Node Editor Playground</h1>
    <h2>Code Block Shiki</h2>
    <pre><code class="language-typescript">console.log("Hello, node editor !")</code></pre>
    <h2>Details</h2>
    <details><summary>Summary</summary><div><p>details content</p></div></details>
  `)
  }, 1000)
})
</script>

<template>
  <div>
    <NodeEditor ref="nodeEditorRef" />
  </div>
</template>
