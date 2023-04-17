import type { Plugin } from "vite";
import tsup from "tsup";
import chalk from "chalk";
import { logVPE, getAddress } from "./utils";
import { startE, closeE } from "./startOrReloadElectron";

const tsupoOnSuccess = async () => startE(process);

export const electronStart = (): Plugin => ({
  name: "electron-start",
  configureServer(server) {
    process.env.NODE_ENV = "dev";
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
          onSuccess: tsupoOnSuccess
        });
      });
    };
  },
  closeBundle() {
    console.log("closeBundle");
  },
  closeWatcher() {
    console.log("closeWatcher");
  }
});
