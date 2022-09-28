<template>
  <ul>
    <li>消息的编号: {{ $route.query.id }}</li>
    <li>消息的标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    //当前组件的$route会携带query数据
  },
};
</script>

<style></style>
