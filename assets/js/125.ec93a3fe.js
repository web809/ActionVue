(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{690:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何发布到-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何发布到-npm"}},[s._v("#")]),s._v(" 如何发布到 npm")]),s._v(" "),a("h2",{attrs:{id:"发布流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布流程"}},[s._v("#")]),s._v(" 发布流程")]),s._v(" "),a("ol",[a("li",[s._v("创建项目时初始化，用于创建 "),a("code",[s._v("package.json")]),s._v("，也可以手动创建此文件。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("\b开发过程中可能需要安装一些依赖包（如 vue）")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("开发完成，在发布前需要在命令行中登录 npm 账号（需提前注册账号）：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录 npm 账号")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("发布：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布 npm 包")]),s._v("\n")])])]),a("h2",{attrs:{id:"package-json-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json-字段"}},[s._v("#")]),s._v(" package.json 字段")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("name")])]),s._v(" "),a("p",[s._v("必需，npm 包的名字")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("version")])]),s._v(" "),a("p",[s._v("必需，npm 包的版本，每次发布时都要修改这个字段")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("main")])]),s._v(" "),a("p",[s._v("npm 包入口文件，它就是将来别人使用我们的 npm 包时，通过 "),a("code",[s._v("require")]),s._v(" 或者 "),a("code",[s._v("import")]),s._v(" 引入的文件。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("keywords")])]),s._v(" "),a("p",[s._v("关键字，Array 类型，npm 包的关键字，方便别人通过搜索看到我们的 npm 包。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("repository")])]),s._v(" "),a("p",[s._v("npm 源码托管地址，别人会根据它来查看我们的源码")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("license")])]),s._v(" "),a("p",[s._v("开源协议，为你的 npm 包选择一个合适的协议非常重要")])])]),s._v(" "),a("p",[s._v("下面是一个简单的 "),a("code",[s._v("package.json")]),s._v(" 例子：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"actionvue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UI components Base on vue.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wencaizhang <1052642137@qq.como>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git+https://github.com/wencaizhang/ActionVue.git"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"深入学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入学习"}},[s._v("#")]),s._v(" 深入学习")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jingsam.github.io/2018/03/12/npm-main.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("关于package.json中main字段的指向问题"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://jingsam.github.io/2016/11/01/peerDependencies-in-Vue-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("开发组件库时 Vue 应该放哪儿: devDependencies or peerDependencies？"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);