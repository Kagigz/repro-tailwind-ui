import Antd from 'ant-design-vue'

import { type UserModule } from '~/types'

import 'ant-design-vue/dist/antd.less'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient)
    app.use(Antd)
}
