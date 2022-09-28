<template>
  <ul>
    <!-- 采用params得到传递的值 -->
    <!-- <li>消息的编号: {{ $route.params.id }}</li>
    <li>消息的标题：{{ $route.params.title }}</li> -->

    <!-- 采用params:true可以直接拿到paramsd传递过来的参数 -->
    <!-- <li>a:{{ id }}</li>
    <li>b:{{ title }}</li> -->

    <!-- 采用props函数拿到query传递过去参数 -->
    <li>消息的编号: {{ id }}</li>
    <li>消息的标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    //当前组件的$route会携带query数据
  },
};
</script>

<style></style>
