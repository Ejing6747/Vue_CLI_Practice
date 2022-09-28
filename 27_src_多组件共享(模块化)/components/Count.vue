<template>
  <div class="Count">
    <h1>当前的总和为：{{ mysum }}</h1>
    <h4>当前求和放大10倍:{{ bigSum }}</h4>
    <h4>我在{{ myschool }}学习{{ mysubject }}</h4>
    <!-- <h4 style="color: red">Person组件的总人数是:{{ personList.length }}</h4> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
//引入mapState,帮助寻找state中的值
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",

  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //这是程序员自己写的计算属性
    // mysum() {
    //   return this.$store.state.sum;
    // },
    // myschool() {
    //   return this.$store.state.school;
    // },
    // mysubject() {
    //   return this.$store.state.subject;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    //通过mapState写的计算属性,从state中读取数据
    ...mapState("countOptions", { mysum: "sum", myschool: "school", mysubject: "subject" }),
    ...mapState("personOptions", { personList: "personList" }),
    // ...mapGetters({ bigSum: "bigSum" }),
    // 可以简写为数组形式，但是不能简写为｛bigSum｝
    ...mapGetters("countOptions", ["bigSum"]),
    // personList() {
    //   return this.store.state.personList;
    // },
  },
  methods: {
    //程序员自己写方法
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("SUBSTRACT", this.n);
    // },
    //程序员通过mapAction写与Action对话的方法和mapMutation写与Mutation对话的方法
    ...mapMutations("countOptions", { increment: "ADD", decrement: "SUBSTRACT" }),
    ...mapActions("countOptions", { incrementOdd: "addOdd", incrementWait: "addWait" }),

    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
