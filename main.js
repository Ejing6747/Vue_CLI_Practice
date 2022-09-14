/*项目的开始*/
//引入Vue
import Vue from "vue";
//引入App组件，宰相组件
import App from "./App.vue";
/*
	关于不同版本的Vue：
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

Vue.config.productionTip = false;
function Extend() {}
//创建Vue实例
new Vue({
  //将App组件放入容器中 等价于template: <App></App>,和 components:{App}

  render: (h) => h(App),

  //render渲染函数，有返回值，有参数createElement
  // render(createElement) {
  //   return createElement("h1", "你好啊");
  // },
}).$mount("#app"); //挂载id为app的dom，等价于el:"#app"
