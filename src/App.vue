<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <button @click.prevent="addTicket">x</button>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar},
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
