/*
 * @Author: lixin
 * @Date: 2022-08-17 10:11:00
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-11 13:34:29
 * @Description: 描述
 */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory, Router } from "vue-router";
import { sidebarRoutes } from "./lib/sidebarRoutes";
import layout from "@/components/Layout/index.vue";
import login from "@/pages/login.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [...sidebarRoutes]
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
];
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

router.afterEach((to, from) => {
  // if (to.name == "login") to.meta.transition = "toleft";
  // if (from.name == "login") to.meta.transition = "toright";
  // // 设置过渡方向
  // if (to.meta.sort && from.meta.sort) {
  //   (to.meta.sort as number) > (from.meta.sort as number)
  //     ? (to.meta.transition = "totop")
  //     : (to.meta.transition = "tobottom");
  // }
  // if (to.meta.other && from.meta.sort) to.meta.transition = "toright";
  // if (to.meta.sort && from.meta.other) to.meta.transition = "toleft";
  // if (to.meta.other && from.meta.sort) console.log("toleft");
  // if (to.meta.sort && from.meta.other) console.log("toright");
});
export default router;
