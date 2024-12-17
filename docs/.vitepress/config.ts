import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/z-element/',
  title: "My Element Introduction",
  description: "A VitePress Site",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '快速开始', link: '/markdown-examples' },
        ]
      },
      {
        text: '常用组件',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Collapse', link: '/components/collapse' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
