import { spawn } from "child_process";
import electron from "electron";
import chalk from "chalk";
import { logVPE } from "./utils";

// 启动electron
export const startE = (process: NodeJS.Process) => {
  logVPE("Run in DEV mode,Electron Load Url:", chalk.hex("#53BAB9").bold(process.env.LoadUrl));

  closeE(process);
  process.electronProcess = spawn(electron as any, ["./output/electron/main.cjs"], {
    stdio: "inherit"
  });
  // eleltron退出时,关闭vite服务
  process.electronProcess.on("close", () => {
    logVPE(chalk.red("electron process exit! ➜ ➜ Exit vite"));
    process.exit();
  });
};
export const closeE = (process: NodeJS.Process) => {
  if (process.electronProcess) {
    process.electronProcess.removeAllListeners();
    process.electronProcess.kill();
  }
};
