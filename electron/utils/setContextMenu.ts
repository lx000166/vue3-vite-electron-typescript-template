/*
 * @Author: lx000
 * @Date: 2021-11-12 10:34:00
 * @LastEditTime: 2021-11-14 15:44:14
 * @Description: 设置右键菜单
 */
import { Menu, BrowserWindow } from "electron";

/**
 * @desc: 设置右键菜单
 * @param  {BrowserWindow} Window  窗口BrowserWindow实例
 */
export function setContextMenu(Window: BrowserWindow) {

  // 定义菜单项
  const contextMenu = [
    { label: '测试1' },
    { label: '测试2', click() { console.log('ok') } },
    { label: '检查元素', click() { Window.webContents.openDevTools() } },
  ]

  /** 创建菜单 */
  const MENU = Menu.buildFromTemplate(contextMenu);

  /** // todo 为每个渲染进程/组件单独设置右键菜单
   * @tips 监听右键点击 在点击位置显示菜单组件（比如antdvue菜单组件,点击菜单项发送ipc事件，传递菜单项ID到主进程，主进程函数通过ID判断执行什么事件
   * @example
   * document.getElementById('sidebar').addEventListener('contextmenu',()=>{window.ipc.send('context-menu-change',id)})
   * ipcMain.on('context-menu-change',(event,id)=> {if(id == 1) event.sender.openDevTools()})
 */

  // * 监听右键点击事件,设置菜单
  Window.webContents.on('context-menu', () => {
    MENU.popup()
  })
}