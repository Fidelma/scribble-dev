<template lang="html">
  <div class="">

  	<h1>Pick your prompts</h1>
  	<div class="decks">
      <button v-for="(i, index) in this.deckTypesArray" @click="toggleDeck(index)">{{i.deck}}</button>
    </div>
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
.decks {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.decks > button {
	font-size: 28px;
	text-align: center;
	padding-left: auto;
	padding-right: auto;
	margin: 10px;
	min-width: 6em;
	height: 6em;
}
</style>
