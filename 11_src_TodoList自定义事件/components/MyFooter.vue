<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      //计算已完成的事件，todoTotal是回调函数上一次的返回值，todo是当前数组的元素。
      return this.todos.reduce((todoTotal, todo) => {
        return todoTotal + todo.done;
      }, 0);
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.doneTotal > 0;
      },
      set(value) {
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    clearAll() {
      this.$emit("clearAllDoneTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
