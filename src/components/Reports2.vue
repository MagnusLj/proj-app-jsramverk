<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>{{ heading }}</h2>
    <!-- <div class="question" v-for="question in questions" :key="question.key"> -->
      <!-- <p><strong>{{ question.question }}</strong></p>
      <p>{{ question.answer }}</p> -->

    <p> {{ text }} <a href="https://github.com/MagnusLj/jsramverk">kursrepot på GitHub</a></p>
    <p><br>Här nedanför kommer lite text om var jag fick inspiration till registreringsformulär och datepicker.<br></p>
    <br><p>Jag använde tips från den rekommenderade artikeln från Nielsen Norman Group. Då bland annat tipset med att
        ha labels strax ovanför och inte för långt ifrån fältet de beskriver. Jag har också enligt tips från artikeln
        hållit fälten i en kolumn förutom där det var vettigare att ha dem i en rad med datepickern. Jag har också enligt
        artikelns tips låtit bli att använda placeholder-text och istället satt smålabels under vissa rutor för att
        instruera användaren.
        <br><br>För deras checklista för mobila registrerings- och loginformulär på mobiltelefoner föll många av tipsen
        på att det i instruktionerna för uppgiften står att man ska använda rätt HTML5-input i alla fält medan de i artikeln
        inte tycker om dold inmatning för lösenord. Tipset jag har följt från den artikeln är att jag instruerar om kravet på lösenord, under inmatningsrutan.<br><br>
        Jag fick inspiration för datepicker från "Designing the Perfect Date and Time Picker" (och då indirekt från Gmail och Yahoo)
        och gjorde enligt rekommendationerna en sådan där man skriver in datum och år manuellt och väljer månaden i en dropdown.
        <br><br>Valideringen kollar om det är något inmatat för namn, om det är en mailadress som ser vettig ut,
        om födelsedatumet är ifyllt och datumet är max 31 (jag lät i den här uppgiften bli att kolla för varje månads antal dagar och skottår),
        att året inte är i framtiden och
        att lösenorden är minst 8 tecken långa och matchar.
    </p>

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
        heading: "Redovisning kmom02",
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

a {
    color: black;
    text-decoration: underline;
}

.question {
  margin-bottom: 2em;
}
</style>
