<template lang="html">
  <div class="">
    <p v-if="this.lastPlayer">Last player</p>
    <h1>Player {{this.player+1}}</h1>
    <h3 class="tap-hold">Tap the note to reveal your clue</h3>
    <h3 class="click-hold">Click the note to reveal your clue</h3>
    <div class="clue" v-if="displayClue" id="clue" @click="revealClue()">
      <clue :currentClue="this.currentClues[this.player]" />
    </div>
    <h3>Write it down on your Post-it.</h3>
    <p v-if="!this.lastPlayer">Press next when done then pass it on.</p>
    <p v-if="this.lastPlayer">Press next when done for next steps</p>

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

      // hide clue again
      var el = document.getElementById("clue");
      el.style.color = "#ffff99";
    },

    nextStep() {
      eventBus.$emit('display-draw', true)
    },

    revealClue() {
      var el = document.getElementById("clue");
      el.style.color = "black";
    }
  }
}

window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};

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

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

/*Primiary device is finger*/
@media (hover: none) { 
  .tap-hold {
    visibility: visible;
  }
  .click-hold {
    visibility: hidden;
    height: 0;
    margin: 0;
    padding: 0;
  }
}

/*Primary device is mouse*/
@media (hover: hover) {
  .tap-hold {
    visibility: hidden;
    height: 0;
    margin: 0;
    padding: 0;
  }
  .click-hold {
    visibility: visible;
  }
}
</style>
