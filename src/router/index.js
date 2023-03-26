import Vue from 'vue'
import reRouter from '@/utils/reRouter.js'
Vue.use(reRouter)
const router = new reRouter({
  // 在没有后端传递路由的时候使用hash模式，刷新界面不会找不到路由
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'echarts',
          component: () => import('@/views/echarts/index.vue')
        },
        {
          path: 'dom',
          component: () => import('@/views/dom/index.vue')
        },
      ],
      redirect: 'echarts'
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
