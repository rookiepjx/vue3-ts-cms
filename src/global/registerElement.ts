import { App } from 'vue'
// 导入公共基础css
import 'element-plus/theme-chalk/index.css'
import { ElButton, ElTag } from 'element-plus/lib/index'

const components = [ElButton, ElTag]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
