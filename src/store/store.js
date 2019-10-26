import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10, // The TV inventory
    isLarryHappy: true,
    isJennyHappy: true,
    theToken: null,
    email: null
  },

  getters: {
    // Check if both Larry and Jenny are happy
    happyStaff: state => {
      return state.isLarryHappy && state.isJennyHappy
    }
  },

  mutations: {
    // Jenny
    removeTv(state, amount) {
      state.totalTvCount -= amount
  },
  setToken(state, token) {
    state.theToken = token
},
setEmail(state, email) {
  state.email = email
},
removeToken(state, amount) {
  state.theToken = amount
},
removeEmail(state, amount) {
  state.email = amount
},
removeToken2(state) {
  state.theToken = null
},
removeEmail2(state) {
  state.email = null
},
  },

  actions: {
    // Larry
    removeTv(context, amount) {
      // If we enough TVs, ask Jenny to remove it
      if(context.state.totalTvCount >= amount) {
        // If we enough TVs, ask Jenny to remove it
        context.commit('removeTv', amount)
      }
  },

  removeToken(context, amount) {
    // If we enough TVs, ask Jenny to remove it
    if(context.state.theToken >= 0) {
      // If we enough TVs, ask Jenny to remove it
      context.commit('removeToken', amount)
    }
},

// removeEmail(context, amount) {
//   // If we enough TVs, ask Jenny to remove it
//   if(context.state.email >= 0) {
//       console.log("Hello from store");
//     // If we enough TVs, ask Jenny to remove it
//     context.commit('removeEmail', amount);
//   }
// },

removeEmail(context, amount) {
  // If we enough TVs, ask Jenny to remove it

      console.log("Hello from store");
    // If we enough TVs, ask Jenny to remove it
    context.commit('removeEmail', amount);

},

removeToken2(context, amount) {
  // If we enough TVs, ask Jenny to remove it
  if(context.state.theToken) {
    // If we enough TVs, ask Jenny to remove it
    context.commit('removeToken2', amount)
  }
},

removeEmail2(context, amount) {
  // If we enough TVs, ask Jenny to remove it
  if(context.state.email) {
    // If we enough TVs, ask Jenny to remove it
    context.commit('removeToken2', amount)
  }
},

  setToken(state, token) {
    state.theToken = token
},
setEmail(state, email) {
  state.email = email
},

  }
});
