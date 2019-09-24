<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>redovisning vecka {{ $route.params.week }}</h2>

    <!-- <div class="form-group">
    <input
      id="week"
      v-model="week"
      type="number"
      name="week"
      value="theweek"
      @input="getText(week)"
    >

    </div> -->
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
  name: 'Report',
  components: {
    Nav,
  },
  data() {
    return {
      // questions: [],
      text: "",
      week: this.$route.params.week
    }
  },
  watch: {
  '$route.params.week': function (week) {
      this.getText(week)
  }
},
  mounted() {
    this.getText(this.week);
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.text)
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

.question {
  margin-bottom: 2em;
}
</style>
