import api from '../../api'
const notifications = {
  namespaced: true, // this is important when using modules
    state: {
    
    notifications: [{message:'Welcome !!',read:false}]
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
      try {
   const response = await api.get('/notifications')
   console.log(response.data)
    //  check if the response data is an empty array
          if (response.data.length > 0) {
            commit('setNotifications', response.data)
          }
      } catch (error) {
        console.log(error.response.data)
 }
    },
      async readNotifications({ commit }) {
        commit('readNotifications')
      await api.post('/notifications/markAllAsRead')
      
    }
  }
}
export default notifications;