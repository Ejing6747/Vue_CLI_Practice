<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- ?传递query数据 -->
        <!-- ：冒号表示用js解析to后面的语句,``模板字符串表示传递的是一个字符串，${}表示字符串中传的js变量值 -->
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link active-class="active" :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }} </router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由并携带query参数，to的对象写法 // path: '/home/message/detail', -->
        <router-link
          active-class="active"
          :to="{
            //第一种传值方式，采用qurey的方式

            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
            // 第二种传参方式params，但该方式只能用命名路由
            // name: 'xiangqing',
            // params: {
            //   id: m.id,
            //   title: m.title,
            // },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
