import VueRouter from "vue-router";
import Vue from "vue"
import Home from "../views/Home.vue"
import User from "../views/User.vue"
//import UserFoo from "../views/UserFoo.vue"
import QTfoo from "../views/QTfoo.vue";
import QTbar from "../views/QTbar.vue";

//验证VueRouter是一个对象
console.log("VueRouter>>>>>>>>>", VueRouter)

//使用一个插件的时候，通过Vue.use()
Vue.use(VueRouter);

/**
 * url => 视图的映射关系
 * eg：/ => home
 *     /hello => hello组件
 */
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/user/:haha',
            component: User,
            props: true,
            // props:(route)=>{
            //     console.log(route);
            //     return{
            //         haha:route.params.haha+"---还可以在props里面定义返回一个对象，包含了props的详细信息，例如haha就是一个属性，在url中的haha属性值为/user/后面的值",
            //         msg:"I m msg!"
            //     }
            // }
            // 嵌套路由
            children: [
                {
                    // 当 /user/:haha/QTfoo 匹配成功，
                    // QTfoo 会被渲染在 User 的 <router-view> 中
                    path: 'QTfoo',
                    component: QTfoo
                },
                {
                    // 当 /user/:haha/QTbar 匹配成功，
                    // QTbar 会被渲染在 User 的 <router-view> 中
                    path: 'QTbar',
                    component: QTbar
                }
            ],
        },
        // {
        //     path: '/user/foo',
        //     component: UserFoo
        // },
        {
            path:'/routerView',
            components:{
                default:User,
                routerViewName1:QTfoo,
                routerViewName2:QTbar,
            },
        }
    ]
});