<template>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog"
         aria-labelledby="loginModalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalTitle">LOGIN</h5>
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="login_form">
                        <form id="login" @submit.prevent="onSubmit">
                            <input v-model="email" type="text" name="" class="text_field"
                                   placeholder="email address">
                            <input v-model="password" type="password" name="" class="text_field"
                                   placeholder="password">
                            <re-captcha/>
                            <div class="forgot_pass">
                                <a href="#">Forgot your password?</a>
                            </div>
                            <div class="clearfix"></div>
                            <input type="submit" value="Login" class="submit_btn"/>
                            <!--<a href="PE-MyAccount.html" class="submit_btn"><img-->
                            <!--src="../images/login_bt.png"></a>-->
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
import { mapGetters, mapActions } from 'vuex';
import ReCaptcha from './ReCaptcha';

export default {
  name: 'Login',
  components: { ReCaptcha },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['closeModal']),
    onSubmit(e) {
      const form = e.target;
      const dev = process.env.NODE_ENV === 'development';
      const gCaptcha = Array.from(form.elements)
        .find(el => el.type === 'textarea' && el.id === 'g-recaptcha-response');
      if (!dev && gCaptcha && !gCaptcha.value) {
        window.alert('You\'re a robot!!!');
        return;
      }

      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(() => {
          this.email = '';
          this.password = '';
          this.closeModal('loginModal');
        });
    },
  },
};
</script>
<style scoped>
</style>
