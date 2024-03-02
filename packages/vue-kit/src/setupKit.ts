import type { Extensions } from '@tiptap/core'
import { Extension } from '@tiptap/core'
import type { BlockquoteOptions } from '@tiptap/extension-blockquote'
import { Blockquote } from '@tiptap/extension-blockquote'
import type { BoldOptions } from '@tiptap/extension-bold'
import { Bold } from '@tiptap/extension-bold'
import type { BulletListOptions } from '@tiptap/extension-bullet-list'
import { BulletList } from '@tiptap/extension-bullet-list'
import type { CharacterCountOptions } from '@tiptap/extension-character-count'
import { CharacterCount } from '@tiptap/extension-character-count'
import type { CodeOptions } from '@tiptap/extension-code'
import { Code } from '@tiptap/extension-code'
import type { ColorOptions } from '@tiptap/extension-color'
import { Color } from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import type { DropcursorOptions } from '@tiptap/extension-dropcursor'
import { Dropcursor } from '@tiptap/extension-dropcursor'
import type { FocusOptions } from '@tiptap/extension-focus'
import { FocusClasses } from '@tiptap/extension-focus'
import type { FontFamilyOptions } from '@tiptap/extension-font-family'
import { FontFamily } from '@tiptap/extension-font-family'
import Gapcursor from '@tiptap/extension-gapcursor'
import type { HardBreakOptions } from '@tiptap/extension-hard-break'
import { HardBreak } from '@tiptap/extension-hard-break'
import type { HeadingOptions } from '@tiptap/extension-heading'
import { Heading } from '@tiptap/extension-heading'
import type { HighlightOptions } from '@tiptap/extension-highlight'
import { Highlight } from '@tiptap/extension-highlight'
import type { HistoryOptions } from '@tiptap/extension-history'
import { History } from '@tiptap/extension-history'
import type { HorizontalRuleOptions } from '@tiptap/extension-horizontal-rule'
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'
import type { ItalicOptions } from '@tiptap/extension-italic'
import { Italic } from '@tiptap/extension-italic'
import type { ListItemOptions } from '@tiptap/extension-list-item'
import { ListItem } from '@tiptap/extension-list-item'
import type { OrderedListOptions } from '@tiptap/extension-ordered-list'
import { OrderedList } from '@tiptap/extension-ordered-list'
import type { ParagraphOptions } from '@tiptap/extension-paragraph'
import { Paragraph } from '@tiptap/extension-paragraph'
import type { PlaceholderOptions } from '@tiptap/extension-placeholder'
import { Placeholder } from '@tiptap/extension-placeholder'
import type { StrikeOptions } from '@tiptap/extension-strike'
import { Strike } from '@tiptap/extension-strike'
import type { SubscriptExtensionOptions } from '@tiptap/extension-subscript'
import { Subscript } from '@tiptap/extension-subscript'
import type { SuperscriptExtensionOptions } from '@tiptap/extension-superscript'
import { Superscript } from '@tiptap/extension-superscript'
import type { TableOptions } from '@tiptap/extension-table'
import { Table } from '@tiptap/extension-table'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import { TableCell } from '@tiptap/extension-table-cell'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import { TableHeader } from '@tiptap/extension-table-header'
import type { TableRowOptions } from '@tiptap/extension-table-row'
import { TableRow } from '@tiptap/extension-table-row'
import type { TaskItemOptions } from '@tiptap/extension-task-item'
import { TaskItem } from '@tiptap/extension-task-item'
import type { TaskListOptions } from '@tiptap/extension-task-list'
import { TaskList } from '@tiptap/extension-task-list'
import Text from '@tiptap/extension-text'
import type { TextStyleOptions } from '@tiptap/extension-text-style'
import { TextStyle } from '@tiptap/extension-text-style'
import type { TypographyOptions } from '@tiptap/extension-typography'
import { Typography } from '@tiptap/extension-typography'
import type { UnderlineOptions } from '@tiptap/extension-underline'
import { Underline } from '@tiptap/extension-underline'

export interface SetupKitOptions {
  blockquote: Partial<BlockquoteOptions> | false
  bold: Partial<BoldOptions> | false
  bulletList: Partial<BulletListOptions> | false
  characterCount: Partial<CharacterCountOptions> | false
  code: Partial<CodeOptions> | false
  color: Partial<ColorOptions> | false
  document: false
  dropcursor: Partial<DropcursorOptions> | false
  focus: Partial<FocusOptions> | false
  fontFamily: Partial<FontFamilyOptions> | false
  gapcursor: false
  hardBreak: Partial<HardBreakOptions> | false
  heading: Partial<HeadingOptions> | false
  highlight: Partial<HighlightOptions> | false
  history: Partial<HistoryOptions> | false
  horizontalRule: Partial<HorizontalRuleOptions> | false
  italic: Partial<ItalicOptions> | false
  listItem: Partial<ListItemOptions> | false
  orderedList: Partial<OrderedListOptions> | false
  paragraph: Partial<ParagraphOptions> | false
  placeholder: Partial<PlaceholderOptions> | false
  strike: Partial<StrikeOptions> | false
  subscript: Partial<SubscriptExtensionOptions> | false
  superscript: Partial<SuperscriptExtensionOptions> | false
  table: Partial<TableOptions> | false
  tableCell: Partial<TableCellOptions> | false
  tableHeader: Partial<TableHeaderOptions> | false
  tableRow: Partial<TableRowOptions> | false
  taskItem: Partial<TaskItemOptions> | false
  taskList: Partial<TaskListOptions> | false
  text: false
  textStyle: Partial<TextStyleOptions> | false
  typography: Partial<TypographyOptions> | false
  underline: Partial<UnderlineOptions> | false
}

export const setupKit = Extension.create<SetupKitOptions>({
  name: 'setupKit',
  addExtensions() {
    const extensions: Extensions = []

    if (this.options.blockquote !== false)
      extensions.push(Blockquote.configure(this.options.blockquote))

    if (this.options.bold !== false)
      extensions.push(Bold.configure(this.options.bold))

    if (this.options.bulletList !== false)
      extensions.push(BulletList.configure(this.options.bulletList))

    if (this.options.characterCount !== false)
      extensions.push(CharacterCount.configure(this.options.characterCount))

    if (this.options.code !== false)
      extensions.push(Code.configure(this.options.code))

    if (this.options.color !== false)
      extensions.push(Color.configure(this.options.color))

    if (this.options.document !== false)
      extensions.push(Document)

    if (this.options.dropcursor !== false)
      extensions.push(Dropcursor.configure(this.options.dropcursor))

    if (this.options.focus !== false)
      extensions.push(FocusClasses.configure(this.options.focus))

    if (this.options.fontFamily !== false)
      extensions.push(FontFamily.configure(this.options.fontFamily))

    if (this.options.gapcursor !== false)
      extensions.push(Gapcursor)

    if (this.options.hardBreak !== false)
      extensions.push(HardBreak.configure(this.options.hardBreak))

    if (this.options.heading !== false)
      extensions.push(Heading.configure(this.options.heading))

    if (this.options.highlight !== false)
      extensions.push(Highlight.configure(this.options.highlight))

    if (this.options.history !== false)
      extensions.push(History.configure(this.options.history))

    if (this.options.horizontalRule !== false)
      extensions.push(HorizontalRule.configure(this.options.horizontalRule))

    if (this.options.italic !== false)
      extensions.push(Italic.configure(this.options.italic))

    if (this.options.listItem !== false)
      extensions.push(ListItem.configure(this.options.listItem))

    if (this.options.orderedList !== false)
      extensions.push(OrderedList.configure(this.options.orderedList))

    if (this.options.paragraph !== false)
      extensions.push(Paragraph.configure(this.options.paragraph))

    if (this.options.placeholder !== false)
      extensions.push(Placeholder.configure(this.options.placeholder))

    if (this.options.strike !== false)
      extensions.push(Strike.configure(this.options.strike))

    if (this.options.subscript !== false)
      extensions.push(Subscript.configure(this.options.subscript))

    if (this.options.superscript !== false)
      extensions.push(Superscript.configure(this.options.superscript))

    if (this.options.table !== false)
      extensions.push(Table.configure(this.options.table))

    if (this.options.tableCell !== false)
      extensions.push(TableCell.configure(this.options.tableCell))

    if (this.options.tableHeader !== false)
      extensions.push(TableHeader.configure(this.options.tableHeader))

    if (this.options.tableRow !== false)
      extensions.push(TableRow.configure(this.options.tableRow))
    if (this.options.taskItem !== false)

      extensions.push(TaskItem.configure(this.options.taskItem))

    if (this.options.taskList !== false)
      extensions.push(TaskList.configure(this.options.taskList))

    if (this.options.text !== false)
      extensions.push(Text)

    if (this.options.textStyle !== false)
      extensions.push(TextStyle.configure(this.options.textStyle))

    if (this.options.typography !== false)
      extensions.push(Typography.configure(this.options.typography))

    if (this.options.underline !== false)
      extensions.push(Underline.configure(this.options.underline))

    return extensions
  },
})
