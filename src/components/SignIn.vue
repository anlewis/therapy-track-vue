<template>
  <div class="sign-up">
    <h1>Please Sign In</h1>

    <form class="vue-form" @submit.prevent="signin">
      <fieldset class="signInFields">
        <div>
          <label class="label" for="email">Email</label>
          <input class="field" type="email" name="email"
          id="email" required="" v-model="form.email">
        </div>
        <div>
          <label class="label" for="password">Password</label>
          <input class="field" type="password" name="password"
          id="password" required="" v-model="form.password">
        </div>

        <div>
          <input class="submitButton" type="submit" value="Sign In">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import router from '../router';

export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: '',
        submitted: false,
        errors: [],
      },
    };
  },
  created() {
    this.checkCurrentSignin();
  },
  updated() {
    this.checkCurrentSignin();
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' }),
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
      axios.post(
        'http://localhost:3000/auth/sign_in', {
          email: this.form.email,
          password: this.form.password,
        })
        .then(() => {
          router.push({ name: 'Home' });
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
    signin() {
      // $http makes available in all components
      this.$http.post('/auth', { user: this.email, password: this.password })
        .then((request => this.signinSuccessful(request)))
        .catch(() => this.signinFailed());
    },
    signinSuccessful(req) {
      if (!req.data.token) {
        this.signinFailed();
        return;
      }
      this.error = false;
      localStorage.token = req.data.token;
      this.$store.dispatch('signin');
      this.$router.replace(this.$route.query.redirect || '/appointments');
    },
    signinFailed() {
      this.error = 'Signin failed!';
      this.$store.dispatch('signout');
      delete localStorage.token;
    },
    checkCurrentSignin() {
      if (this.currentUser) {
        this.$router.replace(this.$route.query.redirect || '/appointments');
      }
    },
  },
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }
  .signInFields {
    background-color: #F9F8E8;
    border: thick double #58808F;
    margin: 5% 5%;
  }
  .vue-form fieldset {
    width: 60%;
    margin: 24px 0 0 0;
  }
  .vue-form {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .vue-form div {
    position: relative;
    margin: 20px 0;
  }
  .vue-form .label {
    text-align: left;
    display: block;
    margin: 0 15%;
  }
  .vue-form .field {
    width: 40%;
    text-align: left;
    display: block;
    margin: 0 15%;
  }
  .vue-form .submitButton {
    text-align: left;
    display: block;
    margin: 0 15%;
  }
  p {
    margin: 5px;
  }
</style>
