import { createStore } from 'vuex'
import api from '../api'  
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

const notifications = {
  state: {
    notifications: [{message:'Application Declined',read:false},{message:'Application Declined',read:false},{message:'Application Declined',read:false},{message:'Application Declined',read:false},{message:'Application Declined',read:false}]
  },
  getters: {
    notifications: state => state.notifications,
    countUnreadNotifications: state => state.notifications.filter(notification => !notification.read).length
  },
  mutations: {
    setNotifications(state, notifications) {
      state.notifications = notifications
    },
    readNotifications(state) {
      state.notifications = state.notifications.map(notification => {
        notification.read = true
        return notification
      })
    }
  },
  actions: {
    async getNotifications({ commit }) {
      const response = await api.get('/notifications')
      console.log(response.data)
      commit('setNotifications', response.data)
    },
    async readNotifications({ commit }) {
      await api.post('/notifications/markAllAsRead')
      commit('readNotifications')
    }
  }
}




export default createStore({
  modules: {
    user,
    notifications,
    selectedInternship
  }
})
