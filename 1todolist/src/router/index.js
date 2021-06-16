import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '../components/ToDoList'

Vue.use(Router)

//创建路由实例并配置路由映射
export default new Router({
    routes:[
        {
            path:'/',
            name:'ToDoList',
            component:ToDoList,
        }
    ]
})