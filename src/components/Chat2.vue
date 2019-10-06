<template>
<main>
    <Nav />
    <div class="wrapper">
    <br><h2><br>Chat</h2>
    <div>
  <span>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</span>
</div>
    <!-- <p>{{ text }}</p> -->
    </div>
</main>
</template>

<script>
import Nav from './Nav.vue'
import io from 'socket.io-client';

export default {
  name: 'Chat',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: "",
        socket: io('http://localhost:9595')
    }
  },

  mounted() {

  },
//   sockets: {
//   connect() {
//     console.log('socket connected')
//   },
//   customEmit(val) {
//     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
//   }
// },
  methods: {
      sendMessage(e) {
            e.preventDefault();
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

</style> -->
