<template>
    <section class="live_bear">
        <div class="container text-center">
            <a href="#" class="bear_bt2">CryptEx 5 BEAR Payper™ IPO </a>
            <br><br>
            <div class="clearfix"></div>
            <div class="icon_img"><img src="../../images/5-Icons.png"></div>

            <!--
            <div class="progress_bar"><img src="../../images/Prog-bar.png" alt="">
            <p>Number of paypers left for sale </p>

            <h3>Do you expect that the<br> Cryptocurrency market will <span>go down</span>  ? </h3>
            </div>
            <div class="dic_pnl"><img src="../../images/order-50.png"></div>
            -->

            <form class="order_form" @submit.prevent="onSubmit">
                <p>Available Balance: PAX</p>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <label>Paypers QTY</label>
                        <div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"
                      data-type="minus" data-field="quant[2]" @click="decQty">
               <img src="../../images/min.png" alt="">
              </button>
              </span>
                            <input type="text" name="quant[2]"
                                   class="form-control input-number text_fld"
                                   v-model="qty" :min="min" :max="max">
                            <span class="input-group-btn">
                  <button type="button" class="btn btn-success btn-number"
                          data-type="plus" data-field="quant[2]" @click="incQty">
                      <img src="../../images/plus.png" alt="">
                  </button>
              </span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <label>PAX VALUE </label>
                        <input type="text" name="paxVal"
                               v-model="paxVal" class="text_fld1" placeholder="1000">
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <label>Payment Method</label>
                        <select class="select">
                            <option v-for="availablePaymentMethod in availablePaymentMethods"
                                    v-bind:key="availablePaymentMethod">
                                {{ availablePaymentMethod.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <label>EST VALUE</label>
                        <input type="text" name="estVal" v-model="estVal"
                               class="text_fld1" placeholder="1000">
                    </div>
                    <a href="#" class="order_bt1">ORDER NOW</a>
                </div>
            </form>
            <div class="order_text">
                <h3>CryptEx 5 is an index that represent the top 5 Cryptocurrencies
                    <br> Bitcoin, Ether, Litecoin, Bitcoin cash and Ripple </h3>
                <ul>
                    <li>The total quantity of CryptEx 5 BEAR Payper™ is 10,000,000 -
                        No more paypers will be issued.
                    </li>
                    <li>CryptEx 5 BEAR Payper™ IPS price is 10 PAX</li>
                    <li>Minimum order - 10 Paypers</li>
                    <li>The Payper™ purchase details will be sent to you by mail after you will
                        complete the process. Your paypers will be shown in MY HODL table
                    </li>
                    <li>You can order Payper™ only with PAX. Don't have PAX, don't worry you
                        can use BTC, ETH, BCH, LTC, credit card or wire transfer to buy PAX.
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import IPS from './IPS';

export default {
  name: 'PE-LiveIPS-Bear',
  mixins: [IPS],
  data() {
    return {
      ipsPrice: 10,
    };
  },
  modules: {
    onSubmit() {
      return null;
    },
  },
  computed: {
    estVal() {
      return (this.qty * this.paxVal * this.ipsPrice).toFixed(4);
    },
  },
};
</script>

<style scoped>

</style>
