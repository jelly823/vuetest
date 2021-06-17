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
    handleToParent(data) {
      alert(data);
    },
  },
};
</script>

<style>
</style>