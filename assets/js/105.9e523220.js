(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{670:function(t,e,a){"use strict";a.r(e);var n=a(1),l=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pager-分页器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pager-分页器"}},[t._v("#")]),t._v(" Pager 分页器 "),a("Common-SourceCodeLink",{attrs:{comp:"pager"}})],1),t._v(" "),a("h2",{attrs:{id:"简洁模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简洁模式"}},[t._v("#")]),t._v(" 简洁模式")]),t._v(" "),a("Common-Democode",{attrs:{title:"",description:""}},[a("pager-demo1"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <a-pager\n    :totalPage="100"\n    :currPage="currPage"\n    :hideIfOnePage="false"\n    @onChange="onPageChange"\n  />\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        currPage: 30\n      };\n    },\n    methods: {\n      onPageChange(item) {\n        this.currPage = item;\n        console.log("onPageChange", item);\n      }\n    }\n  };\n<\/script>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"正常模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正常模式"}},[t._v("#")]),t._v(" 正常模式")]),t._v(" "),a("Common-Democode",{attrs:{title:"",description:""}},[a("pager-demo2"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <a-pager\n    :totalPage="100"\n    :currPage="currPage"\n    :hideIfOnePage="false"\n    mode="simple"\n    @onChange="onPageChange"\n  />\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        currPage: 30\n      };\n    },\n    methods: {\n      onPageChange(item) {\n        this.currPage = item;\n        console.log("onPageChange", item);\n      }\n    }\n  };\n<\/script>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"当只有一页时隐藏分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当只有一页时隐藏分页"}},[t._v("#")]),t._v(" 当只有一页时隐藏分页")]),t._v(" "),a("p",[t._v("当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。")]),t._v(" "),a("Common-Democode",{attrs:{title:"",description:""}},[a("pager-demo3"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <div style="margin-bottom: 8px;">\n      当只有一页时隐藏分页：\n      <a-switch v-model="hideIfOnePage" active-text="on" inactive-text="off"/>\n    </div>\n    <a-pager\n      :totalPage="1"\n      :currPage="currPage"\n      :hideIfOnePage="hideIfOnePage"\n      @onChange="onPageChange"\n    />\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      currPage: 1,\n      hideIfOnePage: true,\n    };\n  },\n  methods: {\n    onPageChange(item) {\n      this.currPage = item;\n      console.log("onPageChange", item);\n    }\n  }\n};\n<\/script>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("totalPage")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("总页数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("currPage")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前页数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hideIfOnePage")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("只有一页是否自动隐藏")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mode")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("页码模式，有 "),a("code",[t._v("sample")]),t._v(" "),a("code",[t._v("normal")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("simple normal")])])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("onChange")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("页码发生变化时调用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Function(currPage:Number)")])])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);