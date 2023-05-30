import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
// define vuetify colors for buttons and everything
const vuetifyTheme = {
  primary: '#1d9bf0',
  secondary: '#f7f7f7',
  accent: '#8ecdf7',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}

// Import the MDI icon set CSS file
import '@mdi/font/css/materialdesignicons.css'


createApp(App)
  .use(router)
  .use(store)
  .use(vuetify, {
    theme: {
      themes: {
        light: vuetifyTheme,
        dark: vuetifyTheme
      }
    },
    icons: {
      // Use the MDI icon set
      iconfont: 'mdi'
    }
  })
  .mount('#app')
