import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    logs: [],
  }),
  getters: {
    logs: state => (state.logs)
  },
  mutations: {
    addLog(state, log){
      const added = [log, ...state.logs]
      state.logs = added.slice(0, 30)
    }
  }
})
