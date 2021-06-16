<template>
  <div>
      <button @click="handleClick" class="click"><slot></slot></button>
  </div>
</template>

<script>
export default {
    props:["disabled"],
    methods:{
        handleClick(){
            if(this.disabled)return;
            this.$emit("click");
        }
    }
}
</script>

<style>

</style>