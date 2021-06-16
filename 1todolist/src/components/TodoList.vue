<template>
  <div>
    <h1 v-text="title">这里就会变成title的值</h1>
    <input v-model="newItem" @keyup.enter="addNewItem" />
    <!-- <button @click="addNewItem">添加</button> -->
    <ul>
      <li v-for="itemF in items" :key="itemF.id">
        <TodoItem :item="itemF" 
        @delete="handleDelete" 
        @finish="handleFinish"></TodoItem>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
export default {
  name: "ToDoList",
  components: {
    TodoItem,
  },
  data() {
    return {
      title: "ToDoList",
      items: [
        {
          id: 0,
          title: "example",
          itemState: "active",
        },
      ],
      id: 1,
      newItem: "",
    };
  },
  methods: {
    addNewItem() {
      if (this.newItem == "") return;
      this.items.push({
        id: this.id,
        title: this.newItem,
        itemState: "active"
      });
      this.id++;
      this.newItem = ""; //reset
    },
    handleDelete(recycleItem) {
      this.items.map((item, index) => {
        if (item.id === recycleItem.id) {
          this.items.splice(index, 1); //完成则删除该项
        }
      });
      //或者
      //this.items = this.items.filter((item)=>item.id!==recycleItem.id);
    },
    handleFinish(finishItem){
        finishItem.itemState = "completed";
        //或者
        //const item = this.items.find((item)=>item.id===finishItem.id);
    }
  },
};
</script>

<style>
</style>