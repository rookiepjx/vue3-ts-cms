import { App } from 'vue'
// 导入公共基础css
import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
} from 'element-plus/lib/index'

const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
