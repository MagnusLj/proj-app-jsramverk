<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>{{ heading }}</h2>
    <p>Registrera dig här för att handla frukt</p><br>
    <!-- <div class="question" v-for="question in questions" :key="question.key"> -->
      <!-- <p><strong>{{ question.question }}</strong></p>
      <p>{{ question.answer }}</p> -->

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

        <p>
          <label for="name">Namn<br></label>
          </p>
          <div class="form-group">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
          >
      </div>


        <p>
          <label for="email">Email<br></label>
      </p>
          <div class="form-group">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
          >
          </div>


        <div>
            <p>
            <label for="birthday">Födelsedatum<br></label>
        </p>
            <div class="form-group">
            <label for="day" class="ittybittylabel">Dag</label>
            <input id="day" v-model="day" type="number" name="day">
            </div>

 <!-- <p>My mother has <span style="color:blue">blue</span> eyes.</p>  -->


<div class="form-group">
<label for="month" class="ittybittylabel">Månad</label>
          <select
            id="month"
            v-model="month"
            name="month"
          >
          <!-- <option disabled value=""></option> -->
            <option value="januari">januari</option>
            <option value="februari">februari</option>
            <option value="mars">mars</option>
            <option value="april">april</option>
            <option value="maj">maj</option>
            <option value="juni">juni</option>
            <option value="juli">juli</option>
            <option value="augusti">augusti</option>
            <option value="september">september</option>
            <option value="oktober">oktober</option>
            <option value="november">november</option>
            <option value="december">december</option>
          </select>
          </div>

          <div class="form-group">
          <label for="year" class="ittybittylabel">År</label>
          <input id="year" v-model="year" type="number" name="year">
      </div>

  </div>

        <p>
          <label for="password1">Lösenord<br></label>
          </p>
          <div class="form-group">
          <label for="password1" class="ittybittylabel">Minst 8 tecken</label>
          <input
            id="password1"
            v-model="password1"
            type="password"
            name="password1"
          >
      </div>


  <!-- </div> -->

        <p>
          <label for="password2">Lösenord igen<br></label>
          </p>
          <div class="form-group">
          <!-- <label for="password1" class="ittybittylabel">Minst 8 tecken</label> -->
          <input
            id="password2"
            v-model="password2"
            type="password"
            name="password2"
          >
      </div>

        <!-- <p>
          <input
            type="submit"
            value="SKICKA"
          >
        </p> -->

        <p>
          <button
          type="button"
            @click="checkForm"
          >SKICKA</button>
        </p>


      </form>

    </div>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
    name: "Registrering",
    components: {
      Nav,
    },
  data: function() {
return {
    heading: "Registrering",
    errors: [],
    name: null,
    email: null,
    day: null,
    month: "",
    year: null,
    password1: null,
    password2: null
  };
},
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Du måste ange ditt namn.");
      }
      if (!this.email) {
        this.errors.push('Du måste ange din mailadress.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Du måste ange en riktig mailadress.');
    }
    if (!this.password1 || (this.password1.length <8)) {
        this.errors.push('Du måste välja ett lösenord med minst 8 tecken.');
    }
    // if ((this.password1).length < 8) {
    //         this.errors.push('Lösenordet måste vara minst 8 tecken!');
    //     }
    if (!(this.password1===this.password2)) {
        this.errors.push('Lösenorden stämmer inte överens.');
  }
// else if (this.password1.length < 8) {
//         this.errors.push('Lösenordet måste vara minst 8 tecken!');
//     }
//
//
      if (!this.day || !this.year || !this.month) {
        this.errors.push('Du måste ange ditt födelsedatum.');
}
else if (this.validDate(this.day, this.year)) {
  this.errors.push('Du måste ange ett riktigt födelsedatum.');
}
      if (this.errors.length < 1) {
        this.makeJSON();
        return true;
    }

      e.preventDefault();
    },

    validEmail: function (email) {
      var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  ,
  validDate: function (day, year) {
    if (day > 31) {
        // this.errors.push('day');
        return true;
    } else if (year > 2019) {
        // this.errors.push('year');
        return true;
    }
},

    makeJSON: function () {
        let name = this.name;
        let email = this.email;
        let password = this.password1;
        let day = parseInt(this.day);
        let month = this.month;
        let year = parseInt(this.year);
        let bodyy = JSON.stringify({name:name, email:email, password:password,
            day:day, month:month, year:year});
        console.log(bodyy);

        // fetch('https://me-api.dreamsofliden.me/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({name:name, email:email, password:password,
        //         day:day, month:month, year:year})
        // }).then((res) => res.json())

        fetch('https://proj-api.dreamsofliden.me/register', {
        // fetch('http://localhost:5333/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name, email:email, password:password,
                day:day, month:month, year:year})
        }).then((res) => res.json())

        .then((data) => console.log(data))
        .then(this.$router.push("/Login"))
        .catch((err)=>console.log(err))



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

form {
    /* margin: 0 2em; */
}

p {
    margin-bottom: -0.3em;
}

.question {
  margin-bottom: 2em;
}
</style>
