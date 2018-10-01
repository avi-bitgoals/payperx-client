import Vue from 'vue';
import Vuex from 'vuex';
import appService from './app.service';

Vue.use(Vuex);

const state = {
  isAuthenticated: false,
  user: localStorage.token && JSON.parse(atob(localStorage.token.split('.')[1])),
  paxVal: 0.0001,
  availablePaymentMethods: [
    { name: 'PAX' },
  ],
};

const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    paxVal: state => state.paxVal,
    availablePaymentMethods: state => state.availablePaymentMethods,
  },
  actions: {
    logout(context) {
      context.commit('logout');
    },
    login(context, credentials) {
      return new Promise((resolve) => {
        appService.login(credentials)
          .then((data) => {
            context.commit('login', data);

            resolve();
          })
          .catch(() => {
            if (typeof window !== 'undefined') {
              window.alert('Could not login!');
            }
          });
      });
    },
    closeModal(context, modalId) {
      // get modal
      const modal = document.getElementById(modalId);

      // change state like in hidden modal
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('style', 'display: none');

      // get modal backdrop
      const modalBackdrops = document.getElementsByClassName('modal-backdrop');

      // remove opened modal backdrop
      document.body.removeChild(modalBackdrops[0]);
    },
  },
  mutations: {
    logout(state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
      }
      state.isAuthenticated = false;
    },
    login(state, token) {
      if (typeof window !== 'undefined' && !token.message) {
        window.localStorage.setItem('token', token.access_token);
        window.localStorage.setItem('tokenExpiration', parseInt(token.expires_in, 10) + (new Date().getTime() / 1000));
        state.isAuthenticated = true;
      } else {
        alert(token.message);
        this.dispatch('logout');
      }
    },
  },
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const expiration = window.localStorage.getItem('tokenExpiration');
    const unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration, 10) - unixTimestamp > 0) {
      store.state.isAuthenticated = true;
    }
  });
}

export default store;
