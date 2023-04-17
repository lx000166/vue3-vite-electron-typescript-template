"use strict";

// electron/preload.ts
var import_electron = require("electron");
import_electron.contextBridge.exposeInMainWorld("ipc", {
  send: (channel, ...args) => import_electron.ipcRenderer.send(channel, ...args),
  invoke: (channel, ...args) => import_electron.ipcRenderer.invoke(channel, ...args),
  on: (channel, listener) => {
    import_electron.ipcRenderer.on(channel, listener);
  },
  once: (channel, listener) => {
    import_electron.ipcRenderer.once(channel, listener);
  }
});
