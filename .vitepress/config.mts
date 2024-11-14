import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "兆旭智能",
  description: "引导",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
     // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '例子',
        items: [
          { text: 'Markdown 例子', link: '/markdown-examples' },
          { text: 'Runtime API 例子', link: '/api-examples' }
        ]
      }
    ],

  //  socialLinks: [
  //    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  //  ]
  }
})
