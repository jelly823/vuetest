<template>
  <div> 
      <!-- user {{ $route.params.id }}<br>
      query:{{ $route.query.age }}<br>
      hash:{{ $route.hash }}<br> -->
      user: {{ haha }} <br>
      <router-link to="/">Go to home</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    props:["haha"],
    mounted(){
        console.log(this.$route);
    },
    // watch:{
    //     $route(val){
    //         console.log(val);
    //     },
    // },
    // beforeRouteUpdate(){
    //     console.log("router update");
    //     console.log(this.$route);
    // }
}
</script>

<style>

</style>