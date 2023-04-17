/*
 * @Author: lixin
 * @Date: 2022-05-10 10:36:42
 * @LastEditors: lixin
 * @LastEditTime: 2023-03-31 14:25:15
 * @Description: 引入阿里图标库,线上地址(//at.alicdn.com/xxxx)只能开发时使用
 */
import { createFromIconfontCN } from "@ant-design/icons-vue";
const AppIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_2915557_frxvi2ymnh5.js"
  // scriptUrl: "defaultIcon/iconfont.js",
});
export default AppIcon;
