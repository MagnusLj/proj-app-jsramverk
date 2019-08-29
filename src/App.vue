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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}



.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #0074d9;
    border-top: 4px solid #0be6d7;
    color: white;
}

@media screen and (max-width: 850px) {
    .app {
        max-width: 100%;
        padding: 0.5em 1.5em 2em;
        overflow-x: hidden;
            /* font-size: 50%; */
    }
}


h1 {
    font-size: 8em;
    font-weight: 100;
}

a {
    color: white;
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
}

input {
    height: 2em;
    border-radius: 5px;
/*
    display: inline-block;
  width: 6em;
  position: relative;
  top: -3em; */
}

input[type=text],
input[type=email],
input[type=password] {
    width: 21em;
    margin-bottom: 2em;
}

/* input[type=select], */
input[type=number] {
    width: 7em;
    margin-bottom: 2em;
    /* position: relative; */
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

.ittybittylabel {
    /* display: block; */
    font-size: 0.7em;
    position: absolute;
    top: 2.3em;
    /* display: block; */
    /* position: absolute; */
    /* top: 1em; */
    margin-left: 1em;
  /* width: 6em;
  margin-right: .5em;
  padding-top: 1.5em; */
}

.ittybittylabel2 {
    /* display: block; */
    font-size: 0.5em;
    display: inline-block;
    position: absolute;
    top: 45.7em;
    margin-left: 1em;
  /* width: 6em;
  margin-right: .5em;
  padding-top: 1.5em; */
}

.form-group {
    position: relative;
    display: inline;
}



</style>
