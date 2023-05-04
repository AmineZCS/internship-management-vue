import { createStore } from 'vuex'
import notifications from './modules/notifications'
import user from './modules/user'
import selectedInternship from './modules/selectedInternship'






export default createStore({
  modules: {
    user,
    notifications,
    selectedInternship
  }
})
