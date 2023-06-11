import { RouteRecordRaw } from 'vue-router'

import { IBreadcrumb } from '@/base-ui/breadcrumb'

// 当path为/main时，pathMapToMenu匹配到的menu为undefined.
// 所以默认取第一个菜单
let firstMenu: any = null

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(menus)
  return routes
}

// path映射面包屑
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 通过path映射menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
