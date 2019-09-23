<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p>I see {{ theToken }} token!</p>
    <p v-show="!totalTvCount">I can't buy any..</p>
    <button
      :disabled="!totalTvCount"
      @click="buyTv">
      Buy TV
    </button>
    <button
      :disabled="totalTvCount < 2"
      @click="buyTwoTvs">
      Buy Two TVs
    </button>
    <button
      @click="buyTwoTokens">
      Suck a token
    </button>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  computed: {
    totalTvCount () {
      return this.$store.state.totalTvCount
  },
  theToken () {
    return this.$store.state.theToken
},
  },
  methods: {
    buyTv() {
      // Dispatch the action to buy a TV
      this.$store.dispatch('removeTv', 1)
    },
    buyTwoTvs() {
      // Dispatch the action to buy two TVs
      this.$store.dispatch('removeTv', 2)
  },
  buyTwoTokens() {
    // Dispatch the action to buy two TVs
    this.$store.dispatch('removeToken', 2)
}
  }
}
</script>

<style scoped>
</style>
