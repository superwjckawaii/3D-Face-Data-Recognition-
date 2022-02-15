import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import Main from "../App.vue";
import Home from "../view/Home.vue";
import Datapush from "../view/Datapush.vue";
import History from "../view/History.vue";
import Setting from "../view/Setting.vue";
import API from "../view/API.vue";

// 2. 定义路由配置
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Datapush",
    name: "Datapush",
    component:Datapush,
  },
  {
    path: "/History",
    name: "History",
    component:History,
  },
  {
    path: "/Setting",
    name: "Setting",
    component:Setting,
  },
  {
    path: "/API",
    name: "API",
    component:API,
  },
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHistory(),
  // 采用 history 模式
  // history: createWebHashHistory(),
  routes, //使用上方定义的路由配置
});

export default router;
