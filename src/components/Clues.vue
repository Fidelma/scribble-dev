<template lang="html">
  <div class="">
    <h1>Player {{this.player+1}}</h1>
    <h3>Tap and hold to reveal your clue</h3>
    <div class="clue" v-if="displayClue">
      <clue :currentClue="this.clues[this.player]"/>
    </div>
    <h3>Write it down on your Post-it.</h3>
    <button type="button" @click="nextPlayer()">Next Player</button>
  </div>
</template>

<script>
import Clue from './Clue.vue'

export default {
  name: 'clues',
  props: ['clues', 'players'],
  data(){
    return {
      player: 0,
      displayClue: true
    }
  },
  components: {
    clue: Clue
  },

  methods: {
    nextPlayer(){
      if (this.player < (this.players - 1)){
        this.player +=1
      }else {
        this.displayClue = false
      }
    }

  }
}
</script>

<style lang="css" scoped>
.clue {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 1.5em;
  background-color: #ffff99;
  color: #ffff99;
  box-shadow:1px 1px 1px rgba(0, 0, 0, 0.40);  
}

.clue:active {
  color: black;
}
</style>
