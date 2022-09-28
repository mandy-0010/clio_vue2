


import Vue from 'vue';
import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    products: [],
      
    product: {},//回傳的單一產品內容
    productid:'' ,//回傳的單一產品的id
  },

actions: {
  getProducts(context, { isPagination, page }) {
    let api;
    if (isPagination) {
      api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;//當前第幾頁
    } else {
      api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;//全部
    }
    context.commit('LOADING', true, { root: true });
    axios.get(api).then((response) => {
      if (response.data.success) {
        context.commit('PRODUCTS', response.data.products);
        if (isPagination) {
          context.commit('PAGINATION', response.data.pagination, { root: true });
        }
      } else {
        context.dispatch('alertMessageModules/updateMessage', { message: response.data.message, status: 'danger' }, { root: true });
      }
      context.commit('LOADING', false, { root: true });
    });
  },

  


},

  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },

  },

  getters: {
    products: state => state.products,
  },

});//end