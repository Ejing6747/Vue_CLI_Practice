<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <template v-slot:center>
        <img src="./assets/logo.png" alt="" />
      </template>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">更多美食</a>
        </div>
      </template>
    </Category>
    <Category title="游戏" :listData="games">
      <template #center>
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.atguigu.com">单机游戏</a>
          <a href="https://www.atguigu.com">联机游戏</a>
        </div>
      </template>
    </Category>
    <Category title="电影" :listData="films">
      <template v-slot:center>
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </template>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.atguigu.com">经典</a>
          <a href="https://www.atguigu.com">热门</a>
          <a href="https://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
//引入
import Category from "./components/Category";
export default {
  name: "App",
  //注册
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
    };
  },
};
</script>
<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
