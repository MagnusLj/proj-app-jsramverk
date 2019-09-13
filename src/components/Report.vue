<template>
<main>
    <Nav />
    <div class="wrapper">
    <h2>{{ $route.params.week }}</h2>
    <div v-html="compiledMarkdown"></div>
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
      text: ""
    }
  },
  mounted() {
    this.getText(this.$route.params.week);
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
      fetch("http://me-api.dreamsofliden.me/reports/week/" + week)
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

.question {
  margin-bottom: 2em;
}
</style>
