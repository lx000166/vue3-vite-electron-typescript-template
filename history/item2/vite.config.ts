/*
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-12-03 16:04:17
 * @Description:  vite 配置文件
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
/**按需导入组件库  查看=>https://zhuanlan.zhihu.com/p/423194571 */
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  server: {
    strictPort: true, // * 固定端口(如果端口被占用则中止)
    host: true, // 0.0.0.0
    port: 3920 // 指定启动端口
  }
});
