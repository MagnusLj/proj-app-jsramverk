<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>Me</h2>
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
        text: ""
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      fetch("https://me-api.dreamsofliden.me")
      // fetch("localhost:9001/")
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
    /* margin: 0 0.6em; */
}

</style> -->
