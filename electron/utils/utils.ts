/*
 * @Author: lx000
 * @Date: 2021-11-05 10:47:11
 * @LastEditTime: 2023-03-29 16:39:35
 * @Description: 工具函数
 */
import { BrowserWindow, app, session } from "electron";

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
  if (NODE_ENV === "dev")
    session.defaultSession.loadExtension(
      "/Users/liylo/Library/Application Support/Google/Chrome/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/6.2.1_0"
    );
}
