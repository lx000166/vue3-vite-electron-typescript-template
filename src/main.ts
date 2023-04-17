import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import AppIcon from "@/utils/aliicons"; // * 阿里图标库
import router from "@/router/router";

import "./style.css";
import "normalize.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("AppIcon", AppIcon);

app.mount("#app");
