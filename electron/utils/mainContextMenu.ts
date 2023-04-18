/*
 * @Date: 2023-04-17 15:36:45
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-18 13:18:57
 * @Description:主进程设置全局右键菜单
 */
import { Menu, BrowserWindow } from "electron";

/**
 * @desc: 主进程设置右键菜单  生成的是win/mac上系统自带的样式的菜单 在创建窗口(createWindow.ts)时调用此函数设置
 * @param  {BrowserWindow} Window  窗口BrowserWindow实例
 */
export function mainContextMenu(Window: BrowserWindow) {
  // 定义菜单项
  const contextMenu = [
    { label: "测试1" },
    {
      label: "重载页面",
      click() {
        Window.webContents.reloadIgnoringCache();
      }
    },
    {
      label: "检查元素",
      click() {
        Window.webContents.openDevTools();
      }
    }
  ];

  /** 创建菜单 */
  const MENU = Menu.buildFromTemplate(contextMenu);

  // * 监听右键点击事件,设置菜单
  Window.webContents.on("context-menu", () => {
    MENU.popup();
  });
}
