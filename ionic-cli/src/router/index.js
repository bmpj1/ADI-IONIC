import { createRouter, createWebHistory } from '@ionic/vue-router';

import MarcasPage from '../pages/MarcasPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/marcas'
  },
  {
    path: '/marcas',
    component: MarcasPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
