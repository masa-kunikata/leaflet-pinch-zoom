import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  getters: {
    count: state => (state.count)
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
