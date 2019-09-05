<template lang="html">
  <div class="">

<div class="" v-if="displayClue">

  <clue :currentClue="this.clues[this.player]"/>

  <button type="button" @click="nextPlayer()">Next Player</button>

</div>
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
</style>
