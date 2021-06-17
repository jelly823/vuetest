<template>
  <div>
    parent
    <Child :msg="msgForChild" @to-parent="handleToParent"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },
  data() {
    return {
      msgForChild: "msg from parent",
    };
  },
  methods: {
    // 对子组件发射出来的进行处理：this.$emit("funName", param);
    // @funName="handleFun" 然后handleFun(param){...do something}
    handleToParent(data) {
      alert("Child:"+data);
    },
  },
};
</script>

<style>
</style>