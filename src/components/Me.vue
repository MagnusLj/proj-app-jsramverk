<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>Hem</h2>
    <p>{{ text }}</p>
    </div>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: "Hej, här kan du handla frukt om du är inloggad. Har du inget konto måste du registrera dig först.",
        state: {
           message: 'Hello!',
           email: 'email'
         },
    }
  },
  mounted() {
    // this.getMe();
    this.getEmail();
  },
  methods: {
      getEmail: function () {
          console.log("email");
          console.log(this.state.email);
          return this.state.email;
          // console.log(this.state.message);
      },
    getMe() {
      let that = this;
      fetch("https://me-api.dreamsofliden.me")
      .then(function(response) {
          console.log("B")
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
    /* margin: 0 0.6em; */
}

</style> -->
