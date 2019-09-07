<template lang="html">
  <div class="">
    <h1>How many playing?</h1>
    <div class="selector">
      <button id="remove" type="button" @click="removePlayer()">-</button>
      <div class="players">
        <p>{{this.players}}</p>
      </div>
      <button id="add" type="button" @click="addPlayer()">+</button>
    </div>
  <br>
  <button type="button" @click="firstClue()">Play</button>
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

.selector {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 42px;
  font-weight: bold;
  display: flex;
}

#add {
  font-size: 42px;
}

#remove {
  font-size: 42px;
}
</style>
