<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-6 col-12 mg_20">
                    <h3>PAPEREX</h3>
                    <ul>
                        <li>
                            <router-link exact class="nav-link" :to="{ name: 'Home'}">
                                HOME
                            </router-link>
                        </li>
                        <li v-if="isAuthenticated"><a href="coming_soon.html">EXCHANGE </a></li>
                        <li v-if="isAuthenticated"><a href="coming_soon.html">NETWORK</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-2 col-sm-6 col-12 mg_20">
                    <h3>INFO</h3>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'PE-Info-Payperex'}">PAYPEREX</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Payper'}">PAYPER</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'PAX'}">PAX</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'PE-Info-FAQ'}">FAQ</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'PE-Info-Glossary'}">GLOSSARY</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mg_20">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li>
                            <a href="mailto:support@payperex.com?subject=Support Request">
                                SUPPORT@PAYPEREX.COM
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mg_20">
                    <h3>FOLLOW US</h3>
                    <div class="row">
                        <li><a href="https://www.facebook.com/payperexnet/" target="_blank"><img
                                src="../images/facebook1.png" alt=""></a> <a
                                href="https://twitter.com/PayperExnet" target="_blank"><img
                                src="../images/twitter1.png" alt=""></a> <a
                                href="https://www.instagram.com/payperexnet/" target="_blank"><img
                                src="../images/instagram.png" alt=""></a> <a
                                href="https://t.me/PayperEx" target="_blank"><img
                                src="../images/telegram1.png" alt=""></a></li>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                Copyright © 2017 PayperEX Limited. All Rights Reserved
            </div>
        </div>
    </footer>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'appFooter',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
<style scoped>
</style>
