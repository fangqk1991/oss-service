import { AppPluginProtocol } from '@fangcha/backend-kit/lib/basic'
import { OssSpecDocItem } from '../specs'
import { OSSService, OssServiceOptions } from '../main'
import { ResourceHandleTask } from '../resque'

export const OssSdkPlugin = (options: OssServiceOptions): AppPluginProtocol => {
  return {
    appDidLoad: async () => {
      OSSService.init(options)
    },
    specDocItem: OssSpecDocItem,
    resqueModuleMap: {
      ResourceHandleTask: ResourceHandleTask,
    },
  }
}
