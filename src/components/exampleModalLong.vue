<template>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">SIGN UP</h5>
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
              <input type="text" name="" class="text_field"
                     placeholder="confirm password">

              <div class="clearfix"></div>
              <a href="#" class="submit_btn log_none"><img
                src="../images/submit_btn.png"></a>
              <div class="re-capcha">
                <div class="g-recaptcha"
                     data-sitekey="6Lfs-CsUAAAAAOVfIFUExoUMiN2JLrgDn589Bytj"></div>
              </div>
            </form>
          </div>
          <div class="tex1"><p>By Submitting you are agreeing to our <a href="#"
                                                                        style="color:#000;">terms
            and services</a></p>
            <p>Already have an account? <a href="#">Login</a></p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'exampleModalLong',
};
</script>
<style scoped>
</style>
