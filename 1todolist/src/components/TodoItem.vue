<template>
  <div :class="todoClass">
    <span v-text="item.title"></span>
    <button @click="deleteItem" class="delete">删除</button>
    <button @click="finishItem">完成</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    todoClass() {
      return {
        isCompleted: this.item.itemState === "completed",
      };
    },
  },
  methods: {
    deleteItem() {
      this.$emit("delete", this.item);
    },
    finishItem() {
      this.$emit("finish", this.item);
    },
  },
};
</script>

<style>
.isCompleted {
  text-decoration: line-through;
}
</style>