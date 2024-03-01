import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Note Editor',
  description: 'Tiptap-based text editor',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/settings/node-editor/packages',
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
          { text: 'Extensions', link: '/extensions/unique-id' },
        ],
        sidebar: [
          {
            text: 'Extensions',
            items: [
              { text: 'Unique ID', link: '/extensions/unique-id' },
            ],
          },
        ],
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '插件', link: '/zh-CN/extensions/unique-id' },
        ],
        sidebar: [
          {
            text: '插件',
            items: [
              { text: 'Unique ID (唯一ID)', link: '/zh-CN/extensions/unique-id' },
            ],
          },
        ],
      },
    },
  },
})
