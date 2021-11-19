/*
 * @Author: lx000
 * @Date: 2021-11-05 10:47:11
 * @LastEditTime: 2021-11-19 15:40:08
 * @Description: 工具函数
 */
import { BrowserWindow } from "electron";

/**获取被选中(拥有焦点/前台显示)的窗口实例*/
export function getfocusWindow(): BrowserWindow | null {
  return BrowserWindow.getFocusedWindow();
}

/**打开控制台 */
export function openDevTools() {
  getfocusWindow()?.webContents.openDevTools();
}
export function dealy(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
