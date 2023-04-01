import { createStore } from 'vuex'

import login from './login'
import IRootState from './types'

const store = createStore<IRootState>({
  state() {
    return {
      age: 20,
      name: 'pjx'
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
