<template>
</template>

<script>
import axios from '@/backend/axios';
import router from '../router';

export default {
  data() {
    return {
      result: []
    }
  },
  created() {
    axios.delete(`http://localhost:3000/api/v1/appointments/${this.$route.params.id}`)
      .then((response) => {
        router.push({ name: "Appointments" })
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<style>
</style>
