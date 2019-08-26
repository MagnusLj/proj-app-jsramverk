<template>
<nav>
    <ul>
        <!--<li><router-link to="/">Me</router-link></li>
        <li><router-link to="/report/kmom01">kmom01</router-link></li>-->
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
        <li><router-link to="/registration">Registrering</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Me2',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
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
}
</style>
