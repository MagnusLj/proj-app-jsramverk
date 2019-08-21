<!-- <template>
<main>
    <Nav />
    <h1>Me</h1>
    <p>{{ text }}</p>
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
      fetch("https://me-api.jsramverk.me")
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          that.text = result.description;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style> -->
