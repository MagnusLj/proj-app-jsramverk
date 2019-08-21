<template>
<main>
    <Nav />
    <h2><br>{{ heading }}</h2>
    <!-- <div class="question" v-for="question in questions" :key="question.key"> -->
      <!-- <p><strong>{{ question.question }}</strong></p>
      <p>{{ question.answer }}</p> -->

      <p> <br>{{ text }} </p>
    <!-- </div> -->
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
        heading: "Redovisning kmom01",
        text: "Hej hej, här är någon slags redovisningstext."
      // questions: [],
    }
  },
  mounted() {
    // this.getText(this.$route.params.kmom);
  },
  methods: {
    // getText(kmom) {
    //   let that = this;
    //   that.text = "";
    //   fetch("https://me-api.jsramverk.me/reports/" + kmom)
    //   .then(function(response) {
    //       return response.json();
    //   })
    //   .then(function(result) {
    //       that.questions = result.data.map((question, index) => {
    //         return {
    //           key: index,
    //           question: question.question,
    //           answer: question.answer
    //         };
    //       });
    //   });
    // }

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
