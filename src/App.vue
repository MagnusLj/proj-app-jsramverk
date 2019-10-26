<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://rsms.me/inter/inter-ui.css');

/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}
*/


.app {
    /* width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #0074d9;
    border-top: 4px solid #0be6d7;
    color: white; */
}



/* @media screen and (max-width: 850px) {
    .app {
        max-width: 100%;
        padding: 0.5em 1.5em 2em;
        overflow-x: hidden;
    }
} */


h1 {
    font-size: 8em;
    font-weight: 100;
}

a {

}

a:hover {
    color: black;
}

h2 {
    font-size: 3em;
    font-weight: 100;
    margin-bottom: 1em;
}

p {
    font-size: 1.5em;
    font-weight: normal;
    margin-bottom: 0;
}

input {
    height: 2em;
    border-radius: 5px;
}

input[type=text],
input[type=email],
input[type=password] {
    width: 21em;
    margin-bottom: 2em;
}

input[type=number] {
    width: 7em;
    margin-bottom: 2em;
}

input[type=submit] {
    width: 7em;
    margin-bottom: 2em;
    color: #0074d9;
    background-color: white;
    cursor: pointer;
}

select {
    height: 2em;
    border-radius: 5px;
    width: 7em;
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    input[type=text],
    input[type=password],
    input[type=email],
    input[type=submit] {
        width: 100%;
    }
    input[type=number],
    select {
        width: 33%;
    }
    input[type=submit] {
        font-size: 1em;
    }
}



.ittybittylabel {
    font-size: 1em;
    position: absolute;
    top: 1.8em;
    margin-left: 0.5em;
}

.ittybittylabel2 {
    font-size: 0.5em;
    display: inline-block;
    position: absolute;
    top: 45.7em;
    margin-left: 1em;
}

.form-group {
    position: relative;
    display: inline;
}


.wrapper {
    margin: 0 2em;
}


</style>
