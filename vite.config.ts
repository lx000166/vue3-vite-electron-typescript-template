/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-07 09:13:29
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
// <script setup lang="ts" name="app">
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import WindiCSS from "vite-plugin-windicss";
import { electronStart } from "./plugin/vite-plugin-electron/index";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // * 打包相对路径,否则electron加载index.html时找不到css,js文件
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 路径别名
      "~s": path.resolve(__dirname, "src/store"), // 路径别名
      "~h": path.resolve(__dirname, "src/hooks") // 路径别名
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    WindiCSS(),
    electronStart(),
    // 自动按需导入组件库
    Components({
      resolvers: [NaiveUiResolver()],
      dts: "types/components.d.ts"
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      dts: "types/auto-import.d.ts"
    })
  ]
});
