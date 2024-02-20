import Vue from "vue";
// let req = require.context('@/components', true, /\.vue$/)
// req.keys().forEach(fileName => {
//   const com = req(fileName).default
//   Vue.component(com.name, com)
// })

import exTable from "@/components/exTable/exTable";
Vue.component("ex-table", exTable);
import exMenu from "@/components/exMenu/exMenu";
Vue.component("ex-menu", exMenu);
import exSearch from "@/components/exSearch/exSearch";
Vue.component("ex-search", exSearch);