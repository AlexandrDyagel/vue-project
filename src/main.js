import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/HomeView.vue') },
  { path: '/add', name: 'add', component: () => import('@/pages/AddChannelView.vue') },
  { path: '/history', name: 'history', component: () => import('@/pages/HistoryView.vue') },
  { path: '/profile', name: 'profile', component: () => import('@/pages/ProfileView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')

