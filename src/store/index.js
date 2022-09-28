import Vue from 'vue'
import Vuex from 'vuex'

// 將products模組輸入到index.js
import productsModules from './products'
// 將alert模組輸入到index.js
import alertMessageModules from './alertMessage';
import cartModules from './cart';
import favoriteModules from './favorite';

Vue.use(Vuex);

// Loading放在最外層
export default new Vuex.Store({
strict: true, // 嚴謹模式
state: {
        isLoading: false,
        pagination: {},
        
      },

actions: {
    // isLoading
    updateLoading(context, status) {
      context.commit('LOADING', status);
        },
      },     

 mutations: {
// isLoading
  LOADING(state, status) {
    state.isLoading = status;
  },
  // pagination
  PAGINATION(state, payload) {
    state.pagination = payload;
  },
},
getters: {
  isLoading: state => state.isLoading,
  pagination: state => state.pagination,
},
 modules: {
        productsModules,
        alertMessageModules,
        cartModules,
        favoriteModules,
      },


});