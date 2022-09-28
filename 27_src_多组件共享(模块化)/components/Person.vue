<template>
  <div>
    <h1>人员列表</h1>
    <h4 style="color: red">count组件的总和为:{{ sum }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="add_person" />
    <button @click="add_person">添加</button>
    <button @click="addPersonServe">添加一个服务器的语句</button>
    <h4>第一个人的名字是：{{ firstName }}</h4>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :p.id>{{ p.name }}</li> -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    //state的map写法
    // ...mapState({"personOptions", personList: "personList" }),
    // ...mapState("personOptions", ["personList"]),
    //state的传统写法
    personList() {
      return this.$store.state.personOptions.personList;
    },
    //Getters的map写法
    // ...mapGetters("personOptions", { firstName: "firstPersonName" }),
    //Getters的传统写法
    firstName() {
      //getters中将模块化的getter写在一个键名，例如：personList / firstPersonName
      //又因为点.语法不能包含斜线，所以使用数组
      return this.$store.getters["personOptions/firstPersonName"];
    },

    sum() {
      return this.$store.state.countOptions.sum;
    },
  },
  methods: {
    add_person() {
      const personObj = { id: nanoid(), name: this.name };

      this.$store.dispatch("personOptions/addPersonWang", personObj);
      // this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonServe() {
      this.$store.dispatch("personOptions/addPersonServe");
    },
  },
};
</script>

<style></style>
