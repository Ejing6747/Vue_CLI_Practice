<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "SchoolName",
  data() {
    return {
      schoolName: "家里蹲大学",
      schoolAddress: "哔站",
    };
  },
  methods: {
    demo(pubsubName, data) {
      console.log("有人发布了", pubsubName, data);
    },
  },
  mounted() {
    //demo函数接受到data
    // this.$bus.$on("demo", this.demo);

    //订阅消息,每一个消息都有一个id,"hello"是订阅名，回调函的第一个参数是发送消息的名，data是参数
    // this.pubId = pubsub.subscribe("hello", (hello, data) => console.log("有人发布了hello消息", data));

    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // this.$bus.$off("demo");
    pubsub.unsbuscribe(this.pubId);
  },
};
</script>

<style scoped>
/* 组件的样式 */
.school {
  background: skyblue;
}
</style>
