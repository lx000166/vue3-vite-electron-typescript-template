/*
 * @Author: lx000
 * @Date: 2021-11-11 12:08:22
 * @LastEditTime: 2021-11-18 16:01:05
 * @Description: 描述
 */
import { route } from "~/extend-route";

const sidebarRoutes: route[] = [
  {
    path: "/page1",
    name: "page1",
    meta: {
      sort: 1,
      start: [170, 74, 106],
      end: [7, 51, 58],
      name: "WELCOME",
      icon: "icon-ts-tubiao_component"
    },
    component: () => import("@/view/page-1.vue")
  },
  {
    path: "/page2",
    name: "page2",
    meta: {
      sort: 2,
      start: [61, 81, 80],
      end: [222, 203, 165],
      name: "CHART",
      icon: "icon-chart-line"
    },
    component: () => import("@/view/page-2.vue")
  },

  {
    path: "/page3",
    name: "page3",
    meta: {
      sort: 3,
      start: [41, 49, 73],
      end: [126, 139, 145],
      name: "App Store",
      icon: "icon-appstoreadd"
    },
    component: () => import("@/view/page-3.vue")
  },
  {
    path: "/page4",
    name: "page4",
    meta: {
      sort: 4,
      start: [74, 86, 99],
      end: [225, 95, 96],
      name: "GitHub",
      icon: "icon-github"
    },
    component: () => import("@/view/page-4.vue")
  },
  {
    path: "/page5",
    name: "page5",
    meta: {
      sort: 5,
      start: [53, 91, 124],
      end: [186, 104, 126],
      name: "设置",
      icon: "icon-settings"
    },
    component: () => import("@/view/page-5.vue")
  }
];

export { sidebarRoutes };
