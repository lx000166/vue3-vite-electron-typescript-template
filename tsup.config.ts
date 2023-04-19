/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-19 09:29:08
 * @Description:
 */
import { defineConfig } from "tsup";
export default defineConfig({
  format: "cjs", // 输出cjs
  sourcemap: false,
  entry: ["electron/*"],
  outDir: "output/electron", // * 编译生成的文件存放路径
  target: "node16",
  skipNodeModulesBundle: true,
  clean: true,
  platform: "node",
  dts: false
});
