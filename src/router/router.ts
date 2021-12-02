/*
 * @Author: lx000
 * @Date: 2021-11-09 15:55:45
 * @LastEditTime: 2021-12-02 15:56:44
 * @Description: 描述
 */
import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from "vue-router";
import { sidebarRoutes } from "./lib/sidebarRoutes";
import layout from "@/layout/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: layout,
    redirect: "/page1",
    children: sidebarRoutes
  }
];
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

router.afterEach((to, from) => {
  // 设置过渡方向
  if (to.meta.sort && from.meta.sort) {
    (to.meta.sort as number) > (from.meta.sort as number)
      ? (to.meta.transition = "totop")
      : (to.meta.transition = "tobottom");
  }
});

export default router;
export { routes };
