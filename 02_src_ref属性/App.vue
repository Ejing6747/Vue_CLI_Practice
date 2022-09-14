<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方dom元素</button>
    <!-- 同一个组件可以重复加载 -->
    <SchoolName ref="sch"></SchoolName>
    <SchoolName id="sch"></SchoolName>
  </div>
</template>

<script>
//1.引入组件
import SchoolName from "./components/SchoolName.vue";
//0.暴露App组件
export default {
  // 重要事情说三遍：组件命名记得加引号！！！
  name: "App",
  //2.注册组件
  components: {
    SchoolName,
  },
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
  methods: {
    showDom() {
      //在html中获取标签迎document.queryselector(#id)
      // 在vue中获取标签用$refs.
      console.log(this.$refs.title);
      //dom标签返回的是标签内容
      console.log(this.$refs.sch);
      //vue标签返回的是vc，也就是组件的实例对象
      console.log(document.querySelector("#sch"));
      //返回的是定义id为sch的组件的dom元素
    },
  },
};
</script>
<style></style>
