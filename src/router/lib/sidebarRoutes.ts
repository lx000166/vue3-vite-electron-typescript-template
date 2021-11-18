/*
 * @Author: lx000
 * @Date: 2021-11-11 12:08:22
 * @LastEditTime: 2021-11-18 23:11:20
 * @Description: 描述
 */
import type { RouteRecordRaw } from "vue-router";

interface metaRequired {
  /**排序(决定路由过渡滚动方向) */
  sort: number;
  /**起始颜色(背景上方颜色) */
  start: number[];
  /**结束颜色 (背景下方颜色) */
  end: number[];
  /**侧边栏显示名称 */
  name: string;
  /**侧边栏图标 */
  icon: string;
}
type customRoute = {
  /**
   * @Description `path` 必须使用绝对路径以避免递归路由时的key冲突
   * @example  路径 path: "/notes" 的子路由使用 path: "/notes/note1" 而不是 path: "note1".
   */
  path: `/${string}`;
  /**
   * 侧边栏导航通过传递name实现
   */
  name: string;
  /**
   * @required 必须
   * @Description 用于切换路由时比对sort大小来动态设置路由切换动画
   */
  meta: metaRequired;
};
type route = RouteRecordRaw & customRoute;

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
      name: "笔记",
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
