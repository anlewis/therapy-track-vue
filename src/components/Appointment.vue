<template>
  <div class="appointment">
    <b-card class="mb-2">
      <h2><strong>{{appointment.summary}}</strong></h2>

      <p class="card-text"><strong>{{formatDate(appointment.start_time)}}</strong></p>
      <p class="card-text">{{formatTime(appointment.start_time)}} - {{formatTime(appointment.end_time)}}</p>
      <p class="card-text">Location: {{appointment.location}}</p>
      <p class="card-text">{{appointment.description}}</p>

      <b-button :to="{ name: 'AppointmentUpdate', params: { id: appointment.id }}" variant="warning">
        Update
      </b-button>

      <b-button :to="{ name: 'AppointmentNew', params: { id: appointment.id }}" variant="danger">
        Delete
      </b-button>
    </b-card>
  </div>
</template>

<script>
import axios from '@/backend/axios';
import moment from 'moment';

export default {
  data() {
    return {
      appointment: [],
      summary: [],
      location: [],
      description: [],
      start_time: [],
      end_time: [],
      errors: [],
    };
  },
  created() {
    axios.get(`http://localhost:3000/api/v1/appointments/${this.$route.params.id}`)
      .then((response) => {
        this.appointment = response.data;
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
  },
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }

  p {
    margin: 5px;
  }

  .notes {
    background-color: #F9F8E8;
    border: medium inset #DEE5E5;
    display: inline-block;
    justify-content: center;
    width: 40%;
    margin-bottom: 10px;
  }

  .update-link {
    display: inline-block;
    background-color: #58808F;
    color: #F9F8E8;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }

  .delete-link {
    display: inline-block;
    background-color: #800000;
    color: #F9F8E8;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
  }
</style>
