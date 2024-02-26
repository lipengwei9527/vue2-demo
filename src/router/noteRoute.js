export default [
    {
        path: "/note/lang_change",
        name: "grid布局",
        component: () => import("@/views/note/langChange/langChange.vue")
    },
    {
        path: "/note/encry",
        name: "encry",
        component: () => import("@/views/note/encry/encry.vue")
    },
]