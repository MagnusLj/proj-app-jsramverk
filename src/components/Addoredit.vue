<template>
<main>
    <Nav />
    <div class="wrapper">
    <h2>Skapa eller redigera </h2>
    <p>
      <label for="week">Vecka<br></label>
  </p>
      <div class="form-group">
      <input
        id="week"
        v-model="week"
        type="number"
        name="week"
        @input="getText(week)"
      >

      </div>

      <p>
        <button
          type="submit"
          value="SKICKA"
          @click="getText(week)"
        >SPARA</button>
      </p>

      <p>Vecka {{ week }}</p>


    <textarea class="form-control" v-html="text"></textarea>
    <!-- <div class="question" v-for="question in questions" :key="question.key">
      <p><strong>{{ question.question }}</strong></p>
      <p>{{ question.answer }}</p>
    </div> -->
    </div>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Reports',
  components: {
    Nav,
  },
  data() {
    return {
      // questions: [],
      text: "",
      week: ""
    }
  },
  mounted() {
    this.getText(this.week);
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.text, { sanitize: true })
    }
  },
  methods: {
    getText(week) {
      let that = this;
      that.text = "";
      fetch("https://me-api.dreamsofliden.me/reports/week/" + week)
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          that.text = result.data.blahblah;
      });
    }
}
  }

</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

textarea {
    height: 500px;
}

.question {
  margin-bottom: 2em;
}
</style>
