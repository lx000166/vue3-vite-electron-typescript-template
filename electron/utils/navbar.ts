import { BrowserWindow, ipcMain } from "electron";
import { openDevTools, reloadNoCacheWeb, reloadWeb } from "./utils";

/**
 * @description 进程通讯 渲染进程点击顶部关闭,最小化...按钮时,传递 {val}参数,
 * 主进程通过 BrowserWindow.fromWebContents(event.sender)拿到活动窗口的BrowserWindow实例,再通过minimize()等实例方法操作窗口
 * @param {Electron.WebContents} event.sender
 * @param val {'mini'|'big'|'close'}
 * @example
 * window.ipc.send('navBar', val) // 渲染进程中
 *  */
export function onNavbar() {
  ipcMain.on("navBar", (event, val) => {
    const window: Electron.BrowserWindow | null = BrowserWindow.fromWebContents(event.sender);

    if (val == "openDevT") {
      openDevTools();
    } // 打开控制台
    if (val == "reloadNoCach") {
      reloadNoCacheWeb();
    } // 无缓存重载窗口
    if (val == "reload") {
      reloadWeb();
    } // 重载窗口
    if (val == "mini") {
      window?.minimize();
    } // 最小化窗口
    if (val == "close") {
      window?.close();
    } // 关闭窗口
    if (val == "big") {
      // 全屏/取消全屏
      window?.setResizable(true);
      window?.isMaximized() ? window?.unmaximize() : window?.maximize();
      window?.setResizable(false);
    }
  });
}
