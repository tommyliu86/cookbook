export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.png\",\"heroText\":\"知识小馆\",\"tagline\":\"日常笔记&记录\",\"actions\":[{\"text\":\"Let`s go\",\"link\":\"/java/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"知识体系\",\"details\":\"按照知识的脉络进行梳理，形成连贯的体系。\"},{\"title\":\"以笔代记\",\"details\":\"好记性不如烂笔头，掌握了什么，不是一张嘴就说清楚了，写一写会更好~\"},{\"title\":\"读书笔记\",\"details\":\"好读书，不求甚解~~~不行！\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present tommyLiu\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
