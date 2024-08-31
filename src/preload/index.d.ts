import { ElectronAPI } from '@electron-toolkit/preload'
// import { ProjectCreateSchema } from '@taurius/communication/schemas'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    // {
    //   project: {
    //     create: (_: ProjectCreateSchema) => Promise<{ id: string }>
    //   }
    // }
  }
}
