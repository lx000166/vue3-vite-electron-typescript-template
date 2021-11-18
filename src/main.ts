/*
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-11-18 12:04:25
 * @Description: 描述
 */
import { createApp } from "vue";
import router from "@/router/router";
import App from "./App.vue";

// ? 样式文件
import "normalize.css"; // 初始化样式
import "@/assets/overall.css"; // 全局样式
import "@/assets/coverAntD.less"; // 覆盖antd样式
import "tailwindcss/tailwind.css"; // tailwindcss 样式

const app = createApp(App);
app.use(router);
app.mount("#app");
