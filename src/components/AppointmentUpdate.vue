<template>
  <div class="appointmentUpdate">
    <h2>Appointment Update Form</h2>
    <form class="vue-form" @submit.prevent="handleSubmit">
      <fieldset class="updateFields">
        <div>
          <label class="label" for="name">Name</label>
          <input class="field" type="text" name="name" id="name" required="" v-model="form.summary">
        </div>
        <div>
          <label class="label" for="start_time">Start Time</label>
          <input class="field" type="datetime-local" name="start_time" id="start_time" required="" v-model="form.start_time">
        </div>
        <div>
          <label class="label" for="end_time">End Time</label>
          <input class="field" type="datetime-local" name="end_time" id="end_time" required="" v-model="form.end_time">
        </div>
        <div>
          <label class="label" for="location">Location</label>
          <input class="field" type="text" name="location" id="location" required="" v-model="form.location">
        </div>
        <div>
          <label class="label" for="description">Description</label>
          <textarea class="field" name="description" id="description" required="" v-model="form.description"></textarea>
        </div>

        <div>
          <input class="submitButton" type="submit" value="Update Appointment">
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from '@/backend/axios';
import moment from 'moment';
import router from '../router';

export default {
  data() { 
    return {
      form: {
        appointment: [],
        summary: [],
        location: [],
        description: [],
        start_time: [],
        end_time: [],
        submitted: false,
        errors: [],
      }
    }
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
    handleSubmit() {
      this.form.submitted = true;
      axios.patch(
        `http://localhost:3000/api/v1/appointments/${this.$route.params.id}`, {
          'summary': this.form.summary,
          'location': this.form.location,
          'description': this.form.description,
          'start_time': this.form.start_time,
          'end_time': this.form.end_time,  
        })
        .then((response) => {
          router.push({ name: "Appointment", params: { id: this.$route.params.id } })
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
};
</script>

<style>
  body {
    background-color: #DEE5E5;
  }

  .updateFields {
    background-color: #F9F8E8;
    border: thick double #58808F;
    margin: 5% 5%;
  }

  .vue-form fieldset {
    width: 60%;
    margin: 24px 0 0 0;
  }

  .vue-form {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .vue-form div {
    position: relative;
    margin: 20px 0;
  }

  .vue-form .label {
    text-align: left;
    display: block;
    margin: 0 15%;
  }

  .vue-form .field {
    width: 40%;
    text-align: left;
    display: block;
    margin: 0 15%;
  }

  .vue-form .submitButton {
    text-align: left;
    display: block;
    margin: 0 15%;
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
</style>
