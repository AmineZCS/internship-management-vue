import { createStore } from 'vuex'
// user data store
const user = {
  state: {
    user: null
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user) 
    }
  }
}

const selectedInternship = {
  state: {
    selectedInternship: null
  },
  getters: {
    selectedInternship: state => state.selectedInternship
  },
  mutations: {
    setSelectedInternship(state, selectedInternship) {
      state.selectedInternship = selectedInternship
    }
  },
  actions: {
    setSelectedInternship({ commit }, selectedInternship) {
      commit('setSelectedInternship', selectedInternship)
    }
  }
}



export default createStore({
  modules: {
    user,
    selectedInternship
  }
})
