<template>
    <main>
        <Nav />
        <div class="wrapper">
        <br><h2><br>Chattrum</h2>


  <div class="card mt-3">
      <div class="card-body">
          <!-- <div class="card-title">
              <h3>Chattrummet</h3>
              <hr>
          </div> -->
          <div class="card-body_2" v-chat-scroll>
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <p v-if="!this.user2">Du måste välja ett chattnamn för att kunna chatta</p>
          <p v-else>Chatta så det ryker, {{ user2 }}!</p>
          <!-- <p>Tid: {{ time2 }}</p> -->
          <form @submit.prevent="sendMessage">
              <!-- <div class="form-group">
                  <label for="user2">Användare:</label>
                  <input type="text" v-model="user2" class="form-control">
              </div> -->
              <div class="form-group pb-3">
                  <label for="message">Meddelande:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" v-if="!this.user2" class="btn btn-success" disabled>Skicka</button> <button type="submit" v-else class="btn btn-success">Skicka</button> <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Välj namn</button>
          </form>
      </div>
  </div>
  </div>

  <!-- Trigger the modal with a button -->
  <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> -->

  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <!-- <h4 class="modal-title">Modal Header</h4> -->
        </div>
        <div class="modal-body">
          <!-- <p>Some text in the modal.</p> -->
          <label for="user">Chattnamn&nbsp;&nbsp;</label>
          <input
            id="user"
            v-model="user"
            type="text"
            name="user"
          >
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="userToUser2">Spara</button>
        </div>
      </div>

    </div>
  </div>






  </main>
</template>



<script>
import io from 'socket.io-client';
import Nav from './Nav.vue';
export default {
    name: 'Chat',
    props: { },
    components: {
        Nav,
    },
    data() {
        return {
            user: '',
            user2: '',
            message: '',
            messages: [],
            time2: '',
            // socket : io('http://localhost:3000')
            socket : io('https://socket-server.dreamsofliden.me')
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
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
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
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
