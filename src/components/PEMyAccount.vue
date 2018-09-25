<template>
    <section class="account_pnl">
        <div class="container">
            <div class="tabe_pnl">
                <div class="row">
                    <div class="col-lg-3 col-md3 col-sm-3 col-12">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <a class="nav-link active show" id="v-pills-home-tab" data-toggle="pill"
                               href="#v-pills-home" role="tab"
                               aria-controls="v-pills-home" aria-selected="false">PERSONAL
                                INFO</a>
                            <a class="nav-link " id="v-pills-profile-tab" data-toggle="pill"
                               href="#v-pills-profile" role="tab"
                               aria-controls="v-pills-profile" aria-selected="true">MY WALLET</a>
                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                               href="#v-pills-messages" role="tab"
                               aria-controls="v-pills-messages" aria-selected="false">MY HODL</a>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md9 col-sm-9 col-12">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade active show" id="v-pills-home" role="tabpanel"
                                 aria-labelledby="v-pills-home-tab">
                                <div class="tb_head"><h3>PERSONAL INFO</h3></div>
                                <div class="user_info">
                                    <label>User: <span>{{ user && user.email }}</span></label>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                                            <input type="text" class="text_fd" name="firstName"
                                                   :placeholder="placeholders.firstName"
                                                   v-model="firstName">
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                                            <input type="text" class="text_fd" name="lastName"
                                                   :placeholder="placeholders.lastName"
                                                   v-model="lastName">
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                                            <input type="text" class="text_fd" name="phone"
                                                   :placeholder="placeholders.phone"
                                                   v-model="phone">
                                        </div>
                                        <div class="col-lg-12 col-md-12
                                         col-sm-12 col-12">
                                            <input type="text"
                                                   class="text_fd" name="address"
                                                   v-model="address"
                                                   :placeholder="placeholders.address">
                                        </div>
                                        <button type="submit" class="save_change btn btn-default">
                                            Save Changes
                                        </button>
                                        <div class="tb_head"><h3>CHANGE PASSWORD</h3></div>
                                        <div class="pass_pnl">
                                            <div class="row">
                                                <div class="form">
                                                    <input type="text" name="" class="textfild1"
                                                           placeholder="Current Password">
                                                    <input type="text" name="" class="textfild1"
                                                           placeholder="New Password">
                                                    <input type="text" name="" class="textfild1"
                                                           placeholder="Re-type Password">
                                                    <ReCatpcha/>
                                                    <button type="submit"
                                                            class="chane-password btn btn-default">
                                                        Change Password
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade " id="v-pills-profile" role="tabpanel"
                                 aria-labelledby="v-pills-profile-tab">
                                <div class="tb_head"><h3>MY WALLET</h3></div>
                                <div class="bls_pnl">
                                    <h4>Balance:</h4>
                                    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                                        <tr>
                                            <th class="th_head">Trans....</th>
                                            <th class="th_head">Quantity</th>
                                            <th class="th_head">Blockchain Address</th>
                                            <th class="th_head">Date</th>
                                            <th class="th_head">Status</th>
                                            <th class="th_head">Type</th>
                                            <th class="th_head">BTC cost</th>
                                        </tr>
                                        <tr>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                        </tr>
                                        <tr>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                            <td class="td_tb2"></td>
                                        </tr>
                                        <tr>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                            <td class="td_tb1"></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                 aria-labelledby="v-pills-messages-tab">
                                <div class="tb_head"><h3>MY HODL</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ReCatpcha from './ReCaptcha';

export default {
  name: 'PE-MyAccount',
  components: { ReCatpcha },
  data() {
    return {
      firstName: null,
      lastName: null,
      phone: null,
      address: null,
      placeholders: {
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone Number',
        address: 'Street Address, City, State/Province, Postal/Zip Code, Country',
      },
    };
  },
  mounted() {
    this.firstName = this.user && this.user.first_name;
    this.lastName = this.user && this.user.last_name;
    this.phone = this.user && this.user.phone;
  },
};
</script>
<style scoped lang="scss">
    .save_change, .chane-password {
        float: none;
    }

    .chane-password {
        display: block;
        margin: 0 auto;
    }
</style>
