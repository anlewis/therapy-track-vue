<template>
  <div class="home">
    <h1>Welcome to Therapy Track!</h1>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    axios.get('http://localhost:3000/')
      .then((response) => {
        this.data = response.data;
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
  methods: {
  },
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }
</style>