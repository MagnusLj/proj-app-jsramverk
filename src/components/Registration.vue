<template>
<main>
    <Nav />
    <h2><br>{{ heading }}</h2>
    <!-- <div class="question" v-for="question in questions" :key="question.key"> -->
      <!-- <p><strong>{{ question.question }}</strong></p>
      <p>{{ question.answer }}</p> -->

    <p> <br>{{ text }} <a href="https://github.com/MagnusLj/jsramverk">kursrepot på GitHub</a></p>
    <p><br>Här nedan kommer texten från README.md<br></p>
    <pre>



        # me-vue

        ## Project setup
        ```
        npm install
        ```

        ### Compiles and hot-reloads for development
        ```
        npm run serve
        ```

        ### Compiles and minifies for production
        ```
        npm run build
        ```

        ### Run your tests
        ```
        npm run test
        ```

        ### Lints and fixes files
        ```
        npm run lint
        ```

        ### Customize configuration
        See [Configuration Reference](https://cli.vuejs.org/config/).
    </pre>

    <!-- </div> -->
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Registrering',
  components: {
    Nav,
  },
  data() {
    return {
        heading: "Registrering",
        text: "Hej, här är en länk till "
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
