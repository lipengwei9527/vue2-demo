export default [
    {
        path: "/note/langChange",
        name: "langChange",
        component: () => import("@/views/note/langChange/langChange.vue")
    },
    {
        path: "/note/encry",
        name: "encry",
        component: () => import("@/views/note/encry/encry.vue")
    },
    {
        path: "/note/applyDraggable",
        name: "applyDraggable",
        component: () => import("@/views/note/applyDraggable/applyDraggable.vue")
    },
]