<template>
  <div id="app">
    <navigation/>
    <home v-if="this.displayHome"/>
    <needed v-if="this.displayNeeded"/>
    <rules v-if="this.displayRules"/>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Rules from './components/Rules.vue'
import Needed from './components/Needed.vue'
import Navigation from './components/Navigation.vue'
import { eventBus } from '@/main.js'

export default {
  name: 'app',
  data() {
    return {
      displayHome: true,
      displayNeeded: false,
      displayRules: false
    }
  },
  components: {
    home: Home,
    rules: Rules,
    needed: Needed,
    navigation: Navigation
  },

  mounted(){
    eventBus.$on('play-game', (display) => {
      this.displayHome = display;
      this.displayNeeded = true;
    })

    eventBus.$on('display-rules', (display) => {
      this.displayRules = display;
      this.displayNeeded = false;
    })

    eventBus.$on('home-setup', (display) => {
      this.displayHome = true;
      this.displayRules = false;
      this.displayNeeded = false;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
