import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NodeEditor } from '@note-editor/vue-kit'
import '@note-editor/vue-kit/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NoteEditor', NodeEditor)
  },
} satisfies Theme
