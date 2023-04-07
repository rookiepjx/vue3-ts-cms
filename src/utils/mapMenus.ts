import { RouteRecordRaw } from 'vue-router'

export const mapMenusToRoutes = (menus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 1.默认加载所有菜单
  const allRoutes: RouteRecordRaw[] = []
  // webpack内置的api,通过该函数可以获取一个上下文，从而实现工程自动化（遍历文件夹的文件，从中获取指定文件，自动导入模块）
  // 参数：文件夹的目录/是否遍历子目录/匹配的规则（正则表达式）
  const routeFiles = require.context('../router/main', true, /\.ts/)
  console.log(routeFiles.keys())
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 根据用户的权限动态加载路由
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(menus)
  return routes
}
