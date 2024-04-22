import Vue from "vue";
import newRouter, { setRouteInfo } from "@/utils/router";
import menuStore from '@/store/menu'
// 路由
import comsRoute from "./comsRoute";
import noteRoute from "./noteRoute";
import styleRoute from "./styleRoute";
Vue.use(newRouter);
const routes = [
  {
    path: "/",
    name: 'layout',
    component: () => import("@/layout/index.vue"),
    // redirect: 'canvas1',
    children: [
      ...noteRoute,
      ...comsRoute,
      ...styleRoute,
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home.vue"),
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

router.beforeEach((to, form, next) => {
  next()
})
router.afterEach((to, from) => {
  // 设置选中的菜单
  let { topActive, leftActive } = menuStore.state
  if (topActive && leftActive) {
    setRouteInfo({ topActive, leftActive })
  }
})

// 重设路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
