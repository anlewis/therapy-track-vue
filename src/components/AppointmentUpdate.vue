<template>
  <div class="appointmentUpdate">
    <h2>Appointment Details</h2>
      <b-form @submit.prevent="handleSubmit">
      <b-form-group id="nameInputGroup"
                    label="Name"
                    label-for="name">
        <b-form-input id="nameInput"
                      type="text"
                      v-model="form.summary"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="startInputGroup"
                    label="Appointment Start Time"
                    label-for="start_time">
        <b-form-input id="startInput"
                      type="datetime-local"
                      v-model="form.start_time"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="endInputGroup"
                    label="Appointment End Time"
                    label-for="end_time">
        <b-form-input id="endInput"
                      type="datetime-local"
                      v-model="form.end_time"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="locationInputGroup"
                    label="Location"
                    label-for="location">
        <b-form-input id="locationInput"
                      type="text"
                      v-model="form.location"
                      required
                      placeholder="Enter location">
        </b-form-input>
      </b-form-group>
      <b-form-group id="descriptionInputGroup"
                    label="Description"
                    label-for="description">
        <b-form-textarea id="descriptionInput"
                         v-model="form.description"
                         placeholder="Enter description"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="warning">Update Appointment</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from '@/backend/axios';
import router from '../router';

export default {
  data() {
    return {
      form: {
        appointment: [],
        summary: [],
        location: [],
        description: '',
        start_time: [],
        end_time: [],
        submitted: false,
        errors: [],
      },
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
    handleSubmit() {
      this.form.submitted = true;
      axios.patch(
        `http://localhost:3000/api/v1/appointments/${this.$route.params.id}`, {
          summary: this.form.summary,
          location: this.form.location,
          description: this.form.description,
          start_time: this.form.start_time,
          end_time: this.form.end_time,
        })
        .then(() => {
          router.push({ name: 'Appointment', params: { id: this.$route.params.id } });
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

  p {
    margin: 5px;
  }
</style>
