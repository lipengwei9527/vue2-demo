export default [
    {
        path: "/component/search",
        name: "search",
        component: () => import("@/views/coms/search/search.vue")
    },
    {
        path: "/component/comTable",
        name: "comTable",
        component: () => import("@/views/coms/comTable/comTable.vue")
    },
]