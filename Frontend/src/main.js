import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@popperjs/core'; 
global.jQuery = require('jquery');
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
require('bootstrap');
Vue.use($, Popper)
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(require ('vue-moment'));
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




