<template>
<!-- <nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
        <li><router-link to="/registration">Registrering</router-link></li>
    </ul>
</nav> -->


<nav class="navbar navbar-expand-md bg-info navbar-dark fixed-top">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Me</router-link>
      </li>

      <!-- <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> -->

      <!-- Dropdown -->
      <li class="nav-item dropdown bg-info">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          Redovisning
        </a>
        <div class="dropdown-menu bg-info">
          <!-- <a class="dropdown-item" href="#">Link 1</a> -->
          <router-link class="dropdown-item bg-info" to="/reports/week/1">Vecka 1</router-link>
          <router-link class="dropdown-item bg-info" to="/reports/week/2">Vecka 2</router-link>
          <router-link class="dropdown-item bg-info" to="/reports/week/3">Vecka 3</router-link>
        </div>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/registration">Ny användare</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/login">Logga in</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/addoredit">Lägg till eller redigera</router-link>
      </li>

    </ul>
  </div>
</nav>



<!-- <div class="navbar">
  <router-link to="/">Me</router-link>
  <div class="subnav">
    <button class="subnavbtn">Redovisning <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <router-link to="/reports/week/1">kmom01</router-link><br>
      <router-link to="/reports/week/2">kmom02</router-link>
    </div>
  </div>
  <router-link to="/registration">Registrering</router-link> -->

  <!-- <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div>
  <a href="#contact">Contact</a> -->

<!-- </div> -->

</template>




<template>
<!-- <nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
        <li><router-link to="/registration">Registrering</router-link></li>
    </ul>
</nav> -->


<nav class="navbar navbar-expand-md bg-info navbar-dark fixed-top">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Me</router-link>
      </li>

      <!-- <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> -->

      <!-- Dropdown -->
      <li class="nav-item dropdown bg-info">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          Redovisning
        </a>
        <div class="dropdown-menu bg-info">
          <!-- <a class="dropdown-item" href="#">Link 1</a> -->
          <router-link class="dropdown-item bg-info" to="/reports/week/1">Vecka 1</router-link>
          <router-link class="dropdown-item bg-info" to="/reports/week/2">Vecka 2</router-link>
          <router-link class="dropdown-item bg-info" to="/reports/week/3">Vecka 3</router-link>
        </div>
      </li>

      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/registration">Ny användare</router-link>
      </li> -->

      <li v-if="this.getToken" class="nav-item">
        <router-link class="nav-link" to="/addoredit">Lägg till eller redigera</router-link>
      </li>

      <li  v-if="this.getToken" class="nav-item">
        <router-link class="nav-link" to="/logout">Logga ut</router-link>
      </li>
      <li  v-else="!this.getToken" class="nav-item">
        <router-link class="nav-link" to="/login">Logga in</router-link>
      </li>


    </ul>
  </div>
</nav>

<!-- <p> {{ getToken }} </p> -->

<!-- <div class="navbar">
  <router-link to="/">Me</router-link>
  <div class="subnav">
    <button class="subnavbtn">Redovisning <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <router-link to="/reports/week/1">kmom01</router-link><br>
      <router-link to="/reports/week/2">kmom02</router-link>
    </div>
  </div>
  <router-link to="/registration">Registrering</router-link> -->

  <!-- <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div>
  <a href="#contact">Contact</a> -->

<!-- </div> -->

</template>


<!-- <p> {{ getToken }} </p> -->



<script>
export default {
  name: 'Nav',
  props: { },

computed:
{
//   compiledMarkdown: function () {
//     return marked(this.text, { sanitize: true })
// },
totalTvCount () {
  return this.$store.state.totalTvCount
},
getToken () {
return this.$store.state.theToken
}
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul {
    list-style-type: none;
}

li {
    display: inline;
    margin-right: 1em;
}

li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}

li a:hover {
    text-decoration: underline;
} */
</style>
