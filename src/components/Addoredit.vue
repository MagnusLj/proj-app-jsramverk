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
          Du kan skriva med Markdown<br><br>
        <button
          type="submit"
          value="SKICKA"
          @click="deleteText(week)"
        >SPARA</button>
        <br><br>
      </p>

      <!-- <p>Vecka {{ week }}</p>
      <p>Total count: {{ totalTvCount }} </p>
      <p>The token: {{ getToken }} </p> -->

    <!-- <p style="white-space: pre-line;">{{ text }}</p> -->


    <textarea class="form-control" v-model="text"></textarea>
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
      return marked(this.text)
  },
  totalTvCount () {
    return this.$store.state.totalTvCount
},
getToken () {
  return this.$store.state.theToken
},
  },



  // export default {
  //   name: 'Customer',
  //   computed: {
  //     totalTvCount () {
  //       return this.$store.state.totalTvCount
  //     }
  //   },
  //   methods: {







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
  },


  deleteText(week) {
      let token = this.$store.state.theToken;
      console.log('deleteText');
      let kmom = parseInt(week);
      console.log(kmom);
      let bodyy = JSON.stringify({kmom:kmom})
      console.log(bodyy);
      fetch('https://me-api.dreamsofliden.me', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
          },
          body: JSON.stringify({kmom:kmom})
      }).then((res) => res.json())
      .then((data) => console.log(data))
      .then(this.postText(week))
      .catch((err)=>console.log(err))
      // .then(this.postText(week))
  },


    postText(week) {
        console.log('postText');
        let token = this.$store.state.theToken;
        let blahblah = this.text;
        let type = 'report_text';
        let kmom = parseInt(week);
        let bodyyy = JSON.stringify({blahblah:blahblah, type:type, kmom:kmom});
        console.log(bodyyy)
        console.log(kmom);
        fetch('https://me-api.dreamsofliden.me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({blahblah:blahblah, type:type, kmom:kmom})
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .then(this.$router.push("/"))
        .catch((err)=>console.log(err))



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
