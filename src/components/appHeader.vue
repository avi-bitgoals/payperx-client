<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-md-5 col-sm-12 col-12">
          <div class="logo">
            <router-link :to="{ name: 'Home'}"><img src="../images/logo.png" alt=""></router-link>
          </div>
        </div>
        <div class="col-xl-4 col-md-2 col-sm-5 col-12 social">
          <a href="https://www.facebook.com/payperexnet/" target="_blank"><img
            src="../images/facebook.png" alt=""></a><a
          href="https://twitter.com/PayperExnet" target="_blank"><img
          src="../images/Twitter.png" alt=""></a><a
          href="https://www.instagram.com/payperexnet/" target="_blank"><img
          src="../images/Insta.png" alt=""></a><a href="https://t.me/PayperEx"
                                               target="_blank"><img
          src="../images/Telegram.png" alt=""></a>
        </div>
        <div class="col-xl-3 col-md-5 col-sm-7 col-10 text-align-right">
          <a href="coming_soon.html" class="exchange_btn">EXCHANGE</a>
          <a href="coming_soon.html" class="network_btn">NETWORK</a>
          <div class="clearfix"></div>
          <a href="#" class="signup btn btn-primary" data-toggle="modal"
             data-target="#exampleModalLong">
            <img src="../images/SignUp_btn.png">
          </a>
          <a href="#" class="login btn btn-primary" data-toggle="modal"
             data-target="#exampleModalLong1">
            <img src="../images/LogIn_btn.png">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'appHeader',
};
</script>
<style scoped>
</style>
