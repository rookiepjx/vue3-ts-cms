import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      homeMsg: '网站主页',
      profileMsg: '个人详情'
    }
  }
})

export default store
