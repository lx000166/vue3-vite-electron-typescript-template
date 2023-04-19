/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-19 10:48:57
 * @Description:
 */
import { BrowserWindow, session } from "electron";
import path from "path";

/**获取被选中(拥有焦点/前台显示)的窗口实例*/
export function getfocusWindow(): BrowserWindow | null {
  return BrowserWindow.getFocusedWindow();
}

/**打开控制台 */
export function openDevTools() {
  getfocusWindow()?.webContents.openDevTools();
}
/**刷新页面 */
export function reloadWeb() {
  getfocusWindow()?.webContents.reload();
}
/**刷新页面 */
export function reloadNoCacheWeb() {
  getfocusWindow()?.webContents.reloadIgnoringCache();
}

export function dealy(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
export function loadVueDevTools() {
  const NODE_ENV = process.env.NODE_ENV;
  if (NODE_ENV === "development")
    try {
      session.defaultSession.loadExtension(
        path.resolve(__dirname, "../../extension/vueDevTools-6.5.0_0")
      );
    } catch (error) {}
}
