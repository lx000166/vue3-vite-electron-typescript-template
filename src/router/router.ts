import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory, Router } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/page1" },
  {
    path: "/page1",
    component: () => import("@/pages/page-1.vue")
  },
  {
    path: "/page2",
    component: () => import("@/pages/page-2.vue")
  },
  {
    path: "/page3",
    component: () => import("@/pages/page-3.vue")
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
