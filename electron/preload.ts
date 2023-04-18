import { contextBridge, ipcRenderer } from "electron";

/**
 * 通信方法挂载到window对象上
 * 在渲染进程中使用:
 * <script setup lang="ts">
 *  window.ipc.on('WindowID', (e, f) => console.log(e, f))
 *  window.ipc.send('navBar', val)
 * </script>
 */
contextBridge.exposeInMainWorld("ipc", {
  send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
  invoke: (channel: string, ...args: any[]): Promise<any> => ipcRenderer.invoke(channel, ...args),
  on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.on(channel, listener);
  },
  once: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.once(channel, listener);
  }
});
