import Vue from "vue";
// let req = require.context('@/components', true, /\.vue$/)
// req.keys().forEach(fileName => {
//   const com = req(fileName).default
//   Vue.component(com.name, com)
// })

import Ctable from "@/components/CTable";
Vue.component("c-table", Ctable);
import CMenu from "@/components/CMenu/CMenu";
Vue.component("c-menu", CMenu);
