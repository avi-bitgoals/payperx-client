<template>
  <div id="app">
    <app-header/>
    <nav-header/>
    <router-view/>
    <div class="clearfix"></div>
    <app-footer/>
    <example-modal-long/>
    <example-modal-long1/>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js/dist/popper.min';
import './js/ninja-slider';
import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import ExampleModalLong from './components/exampleModalLong';
import ExampleModalLong1 from './components/exampleModalLong1';
import NavHeader from './components/NavHeader';

export default {
  name: 'App',
  components: { NavHeader, ExampleModalLong1, ExampleModalLong, AppFooter, AppHeader },
};
</script>

<style lang="scss">
  @import "bootstrap/dist/css/bootstrap.min.css";
  @import "css/style.css";
  @import "ninja-slider/distribution/ninja-slider.css";
  @import "font-awesome/css/font-awesome.min.css";
</style>
