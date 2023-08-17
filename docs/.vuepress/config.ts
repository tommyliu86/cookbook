
import { defaultTheme, defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import  theme from './theme.js'
import {head} from './head.js'


export default defineUserConfig({
  // set site base to default value
  base: '/cookbook/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '大飞不会飞',
      description: '大飞不会飞的日常笔记',
    },
  },

  // use plugins
  plugins: [
    
  ],
  theme:theme
})
