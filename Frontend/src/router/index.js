import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion'
import Mur from '../views/Mur'
import Profil from '../views/Profil'
import test from '../views/test'
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
    path: '/test',
    name: 'test',
    component: test,
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
