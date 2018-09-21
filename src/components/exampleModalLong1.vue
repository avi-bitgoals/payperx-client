<template>
  <div class="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">LOGIN</h5>
          <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="login_form">
            <form>
              <input type="text" name="" class="text_field"
                     placeholder="email address">
              <input type="text" name="" class="text_field"
                     placeholder="password">
              <div class="re-capcha">
                <div class="g-recaptcha"
                     data-sitekey="6Lfs-CsUAAAAAOVfIFUExoUMiN2JLrgDn589Bytj"></div>
              </div>
              <div class="forgot_pass">
                <a href="#">Forgot your password?</a>
              </div>

              <div class="clearfix"></div>
              <a href="PE-MyAccount.html" class="submit_btn log_none"><img
                src="../images/login_bt.png"></a>
              <div class="clearfix"></div>
              <div class="space"></div>
            </form>
          </div>
          <div class="tex1"><p>Don’t have an account? <a href="#">Sign Up</a>
          </p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'exampleModalLong1',
};
</script>
<style scoped>
</style>
