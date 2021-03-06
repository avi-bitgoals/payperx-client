// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { mapGetters } from 'vuex';
import store from './store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    ...mapGetters(['isAuthenticated', 'user', 'paxVal', 'availablePaymentMethods']),
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

