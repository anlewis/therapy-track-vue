<template>
  <div class="depressionNew">
    <h2>Beck's Depression Inventory</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Question 1" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I do not feel sad.</b-form-radio>
          <b-form-radio>I feel sad.</b-form-radio>
          <b-form-radio>I am sad all the time and I can't snap out of it.</b-form-radio>
          <b-form-radio>I am so sad and unhappy that I can't stand it.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 2" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I am not particularly discouraged about the future.</b-form-radio>
          <b-form-radio>I feel discouraged about the future.</b-form-radio>
          <b-form-radio>I feel I have nothing to look forward to.</b-form-radio>
          <b-form-radio>I feel the future is hopeless and that things cannot improve.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 3" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I do not feel like a failure.</b-form-radio>
          <b-form-radio>I feel I have failed more than the average person.</b-form-radio>
          <b-form-radio>As I look back on my life, all I can see is a lot of failures.</b-form-radio>
          <b-form-radio>I feel I am a complete failure as a person.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 4" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I get as much satisfaction out of things as I used to.</b-form-radio>
          <b-form-radio>I don't enjoy things the way I used to.</b-form-radio>
          <b-form-radio>I don't get real satisfaction out of anything anymore.</b-form-radio>
          <b-form-radio>I am dissatisfied or bored with everything.</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 5" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't feel particularly guilty.</b-form-radio>
          <b-form-radio>I feel guilty a good part of the time.</b-form-radio>
          <b-form-radio>I feel quite guilty most of the time.</b-form-radio>
          <b-form-radio>I feel guilty all of the time. </b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 6" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't feel I am being punished.</b-form-radio>
          <b-form-radio>I feel I may be punished.</b-form-radio>
          <b-form-radio>I expect to be punished.</b-form-radio>
          <b-form-radio>I feel I am being punished.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 7" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't feel disappointed in myself.</b-form-radio>
          <b-form-radio>I am disappointed in myself.</b-form-radio>
          <b-form-radio>I am disgusted with myself.</b-form-radio>
          <b-form-radio>I hate myself.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 8" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't feel I am any worse than anybody else.</b-form-radio>
          <b-form-radio>I am critical of myself for my weaknesses or mistakes.</b-form-radio>
          <b-form-radio>I blame myself all the time for my faults.</b-form-radio>
          <b-form-radio>I blame myself for everything bad that happens.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 9" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't have any thoughts of killing myself.</b-form-radio>
          <b-form-radio>I have thoughts of killing myself, but I would not carry them out.</b-form-radio>
          <b-form-radio>I would like to kill myself.</b-form-radio>
          <b-form-radio>I would kill myself if I had the chance.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 10" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't cry any more than usual.</b-form-radio>
          <b-form-radio>I cry more now than I used to.</b-form-radio>
          <b-form-radio>I cry all the time now.</b-form-radio>
          <b-form-radio>I used to be able to cry, but now I can't cry even though I want to.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 11" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I am no more irritated by things than I ever was.</b-form-radio>
          <b-form-radio>I am slightly more irritated now than usual.</b-form-radio>
          <b-form-radio>I am quite annoyed or irritated a good deal of the time.</b-form-radio>
          <b-form-radio>I feel irritated all the time.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 12" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I have not lost interest in other people.</b-form-radio>
          <b-form-radio>I am less interested in other people than I used to be.</b-form-radio>
          <b-form-radio>I have lost most of my interest in other people.</b-form-radio>
          <b-form-radio>I have lost all of my interest in other people.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 13" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I make decisions about as well as I ever could.</b-form-radio>
          <b-form-radio>I put off making decisions more than I used to.</b-form-radio>
          <b-form-radio>I have greater difficulty in making decisions more than I used to.</b-form-radio>
          <b-form-radio>I can't make decisions at all anymore.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 14" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't feel that I look any worse than I used to.</b-form-radio>
          <b-form-radio>I am worried that I am looking old or unattractive.</b-form-radio>
          <b-form-radio>I feel there are permanent changes in my appearance that make me look unattractive.</b-form-radio>
          <b-form-radio>I believe that I look ugly.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 15" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I can work about as well as before.</b-form-radio>
          <b-form-radio>It takes an extra effort to get started at doing something.</b-form-radio>
          <b-form-radio>I have to push myself very hard to do anything.</b-form-radio>
          <b-form-radio>I can't do any work at all.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 16" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I can sleep as well as usual.</b-form-radio>
          <b-form-radio>I don't sleep as well as I used to.</b-form-radio>
          <b-form-radio>I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.</b-form-radio>
          <b-form-radio>I wake up several hours earlier than I used to and cannot get back to sleep.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 17" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I don't get more tired than usual.</b-form-radio>
          <b-form-radio>I get tired more easily than I used to.</b-form-radio>
          <b-form-radio>I get tired from doing almost anything.</b-form-radio>
          <b-form-radio>I am too tired to do anything.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 18" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>My appetite is no worse than usual.</b-form-radio>
          <b-form-radio>My appetite is not as good as it used to be.</b-form-radio>
          <b-form-radio>My appetite is much worse now.</b-form-radio>
          <b-form-radio>I have no appetite at all anymore.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 19" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I haven't lost much weight, if any, lately.</b-form-radio>
          <b-form-radio>I have lost more than five pounds.</b-form-radio>
          <b-form-radio>I have lost more than ten pounds.</b-form-radio>
          <b-form-radio>I have lost more than fifteen pounds. </b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 20" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I am no more worried about my health than usual.</b-form-radio>
          <b-form-radio>I am worried about physical problems like aches, pains, upset stomach, or constipation.</b-form-radio>
          <b-form-radio>I am very worried about physical problems and it's hard to think of much else.</b-form-radio>
          <b-form-radio>I am so worried about my physical problems that I cannot think of anything else.</b-form-radio>
         </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Question 21" class="question">
        <b-form-radio-group stacked>
          <b-form-radio>I have not noticed any recent change in my interest in sex.</b-form-radio>
          <b-form-radio>I am less interested in sex than I used to be.</b-form-radio>
          <b-form-radio>I have almost no interest in sex.</b-form-radio>
          <b-form-radio>I have lost interest in sex completely.</b-form-radio>
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

.question {
  text-align: left;
  margin: 2% 5%;
}

</style>
