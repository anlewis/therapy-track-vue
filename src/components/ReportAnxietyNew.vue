<template>
  <div class="anxietyNew">
    <h2>Generalized Anxiety Disorder 7-item (GAD-7)</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="1. Feeling nervous, anxious, or on edge" class="question">
        <b-form-radio-group stacked v-model="form.q1">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
            <b-form-group label="2. Not being able to stop or control worrying" class="question">
        <b-form-radio-group stacked v-model="form.q2">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="3. Worrying too much about different things" class="question">
        <b-form-radio-group stacked v-model="form.q3">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="4. Trouble relaxing" class="question">
        <b-form-radio-group stacked v-model="form.q4">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="5. Being so restless that it's hard to sit still" class="question">
        <b-form-radio-group stacked v-model="form.q5">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="6. Becoming easily annoyed or irritable" class="question">
        <b-form-radio-group stacked v-model="form.q6">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="7. Feeling afraid as if something awful might happen" class="question">
        <b-form-radio-group stacked v-model="form.q7">
          <b-form-radio value="0">Not at all</b-form-radio>
          <b-form-radio value="1">Several days</b-form-radio>
          <b-form-radio value="2">Over half the days</b-form-radio>
          <b-form-radio value="3">Nearly every day </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group class="question"
        label="If you checked off any problems, how difficult have these made it for you to do your work, take
              care of things at home, or get along with other people?">
        <b-form-radio-group stacked v-model="form.difficulty_level">
          <b-form-radio value="0">Not difficult at all</b-form-radio>
          <b-form-radio value="1">Somewhat difficult</b-form-radio>
          <b-form-radio value="2">Very difficult</b-form-radio>
          <b-form-radio value="3">Extremely difficult</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-button type="submit" variant="success">Save Answers</b-button>
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
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        difficulty_level: '',
        submitted: false,
        errors: [],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
      console.log(this.form.q1)
      axios.post(
        `http://localhost:3000/api/v1/reports/${this.$route.params.report_id}/anxiety`, {
          q1: this.form.q1,
          q2: this.form.q2,
          q3: this.form.q3,
          q4: this.form.q4,
          q5: this.form.q5,
          q6: this.form.q6,
          q7: this.form.q7,
          difficulty_level: this.form.difficulty_level,
        })
        .then((anxiety) => {
          router.push({ name: 'ReportDepressionNew', params: { report_id: anxiety.data.report_id } });
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
};
</script>

<style>

.question {
  text-align: left;
  margin: 2% 5%;
}

</style>
