import { hopeTheme } from "vuepress-theme-hope";
import {hopeNavbar} from "./navbar.js";
import {hopeSidebar} from "./sidebar.js";


export default hopeTheme({
  hostname: "",

  author: {
    name: "Mr.liu",
    url: "",
  },

  iconAssets: "iconfont",

  logo: "/images/logo.png",

  repo: "tommyliu86/cookbook",

  docsDir: "docs",
  
   // navbar
   navbar: hopeNavbar,

   // sidebar
   sidebar: hopeSidebar,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name:"Mr Liu",
    description: "搬砖大师~",
    intro: "/intro.html",
    medias: {
      GitHub: "hhttps://github.com/tommyliu86",
    },
  },

  encrypt: {
    config: {
      "/db/es/elasticsearch-demo.html": ["321"],
    },
  },

  plugins: {
    blog:true,
    comment: {
     
      /**
       * Using Giscus
       */
       provider: "Giscus",
       repo: "tommyliu86/cookbook",
       repoId: "R_kgDOKGfVOg",
       category: "Announcements",
       categoryId: "DIC_kwDOKGfVOs4CYnxd",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: [
        "highlight", "math", "search", "notes", "zoom",
      ],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
