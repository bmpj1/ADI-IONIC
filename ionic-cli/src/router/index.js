import { createRouter, createWebHistory } from '@ionic/vue-router';

import LoginPage from '../pages/LoginPage.vue';
import RegistryPage from '../pages/RegistryPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/registro',
    component: RegistryPage
  },
  {
    path: '/marcas',
    component: () => import('../pages/MarcasPage.vue')
  },
  {
    path: '/marcas/:id',
    component: () => import('../pages/MarcaDetailsPage.vue')
  },
  {
    path: '/marcas/add',
    component: () => import('../pages/AddMarcaPage.vue'),
    // beforeEnter(to,from,next){  // Comprobamos que es admin
    //   let loggedIn = JSON.parse(localStorage.getItem('user'));
    //   if(loggedIn && loggedIn.usuario && loggedIn.accessToken && loggedIn.usuario.rol=="admin"){
    //     next()
    //   }else{
    //     next({name: 'Home'})
    //   }
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
