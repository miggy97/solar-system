import { createRouter, createWebHistory } from 'vue-router'
import SolarSystem from '../views/SolarSystem.vue';
import PlanetInfo from '../views/PlanetInfo.vue';

const routes = [
  {
    path: '/',
    name: 'solarSystem',
    component: SolarSystem
  },
  {
    path: '/planet/:id',
    name: 'planet',
    component: PlanetInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
