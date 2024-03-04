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
    {
        path: "/note/routeApply",
        name: "routeApply",
        component: () => import("@/views/note/routeApply/routeApply.vue")
    },
    {
        path: "/note/routerInfo",
        name: "routerInfo",
        component: () => import("@/views/note/routeApply/routerInfo.vue")
    },
]