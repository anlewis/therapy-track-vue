<template>
  <div class="home">
    <h1>Welcome to Therapy Track!</h1>
    <b-button to="sign-in" variant="success">
      Sign In
    </b-button>
    <b-button to="sign-up" variant="primary">
      Sign Up
    </b-button>
  </div>
</template>

<script>
import axios from '@/backend/axios';

export default {
  data() {
    return {
      data: [],
    };
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
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }
  .sign-in-link {
    display: block;
    width: 60px;
    background-color: #58808F;
    background-color: #339966;
    color: #F9F8E8;
    margin: auto;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }
  .sign-up-link {
    display: block;
    width: 60px;
    background-color: #58808F;
    color: #F9F8E8;
    margin: auto;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }
</style>
