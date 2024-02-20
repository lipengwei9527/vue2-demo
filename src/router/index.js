import Vue from "vue";
import newRouter from "@/utils/router";

// 路由
import animationRoute from "./animationRoute";
import styleRoute from "./styleRoute";
Vue.use(newRouter);
const routes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    // redirect: 'canvas1',
    children: [
      animationRoute,
      ...styleRoute,
      {
        path: "/home",
        name: "首页",
        component: () => import("@/views/home/home.vue"),
        meta: {},
      },
      {
        path: "/canvas/canvas1",
        name: "canvas1",
        component: () => import("@/views/canvas/canvas1.vue"),
        meta: {},
      },
      {
        path: "/language/i18n",
        name: "i18n",
        component: () => import("@/views/i18n/i18n.vue"),
        meta: {},
      },
    ],
  },
];

export const createRouter = () =>
  new newRouter({
    // 在没有后端传递路由的时候使用hash模式，刷新界面不会找不到路由
    mode: "history",
    // base: "/tip",//条路由时自带的前缀
    routes,
  });
const router = createRouter();

// 重设路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
