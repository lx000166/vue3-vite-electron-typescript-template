import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory, Router } from "vue-router";

interface CustomRoute {
  meta?: {
    /**
     * 背景渐变
     * {undefined} 随机
     * {TransitionBG.RandomColorItem} 固定
     * @type {TransitionBG.colorParams}
     */
    color?: TransitionBG.RandomColorItem;
  };
}
type routeItem = CustomRoute & RouteRecordRaw;

const routes: routeItem[] = [
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
    component: () => import("@/pages/page-3.vue"),
    meta: {
      color: { start: [187, 210, 197], end: [8, 64, 96] }
    }
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
