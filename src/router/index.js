import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Weather from '../pages/Weather.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/weather', name: 'Weather', component: Weather },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
