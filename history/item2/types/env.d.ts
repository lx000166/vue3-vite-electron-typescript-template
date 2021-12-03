/*
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-12-03 14:08:10
 * @Description: 描述
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface menuObj {
  lable: string;
  id: string;
  type: string;
  child: menuObj[] | null;
}
