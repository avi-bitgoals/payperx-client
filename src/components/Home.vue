<template>
    <div>
        <Carousel/>
        <BelowBanner :items="belowBanner"/>
        <service-section :items="serviceSection"/>
        <section class="sale_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-4"><h2>AUTOMATED <br class="none1">TRADING
                        <br class="none1">SYSTEM</h2>
                        <p class="col-lg-11 col-md-11 col-sm-11 col-12">The Automated
                            trading system (ATS) allows traders higher levels of flexibility
                            and control; customize your trading preferences and then let the
                            ATS create orders and submit these directly to the network.</p>
                    </div>
                    <div class="col-md-4 col-lg-4"><h2>BUY & SELL <br class="none1">ORDER
                        BOOK</h2>
                        <p class="col-lg-11 col-md-11 col-sm-11 col-12">An innovative
                            matching engine built on blockchain technology allowing users to
                            see all available orders. The Order Book will be updated in real
                            time, giving the user a clear and transparent view of all market
                            activities.</p></div>
                    <div class="col-md-4 col-lg-4"><h2>FUTURE <br>ORDERS</h2>
                        <p class="col-lg-11 col-md-11 col-sm-11 col-12">Get full control of
                            your trading with orders such as <strong>Sell Limit
                                Orders</strong> (Risk Management Order), <strong>Stop Loss
                                Orders</strong>, and <strong>Buy Limit Orders</strong>.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="join_start" v-if="!isAuthenticated">
            <div class="container">
                <div class="insert_signup">
                    <h2>JOIN AND START BENEFIT<br/> FROM THE CRYPTO MARKET TODAY!</h2>
                    <a href="#" style="top: 20px; position: relative;" class="banner_btn">
                        SIGN UP <img src="../images/arro1.png"
                                     style="margin: -4px 0 0 6px;"></a>
                </div>
            </div>
        </section>
        <section class="payper">
            <div class="container">
                <h2>Payper<span>TM</span></h2>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12"><p>Payper™ is a
                        tradable financial digital asset.<br><br>
                        The Paypers are based on Bitcoin, Ether or other cryptocurrency and
                        crypto indices created by PayperEX.<br><br>
                        While prices for cryptocurrencies are skyrocketing and buying
                        traditional shares on the stock market are out of reach for most
                        people, PayperEX will allow investors to remove the cost barriers
                        associated with making these investments.<br><br>
                        Two types of paypers will issued for every underlying asset, BULL
                        Payper™ and BEAR Payper™.<br>
                        If you expect that the price of the underlying asset will go up buy
                        a BULL Payper™<br>
                        If you expect that the price of the underlying asset will go down
                        buy a BEAR Payper™</p></div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12"><img
                            src="../images/Payper-Icons.png" alt=""></div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12"><p>A limited amount
                        of paypers will be offered for sale.<br><br>
                        The use of Blockchain technology ensures that the amount wouldn’t be
                        diluted.<br>
                        Initially, the Paypers will be sold in the IPS and then on PayperEX
                        trading network.<br><br>
                        The IPS (Initial Payper Sale) – investors have the first opportunity
                        to buy the paypers before it will be traded on the network.<br>
                        PayperEX trading network – investors can buy paypers from each
                        other. Paypers value will be determined by the supply and demand.
                    </p></div>
                </div>
            </div>
        </section>
        <section class="tech">
            <div class="container">
                <div class="row">
                    <h2>TECHNOLOGY</h2>
                    <p>Unique, robust and scalable technology is at the core of PayperEX.
                        We continuously focus our efforts and expertise on refining and
                        improving all aspects of the PayperEx technology.<br><br>
                        Our technological architecture is a highly scalable combination of
                        the latest technological advances in blockchain, UX/UI, and
                        server-side approaches.</p>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div class="box_pnl">
                            <h2>BLOCKCHAIN<br>
                                TECHNOLOGY
                            </h2>
                            <p>Our network leverages blockchain technology which offers all
                                participants consistent, shared, secure processes. The nature of
                                decentralized blockchains allows for completely trusted
                                interactions between all parties.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div class="box_pnl">
                            <h2>MATCHING<br>
                                ENGINE
                            </h2>
                            <p>Our cutting-edge matching engine allows parties to buy/sell
                                Paypers in a peer-to-peer (P2P) environment, processing millions
                                of orders in less than one millisecond latency. All new
                                blockchain transactions allow everyone to see the details and
                                document updates in real time.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div class="box_pnl">
                            <h2>API SERVICES
                            </h2>
                            <p>PayperEX allows users all over the world to engage in our
                                secure, integrated blockchain technology API. This enables 3rd
                                party trading features, allowing users to experience a full and
                                unique trading experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import Carousel from './Home/Carousel';
import BelowBanner from './Home/BelowBanner';
import ServiceSection from './Home/serviceSection';

export default {
  name: 'Home',
  components: { ServiceSection, BelowBanner, Carousel },
  data() {
    return {
      belowBanner: [
        {
          title: 'SIGN UP',
          paragraph: 'Sign up and get access to the world of Crypto in all its aspects: ' +
            'Digital wallet, Exchange and Trading Network.',
        },
        {
          title: 'FUND YOUR WALLET',
          paragraph: 'Fund your digital wallet with BTC, ETH, BCH, LTC or other' +
            'cryptocurrencies.',
        },
        {
          title: 'START TRADING',
          paragraph: 'Start your journey to the crypto world. Trade on a variety of' +
          'cryptocurrencies and other digital assets.',
        },
      ],
      serviceSection: [
        {
          image: 'wallet',
          title: 'MULTICURRENCY WALLET',
          paragraph: 'Your private wallet allows you to interact directly ' +
          'with the blockchain while remaining in full control of your funds, ' +
          'PayperEX wallet supports BTC, ETH, BCH, LTC and PAX',
        },
        {
          image: 'exchange',
          title: 'EXCHANGE',
          paragraph: 'Buy and sell digital coins in one place, ' +
          'exchange any of your digital coin in a secured peer-to-peer environment.',
        },
        {
          image: 'network',
          title: 'NETWORK',
          paragraph: 'Trade Paypers of Cryptocurrencies Index, Private companies and Startups.',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  }
  ,
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
