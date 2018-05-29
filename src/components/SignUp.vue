<template>
  <div class="sign-up">
    <h1>Welcome! Please Fill In Your Info</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    axios.get('http://localhost:3000/users/sign_up')
      .then((response) => {
        this.data = response.data;
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<style>
</style>