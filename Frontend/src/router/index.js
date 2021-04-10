import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion'
import Mur from '../views/Mur'
import Profil from '../views/Profil'
import Membre from '../views/Membre'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion,
  },{
    path: '/Profil',
    name: 'Profil',
    component: Profil,
  }, {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscription.vue')
  },{
    path: '/Mur',
    name: 'Mur',
    component: Mur,
  },
  {
    path: '*', 
    redirect: '/'
  }, {
    path: '/Membre',
    name: 'Membre',
    component: Membre,
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
