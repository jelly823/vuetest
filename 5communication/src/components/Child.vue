<template>
  <div>
    child <br />
    {{ msg }} <br />
    <button @click="handleClick">to parent</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  methods: {
    handleClick() {
      this.$emit("to-parent", "emit from child");
    },
  },
};
</script>

<style>
</style>