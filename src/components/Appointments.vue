<template>
  <div id="appointments">
    <h1 class="title">Appointments</h1>
      <div v-for="(appointment) in appointments" :key="appointment.id" class="appointment">
        <h2><strong>{{appointment.summary}}</strong></h2>
        <p>{{formatDate(appointment.start_time)}}</p>
        <p>{{formatTime(appointment.start_time)}} - {{formatTime(appointment.end_time)}}</p>
        <p>Location: {{appointment.location}}</p>
        <p>Notes: {{appointment.description}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      appointments: [],
      summary: [],
      location: [],
      description: [],
      start_time: [],
      end_time: [],
      errors: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/api/v1/appointments')
      .then((response) => {
        this.appointments = response.data;
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
  methods: {
    formatDate(iso8601) {
      const dateTime = new Date(iso8601)
      return moment(dateTime).format("dddd, MMMM Do YYYY"); 
    },
    formatTime(iso8601) {
      const dateTime = new Date(iso8601)
      return moment(dateTime).format("h:mm a"); 
    }
  },
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }

  .appointment {
    background-color: #F9F8E8;
    border: thick double #58808F;
    margin: 5% 5%;
  }

  p {
    margin: 5px;
  }
</style>
