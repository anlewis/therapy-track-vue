<template>
  <div class="sign-out">
  </div>
</template>

<script>
import axios from '@/backend/axios';
import router from '../router';

export default {
  data() {
    return {
      errors: [],
    };
  },
  created() {
    axios.delete(
      'http://localhost:3000/auth/sign_out')
      .then(() => {
        localStorage.clear();
        router.push({ name: 'Home' });
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<style>
</style>
