<template>
  <div class="appointments">
    <h1 class="title">Appointments</h1>
      <router-link class="new-link" :to="{ name: 'AppointmentNew' }">
        New Appointment
      </router-link>
      <div v-for="(appointment) in appointments" :key="appointment.id" class="appointment">
        <h2><strong>{{appointment.summary}}</strong></h2>
        <p>{{formatDate(appointment.start_time)}}</p>
        <p>{{formatTime(appointment.start_time)}} - {{formatTime(appointment.end_time)}}</p>
        <router-link class="details-link" :to="{ name: 'Appointment',
          params: { id: appointment.id } }">
          Details
        </router-link>
      </div>
  </div>
</template>

<script>
import axios from '@/backend/axios';
import moment from 'moment';

export default {
  data() {
    return {
      appointments: [],
      id: [],
      summary: [],
      location: [],
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
      const dateTime = new Date(iso8601);
      return moment(dateTime).format('dddd, MMMM Do YYYY');
    },
    formatTime(iso8601) {
      const dateTime = new Date(iso8601);
      return moment(dateTime).format('h:mm a');
    },
    appointmentDetails() {

    },
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

  .details-link {
    display: inline-block;
    background-color: #58808F;
    color: #F9F8E8;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }

  .new-link {
    display: inline-block;
    background-color: #339966;
    color: #F9F8E8;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }
</style>
