<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>Chattlogg</h2>
    <p>{{ message }}</p>
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
        text: ""
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      // fetch("https://me-api.dreamsofliden.me")
      fetch("http://localhost:3000/chatlog")
      .then(function(response) {
          console.log("B")
          return response;
      })
      .then(function(result) {
          console.log(result);
          that.text = result;
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
