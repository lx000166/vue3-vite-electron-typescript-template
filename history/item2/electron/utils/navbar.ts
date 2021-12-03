/*
 * @Author: lx000
 * @Date: 2021-11-14 15:20:27
 * @LastEditTime: 2021-12-03 17:14:09
 * @Description: 渲染进程点击顶部关闭,最小化...按钮时,调用的方法
 */

import { BrowserWindow, ipcMain } from "electron";

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
    /**
     * 通过BrowserWindow.fromWebContents方法拿到window实例
     * event.sender 是发送消息的WebContents实例
     */
    const window: Electron.BrowserWindow | null = BrowserWindow.fromWebContents(event.sender);

    if (val == "mini") {
      window?.minimize();
    } // 最小化窗口
    if (val == "close") {
      window?.close();
    } // 关闭窗口
    if (val == "big") {
      // 全屏/取消全屏
      // 因为在createWindow.ts中禁用了修改窗口尺寸(resizable: false),这里先解除
      window?.setResizable(true);
      window?.isMaximized() ? window?.unmaximize() : window?.maximize();
      window?.setResizable(false);
    }
  });
}
