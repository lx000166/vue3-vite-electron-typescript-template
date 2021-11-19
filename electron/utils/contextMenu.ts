/*
 * @Author: lx000
 * @Date: 2021-11-19 14:02:43
 * @LastEditTime: 2021-11-19 16:04:41
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
  // const window = BrowserWindow.fromWebContents(e.sender) as Electron.BrowserWindow; // 获取窗口实例
  // const isFullScreen = window.isFullScreen(); // 判断窗口现在是否全屏
  // window.setFullScreen(!isFullScreen);
};
const methods: methods = {
  openDevTool,
  fullScreen
};
