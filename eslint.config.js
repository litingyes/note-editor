import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
})
