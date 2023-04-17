"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// electron/main.ts
var import_electron7 = require("electron");

// electron/utils/createWindow.ts
var import_electron2 = require("electron");

// electron/utils/setContextMenu.ts
var import_electron = require("electron");
function setContextMenu(Window) {
  const contextMenu = [
    { label: "\u6D4B\u8BD51" },
    {
      label: "\u91CD\u8F7D\u9875\u9762",
      click() {
        Window.webContents.reloadIgnoringCache();
      }
    },
    {
      label: "\u68C0\u67E5\u5143\u7D20",
      click() {
        Window.webContents.openDevTools();
      }
    }
  ];
  const MENU = import_electron.Menu.buildFromTemplate(contextMenu);
  Window.webContents.on("context-menu", () => {
    MENU.popup();
  });
}

// electron/utils/createWindow.ts
var path = __toESM(require("path"), 1);
var NODE_ENV = process.env.NODE_ENV;
function createWindow() {
  const Window = new import_electron2.BrowserWindow({
    minWidth: 1120,
    minHeight: 645,
    width: 1120,
    // * 指定启动app时的默认窗口尺寸
    height: 645,
    // * 指定启动app时的默认窗口尺寸
    frame: false,
    // * app边框(包括关闭,全屏,最小化按钮的导航栏) @false: 隐藏
    transparent: false,
    // * app 背景透明
    hasShadow: true,
    // * app 边框阴影
    show: false,
    // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
    resizable: false,
    // 禁止手动修改窗口尺寸
    webPreferences: {
      // 加载脚本
      preload: path.join(__dirname, "preload.cjs")
    }
  });
  Window.once("ready-to-show", () => {
    Window.show();
  });
  Window.on("unmaximize", (event) => {
    event.sender.setResizable(true);
    setTimeout(() => {
      event.sender.setResizable(false);
    }, 1);
  });
  setContextMenu(Window);
  if (NODE_ENV === "dev")
    Window.loadURL(process.env.LoadUrl);
  if (NODE_ENV !== "dev")
    Window.loadFile(path.join(__dirname, "..", "vite/index.html"));
}

// electron/utils/menu.ts
var import_electron4 = require("electron");

// electron/utils/utils.ts
var import_electron3 = require("electron");
function getfocusWindow() {
  return import_electron3.BrowserWindow.getFocusedWindow();
}
function openDevTools() {
  var _a;
  (_a = getfocusWindow()) == null ? void 0 : _a.webContents.openDevTools();
}
function reloadWeb() {
  var _a;
  (_a = getfocusWindow()) == null ? void 0 : _a.webContents.reload();
}
function reloadNoCacheWeb() {
  var _a;
  (_a = getfocusWindow()) == null ? void 0 : _a.webContents.reloadIgnoringCache();
}

// electron/utils/menu.ts
function onAppMenu() {
  import_electron4.ipcMain.handle(
    "getAppMenu",
    () => process.platform == "darwin" ? null : getmenu()
  );
  import_electron4.ipcMain.on("MenuClick", (event, menuItemId) => {
    var _a;
    const menuItem = (_a = import_electron4.Menu.getApplicationMenu()) == null ? void 0 : _a.getMenuItemById(menuItemId);
    menuItem == null ? void 0 : menuItem.click();
  });
}
function createAppMenu() {
  const AppMenu = [
    // 在mac上,第一个自定义menuItem的label会被应用名覆盖
    //此label会被package.json打包配置中的 `build.productName = ‘后台管理’` 覆盖
    { id: "1", label: "App", submenu: [{ id: "1-1", label: "\u6D4B\u8BD5" }] },
    {
      id: "2",
      label: "\u5F00\u53D1",
      submenu: [
        {
          id: "2-1",
          label: "\u6D4B\u8BD5",
          submenu: [
            {
              id: "2-1-1",
              label: "\u6D4B\u8BD5-1",
              submenu: [
                { id: "2-1-4-1", label: "\u6D4B\u8BD5-1-1" },
                { id: "2-1-4-1", label: "\u6D4B\u8BD5-1-2" }
              ]
            },
            { id: "2-1-2", label: "\u6D4B\u8BD5-2" },
            { id: "2-1-3", label: "\u6D4B\u8BD5-3" },
            {
              id: "2-1-4",
              label: "\u6D4B\u8BD5-4",
              submenu: [
                { id: "2-1-4-1", label: "\u6D4B\u8BD5-4-1" },
                { id: "2-1-4-1", label: "\u6D4B\u8BD5-4-2" }
              ]
            }
          ]
        },
        {
          id: "2-2",
          label: "\u68C0\u67E5\u5143\u7D20",
          click() {
            openDevTools();
          }
        }
      ]
    }
  ];
  const appMenu = import_electron4.Menu.buildFromTemplate(AppMenu);
  return appMenu;
}
function getmenu() {
  function menu(ims2) {
    let menuArr = [];
    ims2.map((im) => {
      let menuObj = {
        lable: im.label,
        id: im.id,
        type: im.type,
        child: im.type == "submenu" && im.submenu ? menu(im.submenu.items) : null
      };
      menuArr.push(menuObj);
    });
    return menuArr;
  }
  const ims = import_electron4.Menu.getApplicationMenu();
  return menu(ims.items);
}

// electron/utils/navbar.ts
var import_electron5 = require("electron");
function onNavbar() {
  import_electron5.ipcMain.on("navBar", (event, val) => {
    const window = import_electron5.BrowserWindow.fromWebContents(event.sender);
    if (val == "openDevT") {
      openDevTools();
    }
    if (val == "reloadNoCach") {
      reloadNoCacheWeb();
    }
    if (val == "reload") {
      reloadWeb();
    }
    if (val == "mini") {
      window == null ? void 0 : window.minimize();
    }
    if (val == "close") {
      window == null ? void 0 : window.close();
    }
    if (val == "big") {
      window == null ? void 0 : window.setResizable(true);
      (window == null ? void 0 : window.isMaximized()) ? window == null ? void 0 : window.unmaximize() : window == null ? void 0 : window.maximize();
      window == null ? void 0 : window.setResizable(false);
    }
  });
}

// electron/utils/contextMenu.ts
var import_electron6 = require("electron");
function onContextMenu() {
  import_electron6.ipcMain.on("contentMenu", (event, key) => {
    methods[key] && methods[key](event);
  });
}
var openDevTool = (e) => e.sender.openDevTools();
var reloadIgnoringCache = (e) => {
  e.sender.reloadIgnoringCache();
};
var fullScreen = async (e) => {
  const window = import_electron6.BrowserWindow.fromWebContents(e.sender);
  const isMac = process.platform == "darwin";
  if (isMac) {
    const isSimpleFS = window.isSimpleFullScreen();
    window.setSimpleFullScreen(!isSimpleFS);
  } else {
    window.isMax ? window.setFullScreen(false) : window.setFullScreen(true);
    window.isMax = !window.isMax;
  }
};
var methods = {
  openDevTool,
  fullScreen,
  reloadIgnoringCache
};

// electron/main.ts
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
onNavbar();
onAppMenu();
onContextMenu();
import_electron7.app.on("ready", () => {
  import_electron7.Menu.setApplicationMenu(createAppMenu());
  createWindow();
  import_electron7.app.on("activate", () => import_electron7.BrowserWindow.getAllWindows().length === 0 && createWindow());
});
import_electron7.app.on("window-all-closed", () => {
  process.platform !== "darwin" && import_electron7.app.quit();
});
