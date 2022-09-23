<template>
  <div class="container">
    <Category title="游戏">
      <!-- scope接收到的是一个对象，所以要接结构赋值 -->
      <template scope="{game}">
        <ul>
          <li v-for="(g, index) in game" :key="index">{{ g }}</li>
        </ul>
        <h4>{{ game.x }}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{game}">
        <ol>
          <li v-for="(g, index) in game" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{ game }">
        <h4 v-for="(g, index) in game" :key="index">{{ g }}</h4>
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
