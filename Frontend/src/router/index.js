import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connexion',
    component: () => import('../App.vue')
  },
    {
        path: '/Mur',
        name: 'Mur',
        component: () => import('../views/Mur.vue')
      },{
        path: '/Inscription',
        name: 'Inscription',
        component: () => import('../views/Inscription.vue')
      }
    ]
    const router = new VueRouter({
        routes
      })
      
      export default router