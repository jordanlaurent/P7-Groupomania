import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connxexion from '../views/Connexion'
import Mur from '../views/Mur'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Connexion',
    name: 'Connexion',
    component: Connxexion
  }, {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscription.vue')
  },{
    path: '/Mur',
    name: 'Mur',
    component: Mur
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
