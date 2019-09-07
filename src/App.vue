<template>
  <div id="app">
    <navigation class="nav" ></navigation>
    <div id="content">
    <home v-if="this.displayHome"/>
    <needed v-if="this.displayNeeded"/>
    <rules v-if="this.displayRules"/>
    <decks v-if="this.displayDecks" :deckTypesArray="deckTypesArray"/>
    <setup v-if="this.displaySetup"/>
    <clues v-if="this.displayClues" :clues="clues" :players="players"/>
    </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Rules from './components/Rules.vue'
import Needed from './components/Needed.vue'
import Navigation from './components/Navigation.vue'
import Setup from './components/Setup.vue'
import Clues from './components/Clues.vue'
import Decks from './components/Decks.vue'
import { eventBus } from '@/main.js'

export default {
  name: 'app',
  data() {
    return {
      displayHome: true,
      displayNeeded: false,
      displayRules: false,
      displayDecks: false,
      displaySetup: false,
      players: null,
      displayClues: false,
      clues: [],
      // deckTypes: []

    }
  },
  components: {
    home: Home,
    rules: Rules,
    needed: Needed,
    navigation: Navigation,
    setup: Setup,
    clues: Clues,
    decks: Decks

  },

  mounted(){

   this.loadClues();

    eventBus.$on('home-setup', (display) => {
      this.displayHome = true;
      this.displayRules = false;
      this.displayNeeded = false;
      this.displaySetup = false;
      this.displayClues = false;
    })

    eventBus.$on('play-game', (display) => {
      this.displayHome = display;
      this.displayNeeded = true;
    })

    eventBus.$on('display-rules', (display) => {
      this.displayRules = display;
      this.displayNeeded = false;
    })

    eventBus.$on('display-decks', (display) => {
      this.displayDecks = display;
      this.displayRules = false;

    })

    eventBus.$on('first-clue', (players) => {
      this.players = players;
      this.displaySetup = false;
      this.displayClues = true;
    })

  },

  methods: {
    loadClues(){
      fetch('./data/clues.JSON')
      .then(res => res.json())
      .then(returnedData => this.clues = returnedData.clueCollection);
    }
  },

  computed: {
    deckTypesArray: function(){
      const deckTypes = [];
      for(const i in this.clues){
        if(!deckTypes.includes(this.clues[i].deck)){
          deckTypes.push(this.clues[i].deck);
        }
      }
      return deckTypes;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
