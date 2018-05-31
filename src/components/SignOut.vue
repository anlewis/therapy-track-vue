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
        console.log('DELETING THE THINGS');
        localStorage.clear();
        router.push({ name: 'Home' });
      })
      .catch((e) => {
        console.log('SIGNOUT BROKEN');
        this.error.push(e);
      });
  },
};
</script>

<style>
</style>
