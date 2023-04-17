/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-12 10:04:59
 * @Description:
 */
// TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块。相反地，如果一个文件不带有顶级的 import 或者 export 声明，那么它的内容被视为全局可见的
// import type { RouteRecordRaw } from "vue-router";

declare namespace PageRouter {
  namespace Sidebar {
    interface metaRequired {
      /**排序(决定路由过渡滚动方向) */
      sort: number;
      /**侧边栏显示名称 */
      name: string;
      /**侧边栏图标 */
      icon: string;
      /**是否需要登录 */
      needLogin?: boolean;
      /** 过渡动画类名,在路由拦截器中设置 */
      transition?: string;
      /**
       * 背景渐变
       * {undefined} 随机
       * {TransitionBG.RandomColorItem} 固定
       * @type {TransitionBG.colorParams}
       */
      color?: TransitionBG.RandomColorItem;
    }
    interface CustomRoute {
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
    }
  }
}
