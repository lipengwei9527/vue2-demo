import VueRouter from 'vue-router'
import router from "@/router"
//先把VueRouter.prototype身上的push|replace方法进行保存一份
export const orgPush = VueRouter.prototype.push;
export const orgReplace = VueRouter.prototype.replace;

//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function (location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //orgPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    orgPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    orgPush.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
}

//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    orgReplace.call(this, location, resolve, reject);
  } else {
    orgReplace.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
}

// 跳转路由
export function openTab (option) {
  if (!option.path.startsWith('/')) {
    option.path = '/' + option.path
  }
  let v8id = new Date().getTime()

  router.push({
    path: option.path,
    query: { v8id: option.query }
  })
}

export default VueRouter
