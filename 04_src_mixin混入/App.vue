<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <h1 v-text="msg" ref="title"></h1>
    <!-- 组件的复用 -->
    <!-- :=v-bind: 表示输出绑定的数据计算后的结果 -->
    <StudentName studentName="李四" studentSex="男" :studentAge="18"></StudentName>
    <!-- 组件接收处props设置了默认项，如果没有传入值则以默认项显示 -->
    <StudentName studentName="张三" studentSex="女"></StudentName>
    <SchoolName></SchoolName>
  </div>
</template>

<script>
//1.引入组件
import StudentName from "./components/StudentName.vue";
import SchoolName from "./components/SchoolName.vue";
//0.暴露App组件
export default {
  name: "App",
  //2.注册组件
  components: {
    StudentName,
    SchoolName,
  },
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
};
</script>
<style></style>
