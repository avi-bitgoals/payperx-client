import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Payper from '@/components/Payper';
import PELiveIPS from '@/components/PELiveIPS';
import PELiveIPSBull from '@/components/IPS/Bull';
import PELiveIPSBear from '@/components/IPS/Bear';
import PAX from '@/components/PAX';
import PEContactUs from '@/components/PEContactUs';
import PEInfoPayperex from '@/components/PEInfoPayperex';
import PEInfoFAQ from '@/components/PEInfoFAQ';
import PEInfoGlossary from '@/components/PEInfoGlossary';
import PEMyAccount from '@/components/PEMyAccount';
import store from '../store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Payper',
      name: 'Payper',
      component: Payper,
    },
    {
      path: '/PE-LiveIPS',
      name: 'PE-LiveIPS',
      component: PELiveIPS,
    },
    {
      path: '/PE-LiveIPS-Bull',
      name: 'PE-LiveIPS-Bull',
      component: PELiveIPSBull,
    },
    {
      path: '/PE-LiveIPS-Bear',
      name: 'PE-LiveIPS-Bear',
      component: PELiveIPSBear,
    },
    {
      path: '/PAX',
      name: 'PAX',
      component: PAX,
    },
    {
      path: '/PE-ContactUs',
      name: 'PE-ContactUs',
      component: PEContactUs,
    },
    {
      path: '/PE-Info-Payperex',
      name: 'PE-Info-Payperex',
      component: PEInfoPayperex,
    },
    {
      path: '/PE-Info-FAQ',
      name: 'PE-Info-FAQ',
      component: PEInfoFAQ,
    },
    {
      path: '/PE-Info-Glossary',
      name: 'PE-Info-Glossary',
      component: PEInfoGlossary,
    },
    {
      path: '/PE-MyAccount',
      name: 'PE-MyAccount',
      component: PEMyAccount,
      beforeEnter: (to, from, next) => {
        if (!store.getters.isAuthenticated) {
          next({ path: '/' });
        } else {
          next();
        }
      },
    },
  ],
});

