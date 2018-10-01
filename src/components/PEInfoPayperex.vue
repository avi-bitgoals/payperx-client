<template>
  <div>
    <section class="infopay_pnl">
      <div class="container  text-center">
        <h2> A PARTNER YOU CAN<span> TRUST</span></h2>
        <p>We will earn your trust and loyalty by delivering<br/> safe and easy
          trading experience with superior<br/> execution and low costs.
        </p>
      </div>
    </section>
    <section class="trade_pnl">
      <div class="container trade_box">
        <h3>TRADE <span> CONFIDENTLY</span></h3>
        <p>We provide the best experience to buy and sell cryptocurrencies,
          digital tokens and Paypers. Our cutting-edge technology allows parties
          to buy/sell Crypto assets in a secured peer-to-peer environment,
          processing millions of orders in less than one millisecond
          latency.</p>
        <h3>ABOUT <span> US</span></h3>
        <p>PayperEx’s founders consist of experts in online trading, marketing,
          financial compliance, and regulation. With decades of industry
          experience, the PayperEx team looks to disrupt the financial markets
          and make them more accessible to the world.<br/><br/>
          The inspiration behind PayperEx come from identifying the needs of
          many people who want to be part of the global share market but cannot
          for a variety of reasons: lack of knowledge, fear of risk,
          insufficient finances, geographical constraints, etc. and providing
          them with an alternative shares market that transcends these
          limitations.</p>
        <h4>OUR <span>ADVANTAGES</span></h4>
        <ul>
          <li>Strong team</li>
          <li>Multiple-Coin Support</li>
          <li>Multicurrency Wallet</li>
          <li>Automated Trading System</li>
          <li>Safety and Stability</li>
          <li>API Integration for Exchange Members</li>
        </ul>
      </div>
    </section>
    <section class="whether_pnl">
      <div class="container">
        <div class="row">
          <div class="col-lg-1 col-md-1 col-sm-1 col-1 text-center arrow_pad1">
            <img src="../images/arrow-left.png" alt=""></div>
          <div class="col-lg-10 col-md-10 col-sm-10 col-10">
            <h3> WHETHER YOU ARE NEW TO<br/> TRADING AND CRYPTOCURRENCIES,<br/>
              OR A VETERAN TO BOTH, <br/>
              PAYPEREX WAS CREATED FOR YOU!</h3></div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-1 text-center arrow_pad1">
            <img src="../images/Arrow-Right.png" alt=""></div>
        </div>
      </div>
    </section>
    <section class="join_pnl" v-if="!isAuthenticated">
      <div class="container text-center">
        <h3>JOIN PAYPEREX AND BECOME PART OF THE WORLD’S FIRST ALTERNATIVE SHARE
          MARKET.</h3>
        <a href="#" class="pax_pnl" style="font-size:20px;"
           data-toggle="modal"
           data-target="#signUpModal"> JOIN NOW <img
          src="../images/arro1.png" style="margin: -4px 0 0 6px;"></a>
        <p>For more information:
          <router-link :to="{ name: 'PE-Info-FAQ'}">FAQ</router-link>
          or
          <router-link :to="{ name: 'PE-Info-Glossary'}">GLOSSARY</router-link>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PE-Info-Payperex',
};
</script>
<style scoped>
</style>
