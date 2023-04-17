// ? 扩展window对象
interface Window {
  /** NodeJs fs */
  fs: typeof import("fs");
  /** Electron ipcRenderer  electron\preload.ts 中向window上挂载的通信方法 */
  ipc: import("electron").IpcRenderer;
}

declare namespace NodeJS {
  interface Process {
    electronProcess: import("child_process").ChildProcessWithoutNullStreams | null;
  }
}
declare namespace Electron {
  /**
   * electron\utils\createWindow.ts
   * Window.on("unmaximize",(e:WindowEvent=>{}))
   */
  interface WindowEvent {
    sender: BrowserWindow;
  }
}
