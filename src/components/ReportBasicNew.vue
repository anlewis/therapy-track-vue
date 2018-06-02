<template>
  <div class="basicNew">
    <h2>Basic Info</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="oxygenInputGroup"
                    label="Oxygen"
                    label-for="oxygen">
        <b-form-input id="oxygenInput"
                      type="number"
                      v-model="form.oxygen"
                      placeholder="Enter oxygen saturation">
        </b-form-input>
      </b-form-group>
      <b-form-group id="temperatureoxygenInputGroup"
                    label="Temperature"
                    label-for="temperature">
        <b-form-input id="temperatureInput"
                      type="number"
                      v-model="form.temperature"
                      placeholder="Enter temperature">
        </b-form-input>
      </b-form-group>
      <b-form-group id="systolicInputGroup"
                    label="Systolic Blood Pressure"
                    label-for="systolic">
        <b-form-input id="systolicInput"
                      type="number"
                      v-model="form.systolic"
                      placeholder="Enter systolic blood pressure">
        </b-form-input>
      </b-form-group>
      <b-form-group id="diastolicoxygenInputGroup"
                    label="Diastolic Blood Pressure"
                    label-for="diastolic">
        <b-form-input id="diastolicInput"
                      type="number"
                      v-model="form.diastolic"
                      placeholder="Enter diastolic blood pressure">
        </b-form-input>
      </b-form-group>
      <b-form-group id="notesInputGroup"
                    label="Notes"
                    label-for="notes">
        <b-form-textarea id="notesInput"
                         v-model="form.notes"
                         placeholder="Enter additional notes here"
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="success">Add Basic Info</b-button>
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
        oxygen: '',
        temperature: '',
        systolic: '',
        diastolic: '',
        notes: '',
        submitted: false,
        errors: [],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
      axios.post(
        `http://localhost:3000/api/v1/reports/${this.$route.params.report_id}/basic`, {
          oxygen: this.form.oxygen,
          temperature: this.form.temperature,
          systolic: this.form.systolic,
          diastolic: this.form.diastolic,
          notes: this.form.notes,
        })
        .then((basic) => {
          router.push({ name: 'ReportWellnessNew', params: { report_id: basic.data.report_id } });
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
