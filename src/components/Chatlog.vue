<template>
    <main>
        <Nav />
        <div class="wrapper">
        <br><h2><br>Handelssida</h2>

        <p>Aktuella priser för äpplen (1), päron (2) och bananer (3)<br><br></p>

        <pure-vue-chart
          :points="[price1,price2,price3]"
          :show-x-axis="true"
          :show-y-axis="true"
          :show-values="true"
          :width="330"
          :height="250"
        />






        <form
          @submit="checkForm"
          novalidate="true"
        >

          <p v-if="errors.length">
            <b>Vänligen fixa följande:</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li><br>
            </ul>
          </p>

        <br>
        <p><b>Innehav</b> <br>Äpplen: {{ apples }}<br>Päron: {{ pears }} <br>Bananer: {{ bananas }} <br>Pengar: {{ balance }} <br><br></p>

<p>Använd positiva siffor för att handla frukter eller sätta in pengar. Använd negativa siffror för att sälja frukter eller ta ut pengar.<br><br></p>


          <div>
              <p>
              <label for="birthday">Köp eller sälj<br></label>
          </p>
              <div class="form-group">
              <label for="xapples" class="ittybittylabel">Äpplen (1)</label>
              <input id="xapples" v-model="xapples" type="number" name="xapples">
              </div>



            <div class="form-group">
            <label for="xpears" class="ittybittylabel">Päron (2)</label>
            <input id="xpears" v-model="xpears" type="number" name="xpears">
        </div>

        <div class="form-group">
        <label for="xbananas" class="ittybittylabel">Bananer (3)</label>
        <input id="xbananas" v-model="xbananas" type="number" name="xbananas">
    </div>

        </div>

          <p>
            <label for="xbalance">Sätt in/ta ut<br></label>
            </p>
            <div class="form-group">
            <label for="balance" class="ittybittylabel">Pengar</label>
            <input
              id="xbalance"
              v-model="xbalance"
              type="number"
              name="xbalance"
            >
        </div>


          <p>
              <br>
            <button
            type="button"
              @click="checkForm"
            >SKICKA</button>
            <br><br>
          </p>


        </form>

<!--
        <p>1: {{ name1 }} : {{ price1 }} </p>
        <p>2: {{ name2 }} : {{ price2 }} </p>
        <p>3: {{ name3 }} : {{ price3 }} </p> -->


  </div>



  </main>
</template>



<script>
import io from 'socket.io-client';
import Nav from './Nav.vue';
import PureVueChart from 'pure-vue-chart';
export default {
    name: 'Chat',
    props: { },
    components: {
        PureVueChart,
        Nav,
    },
    data() {
        return {
            errors: [],
            name: null,
            email: null,
            day: null,
            month: "",
            year: null,
            password1: null,
            password2: null,
            token: "",
            state: {
               message: 'Hello!'
             },
            name1: '',
            name2: '',
            name3: '',
            price1: '',
            price2: '',
            price3: '',
            apples: '',
            xapples: '',
            pears: '',
            xpears: '',
            bananas: '',
            xbananas: '',
            balance: '',
            xbalance: '',
            user: '',
            user2: '',
            message: '',
            messages: [],
            time2: '',
            // socket : io('http://localhost:3333')
            socket : io('https://proj-socket-server.dreamsofliden.me')
        }
    },
    computed:
    {

    totalTvCount () {
      return this.$store.state.totalTvCount
    },
    // getToken () {
    // return this.$store.state.theToken
    // }
    // getEmail () {
    // return this.$store.state.email
    // },
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        buyTwoTokens(tocken) {
            // console.log("Buy two tokens" + tocken);

          this.$store.dispatch('removeToken', tocken)
      },




      // checkForm: function (e) {
      //   this.errors = [];
      //
      //   if (!this.email) {
      //     this.errors.push('Du måste ange din mailadress.');
      //   } else if (!this.validEmail(this.email)) {
      //     this.errors.push('Du måste ange en riktig mailadress.');
      // }
      // if (!this.password1) {
      //     this.errors.push('Du måste ange ditt lösenord.');
      // }
      //
      //   if (this.errors.length < 1) {
      //     this.makeJSON();
      //     return true;
      //   }
      //
      //   e.preventDefault();
      // },



      checkForm: function (e) {
        this.errors = [];

        if (parseInt(this.balance) + parseInt(this.xbalance) < 0) {
          this.errors.push('Du har inte så mycket pengar.');
        }
        if ((parseInt(this.balance) - parseInt(this.xapples) * this.price1  < 0)) {
            this.errors.push('Du har inte så mycket pengar.');
        }
        if ((parseInt(this.balance) - parseInt(this.xpears) * this.price2  < 0)) {
            this.errors.push('Du har inte så mycket pengar.');
        }
        if ((parseInt(this.balance) - parseInt(this.xbananas) * this.price3  < 0)) {
            this.errors.push('Du har inte så mycket pengar.');
        }
        if (parseInt(this.apples) + parseInt(this.xapples) < 0) {
            this.errors.push('Du har inte så många äpplen.');
        }
        if (parseInt(this.pears) + parseInt(this.xpears) < 0) {
            this.errors.push('Du har inte så många päron.');
        }
        if (parseInt(this.bananas) + parseInt(this.xbananas) < 0) {
            this.errors.push('Du har inte så många bananer.');
        }
      //   else if (!this.validEmail(this.email)) {
      //     this.errors.push('Du måste ange en riktig mailadress.');
      // }
      // if (!this.password1) {
      //     this.errors.push('Du måste ange ditt lösenord.');
      // }
      console.log("errors.length: " + this.errors.length);
        if (this.errors.length < 1) {
          this.count();
          // .then(function() {
              this.makeJSON();
          // })
          return true;
        }

        e.preventDefault();
      },

  //     .then(function(result) {
  //         return stuff.storeUser(res, body, result)
  // })



      validEmail: function (email) {
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validDate: function (day, year) {
      if (day > 31) {
          // this.errors.push('day');
          return true;
      } else if (year > 2019) {
          // this.errors.push('year');
          return true;
      }
  },

  getEmail () {
  return this.$store.state.email
  },

  getToken () {
      console.log("getToken!!!!!")
      console.log(this.$store.state.theToken)
  return this.$store.state.theToken
  },


  setMessage: function (token) {
      this.state.message = token;
      console.log("Message set")
      // console.log(this.state.message);
  },


  getMessage: function () {
      return this.state.message;
      // console.log(this.state.message);
  },


count: function () {
    if (this.xapples) {
        this.apples = parseInt(this.apples) + parseInt(this.xapples);
        this.balance = parseInt(this.balance) - parseInt(this.xapples) * parseInt(this.price1);
    }
    if (this.xpears) {
    this.pears = parseInt(this.pears) + parseInt(this.xpears);
    this.balance = parseInt(this.balance) - parseInt(this.xpears) * parseInt(this.price2);
}
    if (this.xbananas) {
    this.bananas = parseInt(this.bananas) + parseInt(this.xbananas);
    this.balance = parseInt(this.balance) - parseInt(this.xbananas) * parseInt(this.price3);
}
    if (this.xbalance) {
    this.balance = parseInt(this.balance) + parseInt(this.xbalance);
}
},



  makeJSON: function () {
      let token = this.$store.state.theToken
      console.log("The token is: " + token);
      let email = this.email;
      // let password = this.password1;
      let apples = this.apples;
      let pears = this.pears;
      let bananas = this.bananas;
      let balance = this.balance;
      // let that = this;
      // that.state.message = "";

      //Låt stå!
      // fetch('https://me-api.dreamsofliden.me/login', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({email:email, password:password})
      // })

      // fetch('http://localhost:5333/updateaccount', {
      fetch('https://proj-api.dreamsofliden.me/updateaccount', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
          },
          body: JSON.stringify({email:email, apples:apples, pears:pears, bananas:bananas,
          balance:balance})
      })

      .then((res) => res.json())
      .then(function(res) {
          console.log(res)
          // that.tocken = res.data.token;
          // that.buyTwoTokens(that.tocken);
      })
      // .then(console.log("State message2"))
      // .then(console.log("Tocken"))
      // .then(console.log(this.tocken))
      // .then(console.log(that.tocken))
      // .then(that.buyTwoTokens(that.tocken))
      // .then(this.$router.push("/"))
      .catch((err)=>console.log(err))

  },


  makeJSON2: function () {
      let token = this.$store.state.theToken
      console.log("The token is: " + token);
      let email = this.getEmail();
      console.log("this email: " + email);
      let that = this;
      // that.state.message = "";

      //Låt stå!
      // fetch('https://me-api.dreamsofliden.me/login', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({email:email, password:password})
      // })




      // getMe() {
      //   let that = this;
      //   fetch("https://me-api.dreamsofliden.me")
      //   .then(function(response) {
      //       console.log("B")
      //       return response.json();
      //   })
      //   .then(function(result) {
      //       that.text = result.data.blahblah;
      //   });
      // }


      // fetch('http://localhost:5333/getaccount', {
      fetch('https://proj-api.dreamsofliden.me/getaccount', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
          },
          body: JSON.stringify({email:email})
      })

      .then((res) => res.json())
      .then(function(res) {
          that.apples = res.data.apples;
          that.pears = res.data.pears;
          that.bananas = res.data.bananas;
          that.balance = res.data.balance;
          // console.log("balance: ");
          // console.log(that.balance);
          // that.tocken = res.data.token;
          // that.buyTwoTokens(that.tocken);
      })
      // .then(console.log("State message2"))
      // .then(console.log("Tocken"))
      // .then(console.log(this.tocken))
      // .then(console.log(that.tocken))
      // .then(that.buyTwoTokens(that.tocken))
      // .then(this.$router.push("/"))
      .catch((err)=>console.log(err))

  },




        sendMessage(e) {
            e.preventDefault();

            this.socket.emit('SEND_MESSAGE', {
                user: this.time2 + " " + this.user,
                message: this.message
            });
            this.message = ''
        },

        openModal() {
                this.toggleModal = true;
    },

        userToUser2() {
            this.user2 = this.user;
            this.socket.emit('SEND_MESSAGE', {
                user: this.time2 + " " + this.user2,
                message: this.user2 + " har anslutit till chatten."
            });
        },

        getNow () {
            const today = new Date();
            var minutes = today.getMinutes()
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            const time = today.getHours() + ":" + minutes;
            this.time2 = time;
            // console.log(minutes.length);
        }


    },
    // mounted() {
    //     this.socket.on('MESSAGE', (data) => {
    //         this.messages = [...this.messages, data];
    //         // you can also do this.messages.push(data)
    //     });
    //     this.openModal();
    // }
    mounted() {
        this.token = this.getToken();
        this.makeJSON2();
        this.email = this.getEmail();
        console.log("get email");
        console.log(this.email);

        this.socket.on('stocks', (fruits) => {
            // console.log(fruits[0].name);
            // console.log(fruits[0].startingPoint);
            // this.messages = [...this.messages, fruits];
            this.name1 = fruits[0].name;
            this.price1 = Math.round(fruits[0].startingPoint * 100) / 100;

            this.name2 = fruits[1].name;
            this.price2 = Math.round(fruits[1].startingPoint * 100) / 100;

            this.name3 = fruits[2].name;
            this.price3 = Math.round(fruits[2].startingPoint * 100) / 100;
            // you can also do this.messages.push(data)
        });
        this.openModal();
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  text-transform: uppercase;
    /* margin: 0 0.6em; */
}

.card-body_2 {
    height: 17em;
    overflow-y:scroll;
}

.btn-info {
    float: right
}

</style> -->
