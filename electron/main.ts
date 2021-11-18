/*
 * @Author: lx000
 * @Date: 2021-11-04 10:49:02
 * @LastEditTime: 2021-11-18 08:51:53
 * @Description: electron 主进程
 */
import { app, BrowserWindow, Menu } from 'electron'
import { createWindow } from './utils/createWindow'
import { onAppMenu, createAppMenu } from './utils/menu'
import { onNavbar } from './utils/navbar'

onNavbar()
onAppMenu()

app.on('ready', () => {
    // 设置app菜单
    Menu.setApplicationMenu(createAppMenu())
    createWindow() // 创建窗口
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他打开的窗口，那么程序会重新创建一个窗口。
    app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow())
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 macOS窗口全部关闭时,dock中程序不会退出
app.on('window-all-closed', () => {
    process.platform !== 'darwin' && app.quit()
})
