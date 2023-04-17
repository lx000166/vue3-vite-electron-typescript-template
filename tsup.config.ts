import { defineConfig } from "tsup";
export default defineConfig({
  watch: "electron/", // 开启文件变化监听,当目录下文件变化后,重新编译
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
