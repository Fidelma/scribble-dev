<template lang="html">
  <div class="">

  <button type="button" @click="addPlayer()">+</button>
  <div class="">
    <h2>{{this.players}}</h2>
  </div>
  <button type="button" @click="removePlayer()">-</button>
  <button type="button" @click="firstClue()">PLAY</button>

</div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'setup',
  data(){
    return {
      players: 2
    }
  },
  methods: {
    addPlayer(){
      if (this.players < 12){
        this.players += 1;
      }
    },

    removePlayer(){
      if(this.players > 2){
        this.players -= 1
      }
    },

    firstClue(){
      eventBus.$emit('first-clue', this.players);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
