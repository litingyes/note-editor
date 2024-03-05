import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NodeEditor from '../../../packages/vue-kit/src/components/NoteEditor.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NoteEditor', NodeEditor)
  },
} satisfies Theme
