import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    // 通过返回函数并接受pageName参数动态获取数据
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取动态的pageUrl作为主页列表查询参数
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data
      // 4.对pageName进行首字母大写转换，commit动态的mutation更新数据
      const newPageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${newPageName}List`, list)
      commit(`change${newPageName}Count`, totalCount)
    }
  }
}

export default systemModule
