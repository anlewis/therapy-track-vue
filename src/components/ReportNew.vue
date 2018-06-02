<template>
  <div class="reportNew">
    <h2>New Report</h2>
    <b-form inline @submit.prevent="handleSubmit">
      <b-input-group class="mb-2 ml-sm-2 mr-sm-2 mb-sm-0">
        <b-input id="endInput" type="date" v-model="form.start_date"/>
      </b-input-group>
      <h4>-</h4>
      <b-input-group class="mb-2 ml-sm-2 mr-sm-2 mb-sm-0">
        <b-input id="endInput" type="date" v-model="form.end_date"/>
      </b-input-group>
      <b-button type="submit" variant="primary">Start Report</b-button>
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
        start_date: [],
        end_date: [],
        submitted: false,
        errors: [],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
      axios.post(
        'http://localhost:3000/api/v1/reports', {
          start_date: this.form.start_date,
          end_date: this.form.end_date,
        })
        .then((report) => {
          router.push({ name: 'ReportBasicNew', params: { report_id: report.data.id } });
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

  .form-inline {
    width: 100%;
    justify-content: center;
  }
</style>
