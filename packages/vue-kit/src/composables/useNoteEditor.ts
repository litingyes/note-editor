import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import type { EditorOptions } from '@tiptap/vue-3'
import { Editor } from '@tiptap/vue-3'
import type { SetupKitOptions } from '../setupKit'
import { setupKit } from '../setupKit'

export interface UseNoteEditorOptions {
  kitOptions: SetupKitOptions
}

export function useNoteEditor(editorOptions?: Partial<EditorOptions>, kitOptions?: Partial<SetupKitOptions>) {
  const editor = shallowRef<Editor>()

  onMounted(() => {
    editor.value = new Editor({
      content: 'Note editor',
      ...editorOptions,
      extensions: [...(editorOptions?.extensions ?? []), kitOptions ? setupKit.configure(kitOptions) : setupKit],
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
