/*
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-11-19 11:56:42
 * @Description: 描述
 */
import { createApp } from "vue";
import router from "@/router/router";
import App from "./App.vue";
import Container from "@/components/container.vue";

// ? 样式文件
import "normalize.css"; // 初始化样式
import "@/assets/icon/iconfont.css"; // 字体图标
import "@/assets/style/overall.less"; // 全局样式
import "@/assets/style/coverAntD.less"; // 覆盖antd样式

const app = createApp(App);
app.component("Container", Container);
app.use(router);
app.mount("#app");
