import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('desktop', {
  // 预留桥接接口
});
