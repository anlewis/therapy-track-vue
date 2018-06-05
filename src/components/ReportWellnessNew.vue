<template>
  <div class="wellnessNew">
    <h2>Wellness Info</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="avgSleepInputGroup"
                    label="Average Sleep"
                    label-for="avgSleep">
        <b-form-input id="avgSleepInput"
                      type="number"
                      v-model="form.avgSleep"
                      placeholder="Enter average hours of sleep per night">
        </b-form-input>
      </b-form-group>
      <b-form-group id="avgHeartRateInputGroup"
                    label="Resting Heart Rate"
                    label-for="avgHeartRate">
        <b-form-input id="avgHeartRateInput"
                      type="number"
                      v-model="form.avgHeartRate"
                      placeholder="Enter resting heart rate">
        </b-form-input>
      </b-form-group>
      <b-form-group id="weightInputGroup"
                    label="Weight"
                    label-for="weight">
        <b-form-input id="weightInput"
                      type="number"
                      v-model="form.weight"
                      placeholder="Enter weight">
        </b-form-input>
      </b-form-group>
            <b-form-group id="bmiInputGroup"
                    label="Body Mass Index"
                    label-for="bmi">
        <b-form-input id="bmiInput"
                      type="number"
                      v-model="form.bmi"
                      placeholder="Enter BMI">
        </b-form-input>
      </b-form-group>
      <b-form-group id="weightChangeInputGroup"
                    label="Weight Change"
                    label-for="weightChange">
        <b-form-input id="weightChangeInput"
                      type="number"
                      v-model="form.weightChange"
                      placeholder="Enter weight change for report period">
        </b-form-input>
      </b-form-group>
      <b-form-group id="avgDailyExerciseInputGroup"
                    label="Average Daily Exercise"
                    label-for="avgDailyExercise">
        <b-form-input id="avgDailyExerciseInput"
                      type="number"
                      v-model="form.avgDailyExercise"
                      placeholder="Enter average hours spent exercising each day">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Add Wellness Info</b-button>
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
        avgSleep: '',
        avgHeartRate: '',
        weight: '',
        bmi: '',
        weightChange: '',
        avgDailyExercise: '',
        submitted: false,
        errors: [],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
      axios.post(
        `http://localhost:3000/api/v1/reports/${this.$route.params.report_id}/wellness`, {
          avg_sleep: this.form.avgSleep,
          avg_heartrate: this.form.avgHeartRate,
          weight: this.form.weight,
          bmi: this.form.bmi,
          weight_change: this.form.weightChange,
          avg_daily_exercise: this.form.avgDailyExercise,
        })
        .then((wellness) => {
          router.push({ name: 'ReportAnxietyNew', params: { report_id: wellness.data.report_id } });
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
