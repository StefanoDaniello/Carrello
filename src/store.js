// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        if (item.quantity + product.quantity <= 10) {
          item.quantity += product.quantity;
        } else {
          item.error = 'Quantità massima superata';
        }
      } else {
        if (product.quantity <= 10) {
          state.cart.push(product);
        } else {
          product.error = 'Quantità massima superata';
        }
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  },
  getters: {
    cart: state => state.cart
  }
});
