<template>
  <div>
    home
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/user/xxx">Go to /user/xxx</router-link>
      <button @click="handleGotoUser">Go to User</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleGotoUser() {
      //console.log("this.$router>>>>>>>>>>>>",this.$router);
      this.$router.push({
        path: "/user/pushfoo",
      });
    },
  },
};
</script>

<style>
</style>