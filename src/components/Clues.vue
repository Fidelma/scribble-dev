<template lang="html">
  <div class="">
    <h1>Player {{this.player+1}}</h1>
    <h3>Tap and hold to reveal your clue</h3>
    <div class="clue" v-if="displayClue">
      <clue :currentClue="this.currentClues[this.player]"/>
    </div>
    <h3>Write it down on your Post-it.</h3>
    <button v-if="!this.lastPlayer" type="button" @click="nextPlayer()">Next Player</button>
    <button v-if="this.lastPlayer" type="button" @click="nextStep()">Next Step</button>
  </div>
</template>

<script>
import Clue from './Clue.vue'

import { eventBus } from '@/main.js'

export default {
  name: 'clues',
  props: ['currentClues', 'players'],
  data(){
    return {
      player: 0,
      lastPlayer: false,
      displayClue: true
    }
  },
  components: {
    clue: Clue
  },

  methods: {
    nextPlayer(){
      if (this.player < (this.players - 1)){
        this.player += 1;
        if (this.player == (this.players - 1)) {
          this.lastPlayer = true;
        }
      } else {
        this.displayClue = false;
      }
    },

    nextStep() {
      eventBus.$emit('display-draw', true)
    }
  }
}
</script>

<style lang="css" scoped>
.clue {
  max-width: 80vw;
  margin: 0 auto;
  padding: 1em;
  font-size: 1.2em;
  background-color: #ffff99;
  color: #ffff99;
  box-shadow:1px 1px 1px rgba(0, 0, 0, 0.40);
  cursor: pointer;
}

.clue:active {
  color: black;
}
</style>
