<template>
  <div>
    <section class="pix_banner">
      <div class="container  text-center">
        <img src="../images/CoinPex.png" alt="">
        <h2> THE WORLD’S <span>FIRST TOKEN</span> <br/> BASED ON BITCOIN</h2>
        <template v-if="!isAuthenticated">
        <a href="#" data-toggle="modal"
           data-target="#signUpModal" style="top: 30px; position: relative; font-size:20px;"
           class="pax_pnl"> JOIN NOW <img src="../images/arro1.png"
                                          style="margin: -4px 0 0 6px;"></a>
        </template>
      </div>
    </section>
    <section class="pax_token">
      <div class="container token_pnl">
        <p><strong>PAX </strong> Token was issued by<strong> PayperEX</strong>
          and is the only token used on <strong>PayperEX network</strong>.<br/>
          Each activity in the <strong>PayperEX network </strong>is performed
          using <strong>PAX</strong>, making the token an integral part of the
          network and the driver of its economy.<br/>
          The use of a blockchain technology confirms that each <strong>
            PAX </strong> was transferred only once.<br/>
          The circulating supply of <strong>PAX</strong> varies according to the
          total market cap of the <strong>Payper</strong>™ trading at<strong>
            PayperEX network</strong>.<br/><br/>
          <span><strong>PAX token usages:</strong></span><br/>
        </p>
        <ul>
          <li>Participate in Payper™ IPS</li>
          <li>Trading Payper™ at PayperEX network</li>
          <li>Fee Sharing distribution</li>
        </ul>
      </div>
    </section>
    <section class="pax_main">
      <div class="container text-center"><h3>PAX TOKEN MAIN ADVANTAGES</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <img src="../images/bitcoin.png" alt="" class="bit_img">
            <!-- <div class="bit_panl"><h2>BITCOIN’S<br/> LITTLE<br/>
           BROTHER</h2>
           <p>PAX token is based on Bitcoin  and equals to 0.0001 BTC</p>
           </div>   -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <img src="../images/keepit.png" alt="" class="bit_img">
            <!--  <div class="bit_panl"><h2>KEEP IT
          <br/> SIMPLE</h2>
          <p>Open account and buy PAX token with in few minutes

          BTC
          </p>
          </div>  -->
          </div>
          <div class="col-sm-3 col-12 none"></div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <img src="../images/safe_us.png" alt="" class="bit_img">
            <!-- <div class="bit_panl"><h2>SAFE WITH <br/>US</h2>
          <p>Your funds are 100% secured in your PayperEx private wallet</p>
          </div>  -->
          </div>
        </div>
        <p class="tx1">From now on you will be able the BUY & SELL PAX<br/>
          only in the exchange </p>
      </div>
    </section>
    <section class="work_pnl">
      <div class="container hows_work">
        <h2>HOW ITS WORKS?</h2>
        <ul>
          <li>1. Go to the <span class="orang"> EXCHANGE</span></li>
          <li>2. Click on <span class="orang">BUY</span> or <span class="orang">SELL</span>
          </li>
          <li>3. Enter the <span class="orang">QTY</span> you want to buy/sell
          </li>
          <li>4. Click on “<span class="orang">SUBMIT ORDER</span>”</li>
        </ul>
        <p>Your order will be approved and completed automatically when the
          system will find a match to your order. In case of no match you order
          will be shown in the open orders table.<br/><br/>
          <span class="orang">Important note:</span> You must fund your wallet
          using BTC, ETH, BCH, or LTC before you will be able to buy PAX
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PAX',
};
</script>
<style scoped>
</style>
