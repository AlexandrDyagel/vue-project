import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import AddChannelView from '@/pages/AddChannelView.vue'
import HistoryView from '@/pages/HistoryView.vue'
import UserView from '@/pages/UserView.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: AddChannelView },
  { path: '/history', component: HistoryView },
  { path: '/user', component: UserView },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)

app.mount('#app')

