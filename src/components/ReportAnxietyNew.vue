<template>
  <div class="anxietyNew">
    <h2>Generalized Anxiety Disorder 7-item (GAD-7)</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-table striped hover :items="items">
        <template slot="not_at_all" slot-scope="row">
          <b-form-radio>
          </b-form-radio>
        </template>
        <template slot="several_days" slot-scope="row">
          <b-form-radio>
          </b-form-radio>
        </template>
        <template slot="over_half_the_days" slot-scope="row">
          <b-form-radio>
          </b-form-radio>
        </template>
        <template slot="nearly_every_day" slot-scope="row">
          <b-form-radio>
          </b-form-radio>
        </template>
      </b-table>
      <b-form-group 
      label="If you checked off any problems, how difficult have these made it for you to do your work, take
  care of things at home, or get along with other people?">
        <b-form-radio-group :options="options"
                            name="q7">
        </b-form-radio-group>
      </b-form-group>
      <b-button type="submit" variant="success">Save Answers</b-button>
    </b-form>

  </div>
</template>

<script>
import axios from '@/backend/axios';
import router from '../router';

const items = [
  { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '1. Feeling nervous, anxious, or on edge',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '2. Not being able to stop or control worrying',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '3. Worrying too much about different things',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
      }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '4. Trouble relaxing',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      "5. Being so restless it's hard  to sit still",
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '6. Becoming easily annoyed or irritable',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  }, { over_the_last_2_weeks_how_often_have_you_been_bothered_by_the_following_problems:
      '7. Feeling afraid as if something awful might happen',
    not_at_all: true,
    several_days: true,
    over_half_the_days: true,
    nearly_every_day:true,
  },
];

const options = [
  { text: 'Not difficult at all' },
  { text: 'Somewhat difficult' },
  { text: 'Very difficult' },
  { text: 'Extremely difficult' },
]

export default {
  data() {
    return {
      items,
      options
    };
  },
  methods: {
    handleSubmit() {
      this.form.submitted = true;
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
</style>
