/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-17 10:58:37
 * @Description:
 */
/*
 * @Author: lx000
 * @Date: 2021-11-11 12:08:22
 * @LastEditTime: 2023-04-12 10:12:40
 * @Description: 描述
 */
import type { RouteRecordRaw } from "vue-router";

type routeItem = PageRouter.Sidebar.CustomRoute & RouteRecordRaw;
type SidebarRoutes = routeItem[];

const sidebarRoutes: SidebarRoutes = [
  {
    path: "/home",
    name: "home",
    meta: {
      sort: 1,
      name: "首页",
      icon: "icon-shouye",
      color: { start: [44, 83, 100], end: [15, 32, 39] }
    },
    component: () => import("@/pages/setting/index.vue")
  },
  {
    path: "/course",
    name: "course",
    meta: {
      sort: 2,
      name: "课程中心",
      icon: "icon-fenlei"
    },
    component: () => import("@/pages/setting/index.vue")
  },

  {
    path: "/study",
    name: "study",
    meta: {
      sort: 3,
      name: "我的学习",
      icon: "icon-shuaxin1",
      needLogin: true
    },
    component: () => import("@/pages/setting/index.vue")
  },
  {
    path: "/attendant",
    name: "attendant",
    meta: {
      sort: 4,
      name: "服务中心",
      icon: "icon-pintuan"
    },
    component: () => import("@/pages/setting/index.vue")
  },
  {
    path: "/mars3D",
    name: "mars3D",
    meta: {
      sort: 5,
      name: "mars3D",
      icon: "icon-shezhi",
      // color: { start: [203, 202, 165], end: [51, 77, 80] }
      color: { start: [187, 210, 197], end: [8, 64, 96] }
    },
    component: () => import("@/pages/mars3D/index.vue")
  }
];

export { sidebarRoutes };
