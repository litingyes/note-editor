import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { Editor } from '@tiptap/vue-3'
import type { SetupKitOptions } from '../setupKit'
import { setupKit } from '../setupKit'

export interface UseNoteEditorOptions {
  kitOptions: SetupKitOptions
}

export function useNoteEditor(options?: Partial<UseNoteEditorOptions>) {
  const editor = shallowRef<Editor>()

  onMounted(() => {
    editor.value = new Editor({
      content: 'Note editor',
      extensions: [
        options?.kitOptions ? setupKit.configure(options?.kitOptions) : setupKit,
      ],
    })
  })
  onBeforeUnmount(() => {
    editor.value?.destroy()
    editor.value = undefined
  })

  return {
    editor,
  }
}
