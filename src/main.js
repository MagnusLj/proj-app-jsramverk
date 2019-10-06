import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';
// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
