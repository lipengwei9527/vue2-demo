import Vue from "vue";
let req = require.context('@/components', true, /\.vue$/)
req.keys().forEach(fileName => {
    let length = fileName.split('/').length
    // 只注册文件夹下第一层级的vue文件，更子级文件夹中的vue文件不注册
    if (length == 3) {
        const com = req(fileName).default
        Vue.component(com.name, com)
    }
})

// 开源组件
import draggable from "vuedraggable";
Vue.component("draggable", draggable);