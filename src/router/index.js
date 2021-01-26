import { createRouter, createWebHistory } from 'vue-router'
import SolarSystem from '../views/SolarSystem.vue';
import Planet from '../views/Planet.vue';

const routes = [
  {
    path: '/',
    name: 'solarSystem',
    component: SolarSystem
  },
  {
    path: '/planet/:id',
    name: 'planet',
    component: Planet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
