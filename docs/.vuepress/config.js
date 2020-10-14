const nav = require('./config/nav.js');

module.exports = {
  title: "诗酒趁年华",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  // base: '/vuepress-theme-vdoing/', // '/<github仓库名>/'， 默认'/' 
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }], //favicons，资源放在public文件夹
    ['meta', {
      name: 'keywords',
      content: '袁成成前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'
    }],
    ['meta', {
      name: 'baidu-site-verification',
      content: 'xN4C48gil4'
    }], // 百度统计博主验证
    ['meta', {
      name: 'theme-color',
      content: '#11a8cd'
    }], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },

  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: 'https://i.loli.net/2020/10/07/NgSGlFLpIcPohxB.jpg', // 导航栏logo
    repo: '2015214547/myBlog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: false, // 启用编辑
    editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    bodyBgImg: 'https://www.kareny.cn/wp-json/sakura/v1/image/cover',
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: '诗酒趁年华', // 必需
      link: 'https://github.com/2015214547/myBlog' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
      avatar: '/img/mine.jpg',
      name: '诗酒趁年华',
      slogan: '穷且益坚，不坠青云之志'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [{
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:826119238@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/2015214547/myBlog'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/my/m/music/playlist?id=555380131'
        },
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: '诗酒趁年华 | <a href="https://github.com/2015214547/myBlog" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    }
  },
  // 插件
  plugins: [ 
    // (1) 鼠标点击爱心特效
    [require('./plugins/love-me'), { 
      color: '#ff2d51', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],
    // (2) 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    ['thirdparty-search', { 
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q='
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Awww.yuanchengcheng.vip%20'
        }
      ]
    }],
    // (3) 百度自动推送
    'vuepress-plugin-baidu-autopush', 
    // (4) 代码块复制按钮
    ['one-click-copy', { 
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    // (5) demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    ['demo-block', { 
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    // (6) 放大图片
    [
      'vuepress-plugin-zooming', 
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    // (7) 百度统计
    [
      'vuepress-plugin-baidu-tongji', 
      {
        hm: '4cdc6fe891d667499b6869dcb5e8e87f'
      }
    ],
    // (8) "上次更新"时间格式
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ],
    // (9) 评论功能
    [
      'vuepress-plugin-comment', 
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'DSyz7dUkVxeDQo8Q8k3xW8MJ-gzGzoHsz',
          appKey: 'KPwYCGPh56KUo00SjqX5g68J'
        }
      }
      // {
      //   choosen: 'gitalk', 
      //   options: {
      //     clientID: '6979a531017b4fb09eb3',
      //     clientSecret: '3c67bf866ba0da7330b0f87054f9b6ed564dffa6',
      //     repo: 'yccBlog', // GitHub 仓库
      //     owner: '2015214547', // GitHub仓库所有者
      //     admin: ['2015214547'], // 对仓库有写权限的人
      //     distractionFreeMode: false,
      //     // pagerDirection: 'last', // 'first'正序 | 'last'倒序
      //     // id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
      //     // title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
      //     // labels: ["Gitalk", "Comment"], // GitHub issue 的标签
      //     // body:"页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
      //   }
      // }
    ],
    // (10) live2D看板娘
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          // https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html
          model: 'hibiki',
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ],
    // (11) Copy自动加版权信息（可以对特定界面进行复制的控制）
    [
      'copyright',
      {
        noCopy: false,  // true：选中文字无法复制
        noSelect: false, // 是否禁止选中
        minLength: 100, // 触发剪贴板组件的最小复制长度
        authorName: "袁成成", // 网站作者
      }
    ]
  ],

}