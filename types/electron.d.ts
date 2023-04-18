// ? 扩展window对象
interface Window {
  /** Electron ipcRenderer  electron\preload.ts 中向window上挂载的通信方法 */
  ipc: import("electron").IpcRenderer;
}

declare namespace NodeJS {
  /**
   * plugin\vite-plugin-electron\startOrReloadElectron.ts
   */
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
  interface BrowserWindow {
    isMax?: boolean | null;
  }
}
declare namespace ElectronPriv {
  interface MenuObj {
    lable: string;
    id: string;
    type: string;
    child: Menu | null;
  }
  type Menu = MenuObj[];
}
