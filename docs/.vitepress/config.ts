import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Note Editor',
  description: 'Tiptap-based text editor',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/settings/note-editor/packages',
      },
      {
        icon: 'github',
        link: 'https://github.com/liting-yes/note-editor.git',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Liting',
    },
    search: {
      provider: 'local',
    },
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/vue' },
          { text: 'Extensions', link: '/extensions/block-container' },
          { text: 'Playground', link: '/playground' },
          { text: 'CHANGELOG', link: '/changelog' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Vue', link: '/guide/vue' },
            ],
          },
          {
            text: 'Extensions',
            items: [
              { text: 'Block container', link: '/extensions/block-container' },
              { text: 'Code block shiki', link: '/extensions/code-block-shiki' },
              { text: 'Details', link: '/extensions/details' },
              { text: 'Unique ID', link: '/extensions/unique-id' },
            ],
          },
          {
            text: 'Playground',
            link: '/playground',
          },
        ],
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-CN/guide/vue' },
          { text: '插件', link: '/zh-CN/extensions/block-container' },
          { text: '演练场', link: '/zh-CN/playground' },
          { text: 'CHANGELOG', link: '/zh-CN/changelog' },

        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: 'Vue', link: '/zh-CN/guide/vue' },
            ],
          },
          {
            text: '插件',
            items: [
              { text: 'Block container (块容器)', link: '/zh-CN/extensions/block-container' },
              { text: 'Code block shiki (shiki代码块)', link: '/zh-CN/extensions/code-block-shiki' },
              { text: 'Details (详情块)', link: '/zh-CN/extensions/details' },
              { text: 'Unique ID (唯一ID)', link: '/zh-CN/extensions/unique-id' },
            ],
          },
          {
            text: 'Playground (演练场)',
            link: '/zh-CN/playground',
          },
        ],
      },
    },
  },
})
