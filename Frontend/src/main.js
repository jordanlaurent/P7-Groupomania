import Vue from 'vue'
import App from './vue/App.vue'
import Connexion from './vue/Connexion.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(Connexion , App),
}).$mount('#app')

