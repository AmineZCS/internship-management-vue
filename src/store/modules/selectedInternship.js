const selectedInternship = {
  namespaced: true, // this is important when using modules
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
export default selectedInternship;