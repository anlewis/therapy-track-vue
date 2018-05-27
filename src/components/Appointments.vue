<template>
  <div id="appointments">
    <div v-for="(appointment) in appointments" :key="appointment.id">
      <p>My Appointment: {{appointment.summary}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        appointments: [],
        summary: [],
        errors: []
      }
    },
    created() {
      axios.get('localhost:3000/api/v1/appointments') 
      .then(response => {
        this.appointments = response.data
      })
      .catch(e => {
        this.error.push(e)
      })
    },
  }
</script>

<style>
</style>