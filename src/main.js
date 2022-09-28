// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import jquery from 'jquery'

import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'   //(繁體中文語系)
import * as rules from 'vee-validate/dist/rules';     //(新版-所有驗證規則化)



import App from './App'
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import store from './store';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.prototype.$=jquery;



Object.keys(rules).forEach((rule) => {     
  extend(rule, rules[rule]);
});
 
localize('zh_TW', TW);

 
Vue.component('ValidationObserver', ValidationObserver); 
Vue.component('ValidationProvider', ValidationProvider); 
 
configure({        
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

axios.defaults.withCredentials = true;


/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  // ...
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});

