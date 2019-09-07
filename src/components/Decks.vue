<template lang="html">
  <div class="">

    <button v-for="(i, index) in this.deckTypesArray" @click="toggleDeck(index)">{{i.deck}}</button>
    <button type="button" @click="displaySetup()">Number of Players</button>




  </div>
</div>

</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'decks',
  props: ['deckTypesArray'],
  data(){
    return {
      selectedDecks: []
    }
  },
  methods: {
    displaySetup(){
      eventBus.$emit('display-setup', true);
    },

    toggleDeck(index){
      console.log(this.deckTypesArray[index].enabled);
      this.deckTypesArray[index].enabled = !this.deckTypesArray[index].enabled;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
