import { createRouter, createWebHistory } from '@ionic/vue-router';

import LoginPage from '../pages/LoginPage.vue';
import RegistryPage from '../pages/RegistryPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/articulos',
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Login'})
      }
    }
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next({name: 'Home'})
      }else{
        next()
      }
    }
    
  },
  {
    path: '/registro',
    name: 'Registry',
    component: RegistryPage,
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next({name: 'Home'})
      }else{
        next()
      }
    }
    
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: () => import('../pages/marcas/MarcasPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/marcas/:id',
    name: 'MarcaDetail',
    component: () => import('../pages/marcas/MarcaDetailsPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/marcas/add',
    component: () => import('../pages/marcas/AddMarcaPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que es admin
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        if(loggedIn.usuario.rol=="admin")
          next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import('../pages/categorias/CategoriasPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/categorias/add',
    component: () => import('../pages/categorias/AddCategoriaPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que es admin
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        if(loggedIn.usuario.rol=="admin")
          next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/articulos',
    component: () => import('@/pages/articulos/ArticulosPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/articulos/:id',
    component: () => import('@/pages/articulos/ArticuloDetailsPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  },
  {
    path: '/articulos/add',
    component: () => import('@/pages/articulos/AddArticuloPage.vue'),
    beforeEnter(to,from,next){  // Comprobamos que esta logueado
      let loggedIn = JSON.parse(localStorage.getItem('user'));
      if(loggedIn && loggedIn.usuario && loggedIn.accessToken){
        next()
      }else{
        next({name: 'Home'})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
