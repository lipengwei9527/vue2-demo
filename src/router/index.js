import Vue from 'vue'
import newRouter from '@/utils/router.js'
Vue.use(newRouter)
const router = new newRouter({
  // 在没有后端传递路由的时候使用hash模式，刷新界面不会找不到路由
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: '首页',
          component: () => import('@/views/home/home.vue'),
          meta: {}
        },
      ],
    },

  ]
})
// router.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('token')) {
//     if (to.path === '/') {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next('/login')
//   }
// })
export default router
