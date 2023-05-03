import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../views/HomeView.vue'
import LoginComp from '../components/LoginComp.vue'
import StDashboard from '../components/student/StDashboard.vue'
import StSettings from '../components/student/StSettings.vue'

const routes = [
  {
    path:'/',
    name:'HomeVue',
    component:HomeVue
    ,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginComp
      },
      {
        path: 'contact-us',
        name: 'contact-us',
      }
    
    ],
      },
      {
    path:'/Student',
    name:'StDashboard',
    component:StDashboard,
    children: [
      {
        path: 'Settings',
        name: 'StSettings',
        component: StSettings
        
      }
    ]
      }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
