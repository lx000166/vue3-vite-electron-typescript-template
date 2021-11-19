/*
 * @Author: lx000
 * @Date: 2021-11-19 14:02:43
 * @LastEditTime: 2021-11-19 16:56:49
 * @Description: 渲染进程的右键菜单
 */

import { ipcMain, BrowserWindow } from "electron";
interface methods {
  [propName: string]: Function;
}
/**
 * @desc: 渲染进程点击自定义菜单项后,通过进程通讯调用主进程方法,实现渲染进程右键菜单
 * @param {string } key 如'inspect' 传参为methods中键名,
 */
export function onContextMenu() {
  ipcMain.on("contentMenu", (event, key: string) => {
    methods[key] && methods[key](event);
  });
}

type route = extendWindow & Electron.BrowserWindow;
interface extendWindow {
  isMax: boolean | null | undefined;
}
const openDevTool = (e: Electron.IpcMainEvent) => e.sender.openDevTools();
const fullScreen = async (e: Electron.IpcMainEvent) => {
  const window = BrowserWindow.fromWebContents(e.sender) as route; // 获取窗口实例
  const isMac = process.platform == "darwin";
  if (isMac) {
    const isSimpleFS = window.isSimpleFullScreen();
    window.setSimpleFullScreen(!isSimpleFS);
    console.log(isSimpleFS);
  } else {
    if (window.isMax) {
      window.setFullScreen(false);
    } else {
      window.setFullScreen(true);
    }
    window.isMax = !window.isMax;
  }
};
const methods: methods = {
  openDevTool,
  fullScreen
};
