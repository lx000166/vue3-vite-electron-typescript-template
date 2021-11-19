/*
 * @Author: lx000
 * @Date: 2021-11-19 14:02:43
 * @LastEditTime: 2021-11-19 16:21:48
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

const openDevTool = (e: Electron.IpcMainEvent) => e.sender.openDevTools();
const fullScreen = async (e: Electron.IpcMainEvent) => {
  const window = BrowserWindow.fromWebContents(e.sender) as Electron.BrowserWindow; // 获取窗口实例
  const isMac = process.platform == "darwin";
  console.log(isMac);

  if (isMac) {
    const isSimpleFS = window.isSimpleFullScreen();
    window.setSimpleFullScreen(!isSimpleFS);
    console.log(isSimpleFS);
  } else {
    const isSimpleFS = window.isFullScreen();
    window.setFullScreen(!isSimpleFS);
    console.log(isSimpleFS);
  }
};
const methods: methods = {
  openDevTool,
  fullScreen
};
