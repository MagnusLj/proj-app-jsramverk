<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><br><h1>Me</h1>
    <p>{{ text }}</p>
</div>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me2',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: `Hej, jag heter Magnus och läser webbprogrammering 120 poäng ` +
              "på distans på BTH. Annars jobbar jag med sjukvård och " +
              "journalsystem, håller på att göra iordning ett gammal hus som " +
              "kräver en hel del tid. med mera. Jag har också en stor katt."
    }
  },
  mounted() {
    // this.getMe();
  },
  methods: {
    // getMe() {
    //   let that = this;
    //   fetch("https://me-api.jsramverk.me")
    //   .then(function(response) {
    //       return response.json();
    //   })
    //   .then(function(result) {
    //       that.text = "Hej, jag heter Magnus och läser webbprogrammering 120 poäng " +
    //       "på distans på BTH.";
    //   });
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
