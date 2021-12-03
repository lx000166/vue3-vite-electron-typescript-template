/*
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-12-03 10:44:47
 * @Description:  vite 配置文件
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    strictPort: true, // * 固定端口(如果端口被占用则中止)
    host: true, // 0.0.0.0
    port: 3920 // 指定启动端口
  }
});
