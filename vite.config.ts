/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-18 17:15:36
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// ? <script setup lang="ts" name="xxx">
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import { electronStart } from "./plugin/vite-plugin-electron/index";

/**
 * * 示例:自动按需引入naiveUI
 *    import { NaiveUiResolver,AntDesignVueResolver } from "unplugin-vue-components/resolvers";
 *    Components({
 *      ...
 * +    resolvers: [NaiveUiResolver()],
 *    }),
 *
 *  AutoImport({
 *    imports: [
 *     ...
 *      {
 *        "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
 *      }
 *    ]
 *  })
 */

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
    electronStart({
      target: "win"
    }),
    // 自动按需导入组件库,自动导入components/*下组件
    Components({
      dts: "types/components.d.ts"
    }),
    // 自动引入
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      dts: "types/auto-import.d.ts"
    })
  ],
  build: {
    outDir: "output/vite" // 打包输出文件路径
  }
});
