export default {
  state: {
    /**
     *
     */
    state_demo: true
  },
  getters: {
    /**
     *
     */
    getters_demo: (state) => {
      return false
    }
  },
  mutations: {
    /**
     *
     */
    ASYNC_DEMO (state, { field, value }) {
      state[field] = value
    }
  },
  actions: {
    /**
     *
     */
    action_demo ({ commit }, data) {
      return new Promise((resolve, reject) => {
        let ok = true
        if (ok) {
          resolve()
        } else {
          reject(new Error(''))
        }
      })
    }
  }
}
