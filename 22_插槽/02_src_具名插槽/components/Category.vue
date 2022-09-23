<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
    <!-- 定义一个默认插槽 -->
    <!-- <slot>插槽中没有放入东西，则会出现这段默认文字</slot> -->
    <slot name="center">123</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
