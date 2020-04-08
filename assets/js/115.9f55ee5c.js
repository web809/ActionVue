(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{684:function(t,n,e){"use strict";e.r(n);var a=e(1),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"transition-过渡动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transition-过渡动画"}},[t._v("#")]),t._v(" Transition 过渡动画 "),e("Common-SourceCodeLink",{attrs:{comp:"transition"}})],1),t._v(" "),e("p",[t._v("内置丰富的过渡动画，可以直接作用于 "),e("code",[t._v("<transition>")]),t._v(" 组件。")]),t._v(" "),e("h2",{attrs:{id:"fade-淡入淡出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fade-淡入淡出"}},[t._v("#")]),t._v(" fade 淡入淡出")]),t._v(" "),e("Common-Democode",[e("transition-demo1"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button @click="show = !show">Click Me</a-button>\n    <div style="height: 100px;">\n      <transition name="a-fade-in">\n        <div v-show="show" class="transition-box">.a-fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data: () => ({\n    show: true\n  })\n};\n<\/script>\n<style>\n.transition-box {\n  margin-bottom: 10px;\n  width: 200px;\n  height: 100px;\n  border-radius: 4px;\n  background-color: #409eff;\n  text-align: center;\n  color: #fff;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  margin-right: 20px;\n}\n</style>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"zoom-缩放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoom-缩放"}},[t._v("#")]),t._v(" zoom 缩放")]),t._v(" "),e("Common-Democode",[e("transition-demo1-2"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button @click="show = !show">Click Me</a-button>\n    <div style="height: 100px;">\n      <transition name="a-fade-in">\n        <div v-show="show" class="transition-box">.a-fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data: () => ({\n    show: true\n  })\n};\n<\/script>\n<style>\n.transition-box {\n  margin-bottom: 10px;\n  width: 200px;\n  height: 100px;\n  border-radius: 4px;\n  background-color: #409eff;\n  text-align: center;\n  color: #fff;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  margin-right: 20px;\n}\n</style>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"slide-滑入滑出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slide-滑入滑出"}},[t._v("#")]),t._v(" slide 滑入滑出")]),t._v(" "),e("Common-Democode",[e("transition-demo2"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div class="anim-demo2-wrapper">\n    <div>\n      <a-button @click="show1 = !show1">向上</a-button>\n      <transition name="a-slide-up">\n        <div v-show="show1" class="transition-box-demo2">向上</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show2 = !show2">向下</a-button>\n      <transition name="a-slide-down">\n        <div v-show="show2" class="transition-box-demo2">向下</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show3 = !show3">向左</a-button>\n      <transition name="a-slide-left">\n        <div v-show="show3" class="transition-box-demo2">向左</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show4 = !show4">向右</a-button>\n      <transition name="a-slide-right">\n        <div v-show="show4" class="transition-box-demo2">向右</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data: () => ({\n    show1: true,\n    show2: true,\n    show3: true,\n    show4: true\n  })\n};\n<\/script>\n<style>\n.transition-box-demo2 {\n  margin-bottom: 10px;\n  height: 100px;\n  line-height: 100px;\n  border-radius: 4px;\n  background-color: #409eff;\n  text-align: center;\n  color: #fff;\n  box-sizing: border-box;\n}\n.anim-demo-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.anim-demo-wrapper > div {\n  width: 22%;\n}\n</style>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"fold-折叠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fold-折叠"}},[t._v("#")]),t._v(" fold 折叠")]),t._v(" "),e("Common-Democode",[e("transition-demo4"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div class="anim-demo4-wrapper">\n    <div>\n      <a-button @click="show0 = !show0">居中折叠</a-button>\n      <transition name="a-fold">\n        <div v-show="show0" class="transition-box-demo">居中折叠</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show1 = !show1">向上折叠</a-button>\n      <transition name="a-fold-up">\n        <div v-show="show1" class="transition-box-demo">向上折叠</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show2 = !show2">向下折叠</a-button>\n      <transition name="a-fold-down">\n        <div v-show="show2" class="transition-box-demo">向下折叠</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show3 = !show3">向左折叠</a-button>\n      <transition name="a-fold-left">\n        <div v-show="show3" class="transition-box-demo">向左折叠</div>\n      </transition>\n    </div>\n    <div>\n      <a-button @click="show4 = !show4">向右折叠</a-button>\n      <transition name="a-fold-right">\n        <div v-show="show4" class="transition-box-demo">向右折叠</div>\n      </transition>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data: () => ({\n    show0: true,\n    show1: true,\n    show2: true,\n    show3: true,\n    show4: true,\n  }),\n};\n<\/script>\n<style>\n.transition-box-demo {\n  margin-bottom: 10px;\n  height: 100px;\n  line-height: 100px;\n  border-radius: 4px;\n  background-color: #409eff;\n  text-align: center;\n  color: #fff;\n  box-sizing: border-box;\n}\n.anim-demo-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.anim-demo-wrapper > div {\n  width: 18%;\n}\n</style>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"flip-列表过渡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flip-列表过渡"}},[t._v("#")]),t._v(" flip 列表过渡")]),t._v(" "),e("p",[t._v("关于列表过渡，请参考文档："),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表过渡"),e("OutboundLink")],1)]),t._v(" "),e("Common-Democode",[e("transition-demo3"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <div>\n    <a-button v-on:click="shuffle">Shuffle</a-button>\n    <a-button v-on:click="add">Add</a-button>\n    <a-button v-on:click="remove">Remove</a-button>\n    <transition-group name="a-flip-list" tag="p">\n      <span v-for="item in items" v-bind:key="item" class="a-flip-list-item">'+t._s(t.item)+"</span>\n    </transition-group>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],\n      nextNum: 10\n    };\n  },\n  methods: {\n    randomIndex: function() {\n      return Math.floor(Math.random() * this.items.length);\n    },\n    add: function() {\n      this.items.splice(this.randomIndex(), 0, this.nextNum++);\n    },\n    remove: function() {\n      this.items.splice(this.randomIndex(), 1);\n    },\n    shuffle: function() {\n      this.items.sort(() => Math.random() - 0.5)\n    }\n  }\n};\n<\/script>\n<style>\n.a-flip-list-item {\n  transition: all 1s;\n  display: inline-block;\n  margin-right: 10px;\n}\n</style>\n")])])])])],1),t._v(" "),e("p",[t._v("例子来源："),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8E%92%E5%BA%8F%E8%BF%87%E6%B8%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表的排序过渡"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"旋转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[t._v("#")]),t._v(" 旋转")]),t._v(" "),e("p",[t._v("给任意组件或者 DIV 添加 "),e("code",[t._v("a-spin")]),t._v(" 类名，即可使其旋转。")]),t._v(" "),e("Common-Democode",[e("transition-demo7"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n  <section>\n    <a-button class="a-spin">按钮</a-button>\n    <a-icon type="loading" class="a-spin" />\n    <a-icon type="setting" class="a-spin" />\n  </section>\n</template>\n')])])])])],1),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("name")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("<transition>")]),t._v(" 或者 "),e("code",[t._v("<transition-group>")]),t._v(" 组件属性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("h3",{attrs:{id:"name-可选值："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name-可选值："}},[t._v("#")]),t._v(" "),e("code",[t._v("name")]),t._v(" 可选值：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[e("code",[t._v("name")]),t._v(" 值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fade-in")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("淡入淡出")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-zoom")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("缩放")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-slide-up")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向上滑入滑出")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-slide-down")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向下滑入滑出")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-slide-left")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向左滑入滑出")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-slide-right")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向右滑入滑出")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fold")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("居中折叠")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fold-up")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向上折叠")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fold-down")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向下折叠")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fold-left")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向左折叠")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-fold-right")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("向右折叠")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-flip-list")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列表过渡，适用于 "),e("code",[t._v("<transition-group>")]),t._v(" 组件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("a-spin")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("旋转，注意：直接添加类名即可")])])])])],1)}),[],!1,null,null,null);n.default=i.exports}}]);