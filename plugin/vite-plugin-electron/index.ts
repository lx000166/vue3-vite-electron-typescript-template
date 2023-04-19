/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-19 09:25:25
 * @Description:
 */
import type { Plugin } from "vite";
import tsup from "tsup";
import chalk from "chalk";
import { logVPE, getAddress } from "./utils";
import { startE, closeE } from "./startOrReloadElectron";

/**
 * @description tsup监听electron/* 文件修改,重新编译后,再次启动 {tsup.config.ts--3}
 */
const tsupoOnSuccess = async () => startE(process);
interface params {
  target: "mac" | "win" | "all";
}
export const electronStart = ({ target }: params): Plugin => ({
  name: "electron-start",
  configureServer(server) {
    // 被调用的后置钩子
    return () => {
      server.httpServer?.on("listening", async () => {
        // 获取vite server地址
        const address = getAddress(server, process);
        process.env.LoadUrl = address;

        // 重启前先杀死当前正在运行的 electron 程序
        closeE(process);

        // tsup打包electron,并通过回调函数启动
        logVPE(chalk.blue("tsup build start"));
        await tsup.build({
          onSuccess: tsupoOnSuccess,
          watch: "electron/"
        });
      });
    };
  },
  buildEnd() {
    if (process.env.NODE_ENV !== "development") {
      console.log("\n");
      logVPE(chalk.blue("tsup build start"));
      tsup.build({
        onSuccess: async () => {
          logVPE(chalk.green("tsup build end"));
          // process.exit(0);
        }
      });
    }
  }
});
