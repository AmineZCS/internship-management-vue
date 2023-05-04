import api from '../../api'
const user = {
  namespaced: true, // this is important when using modules
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
      },
      async logout({ commit }) {
          try {
              const response = await api.post('/logout')
              console.log(response.data)
              localStorage.removeItem('token')
              commit('setUser', null)
          } catch (error) {
              console.log(error.response.data)
          }
          // remove the token from local storage
          
      }
  }
}
export default user;