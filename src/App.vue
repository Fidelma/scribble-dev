<template>
  <div id="app">
    <navigation class="nav" ></navigation>
    <home v-if="this.displayHome"/>
    <needed v-if="this.displayNeeded"/>
    <rules v-if="this.displayRules"/>
    <setup v-if="this.displaySetup"/>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Rules from './components/Rules.vue'
import Needed from './components/Needed.vue'
import Navigation from './components/Navigation.vue'
import Setup from './components/Setup.vue'
import { eventBus } from '@/main.js'

export default {
  name: 'app',
  data() {
    return {
      displayHome: true,
      displayNeeded: false,
      displayRules: false,
      displaySetup: false
    }
  },
  components: {
    home: Home,
    rules: Rules,
    needed: Needed,
    navigation: Navigation,
    setup: Setup
  },

  mounted(){
    eventBus.$on('home-setup', (display) => {
      this.displayHome = true;
      this.displayRules = false;
      this.displayNeeded = false;
      this.displaySetup = false;
    })

    eventBus.$on('play-game', (display) => {
      this.displayHome = display;
      this.displayNeeded = true;
    })

    eventBus.$on('display-rules', (display) => {
      this.displayRules = display;
      this.displayNeeded = false;
    })

    eventBus.$on('display-setup', (display) => {
      this.displaySetup = display;
      this.displayRules = false;
    })

  }
}
</script>

<style>
.nav {
  background-color: red;
  display: flex;

}

body {
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e6ffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

}

button {
  background-color: #ffff99; /* Green */
  border: solid 1px black;
  color: black;
  padding: 15px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: auto;
  margin-right: auto;
  border:1px solid #E8E8E8;  
  box-shadow:2px 3px 3px rgba(0, 0, 0, 0.40);
}

button:hover {
  box-shadow:1px 1px 1px rgba(0, 0, 0, 0.40);
}
</style>
