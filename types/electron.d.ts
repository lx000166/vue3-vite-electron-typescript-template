/*
 * @Author: lx000
 * @Date: 2021-11-05 14:12:31
 * @LastEditTime: 2021-11-17 20:48:26
 * @Description: 描述
 */
// ? 扩展window对象
interface Window {
  /** NodeJs fs */
  fs: typeof import('fs')
  /** Electron ipcRenderer */
  ipc: import('electron').IpcRenderer
}