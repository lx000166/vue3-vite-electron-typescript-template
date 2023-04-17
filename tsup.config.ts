/*
 * @Author: lixin
 * @Date: 2022-08-09 16:30:59
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-03 13:16:50
 * @Description: tsup配置文件,用于编译electron/ 下ts文件为cjs
 */
import { defineConfig } from "tsup";
export default defineConfig({
  watch: "electron/",
  format: "cjs",
  sourcemap: false,
  entry: ["electron/*"],
  // tsconfig: "tsconfig.e.json",
  outDir: "output/electron", // * 编译生成的文件存放路径
  target: "node16",
  skipNodeModulesBundle: true,
  clean: true,
  platform: "node",
  dts: false
});
