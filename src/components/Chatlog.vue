<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>Chattlogg</h2>
    <!-- <p>{{ message}}</p> -->

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


    <!-- Tillfälligt bortkommenterat -->
    <div class="card-body_2" v-chat-scroll>
        <div class="messages" v-for="(msg, index) in message" :key="index">
            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
        </div>
    </div>






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
  name: 'Chatlog',
  components: {
    Nav,
  },
  data() {
    return {
      // questions: [],
      user: '',
      user2: '',
      message: '',
      messages: [],
      text: ""
      // week: this.$route.params.week
    }
  },
  // watch: {
  // '$route.params.week': function (week) {
  //     this.getText(week)
  // }
// },
  mounted() {
    this.getLog();
  },
  methods: {
    getLog() {
      console.log("A");
      let that = this;
      fetch("https://socket-server.dreamsofliden.me")
      // fetch("http://localhost:3000/chatlog")
      .then(function(response) {
          console.log("B");
          return response.json();
          })
          .then(function(result) {
              console.log("X");
              console.log(result);
              // that.message = result.message;
              console.log(result[0].user);
              console.log(result[0].message);
              that.message = result;
              // console.log(result[0]);
          });

    }



    // mounted() {
    //   this.getMe();
    // },
    // methods: {
    //   getMe() {
    //     let that = this;
    //     fetch("https://me-api.dreamsofliden.me")
    //     // fetch("localhost:9001/")
    //     .then(function(response) {
    //         console.log("B")
    //         return response.json();
    //     })
    //     .then(function(result) {
    //         that.text = result.data.blahblah;
    //     });
    //   }
    // }

















    // methods: {
    //   getMe() {
    //     let that = this;
    //     fetch("https://me-api.dreamsofliden.me")
    //     // fetch("localhost:9001/")
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(result) {
    //         that.text = result.data.blahblah;
    //     });
    //   }









}



  }

</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

.card-body_2 {
    height: 17em;
    overflow-y:scroll;
}

.question {
  margin-bottom: 2em;
}
</style>
