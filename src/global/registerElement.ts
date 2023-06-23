import { App } from 'vue'
// 导入公共基础css
import 'element-plus/theme-chalk/index.css'
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElConfigProvider,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElSelect,
  ElSubMenu,
  ElTabPane,
  ElTabs,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElAvatar,
  ElDropdown,
  ElDropdownItem
} from 'element-plus/lib/index'
import * as Icons from '@element-plus/icons-vue'

const components = [
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElConfigProvider,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubMenu,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRow,
  ElCol,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElAvatar,
  ElDropdown,
  ElDropdownItem
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons])
  })
}
