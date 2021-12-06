/*
 * @Author: lx000
 * @Date: 2021-11-05 10:21:41
 * @LastEditTime: 2021-12-06 14:31:10
 * @Description: createWindow
 */
import { BrowserWindow } from "electron";
import * as path from "path";
/**
 * packages.json,script中通过cross-env NODE_ENV=production设置的环境变量
 * 'production'|'development'
 */
const NODE_ENV = process.env.NODE_ENV;
/** 创建窗口方法 */
function createWindow() {
  // 生成窗口实例
  const Window = new BrowserWindow({
    minWidth: 1120,
    minHeight: 645,
    width: 1120, // * 指定启动app时的默认窗口尺寸
    height: 645, // * 指定启动app时的默认窗口尺寸
    frame: false, // * app边框(包括关闭,全屏,最小化按钮的导航栏) @false: 隐藏
    transparent: true, // * app 背景透明
    hasShadow: false, // * app 边框阴影
    show: false, // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
    resizable: false, // 禁止手动修改窗口尺寸
    webPreferences: {
      // 加载脚本
      preload: path.join(__dirname, "..", "preload")
    }
  });

  // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
  Window.once("ready-to-show", () => {
    Window.show(); // 显示窗口
  });
  // * 主窗口加载外部链接
  if (NODE_ENV === "development") Window.loadURL("http://localhost:3920/"); // 开发环境,加载vite启动的vue项目地址
  if (NODE_ENV !== "development")
    Window.loadFile(path.join(__dirname, "..", "..", "dist/index.html")); // 生产环境加载打包后文件
}
export { createWindow };
