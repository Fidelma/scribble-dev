<template>
  <div id="app">
    <navigation class="nav" ></navigation>
    <div id="content" @click="closeNav()">

    <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

import { eventBus } from '@/main.js'

export default {
  name: 'app',

  components: {

    navigation: Navigation

  },

  mounted(){
    eventBus.$on('close-nav',() => {
      this.closeNav();
    })
  },

  methods: {

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.handwritten {
  font-family: 'Kalam', cursive;
}

#app {
  font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #e6ffff;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
}

#content {
  display: flex;
  text-align: center;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 600px;
  overflow: hidden;
}
.button-row {
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  padding-left: auto;
  padding-right: auto;

}

.button-row > button {
  margin: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

button {
  background-color: #ffff99; /* Green */
  border: solid 1px black;
  color: black;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  margin-top: auto;
  margin-bottom: auto;
  border:1px solid #E8E8E8;
  box-shadow:2px 3px 3px rgba(0, 0, 0, 0.40);
  cursor: pointer;
}

button:hover {
  background-color: #f2f2a6;
}
button:active {
  box-shadow:1px 1px 1px rgba(0, 0, 0, 0.40);
}
</style>
