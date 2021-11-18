/*
 * @Author: lx000
 * @Date: 2021-11-16 15:14:10
 * @LastEditTime: 2021-11-16 15:18:29
 * @Description: 描述
 */
import { RouteRecordRaw } from 'vue-router'
interface metaRequired {
  sort: number
}
type customRoute = {
  /**
   * @Description `path` 必须使用绝对路径以避免递归路由时的key冲突
   * @example  路径 path: "/notes" 的子路由使用 path: "/notes/note1" 而不是 path: "note1".
   */
  path: `/${string}`
  /**
   * @required 必须
   * @Description 用于切换路由时比对sort大小来动态设置路由切换动画
   */
  meta: metaRequired
  children?: route[]
}
type route = RouteRecordRaw & customRoute
export { route }