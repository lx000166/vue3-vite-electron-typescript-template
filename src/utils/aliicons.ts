/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-19 09:42:35
 * @Description:加载线上或本地阿里矢量图标库图标
 */
import { createFromIconfontCN } from "@ant-design/icons-vue";
const AppIcon = createFromIconfontCN({
  // scriptUrl: "//at.alicdn.com/t/c/font_2915557_frxvi2ymnh5.js"
  scriptUrl: "iconfont/iconfont.js"
});
export default AppIcon;
