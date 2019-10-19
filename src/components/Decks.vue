<template lang="html">
  <div class="">
  	<h1>Pick your prompts</h1>
  	<div class="decks">
      <button v-for="(i, index) in this.deckTypesArray" :id=i.deck @click="toggleDeck(index)">{{i.deck}}<span class="tick">&#10003;</span></button>
    </div>
    <div class="button-row">
	    <button type="button" @click="displaySetup()">Done</button>
    </div>
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
      // selectedDecks: []
    }
  },
  methods: {
    displaySetup(){
      eventBus.$emit('display-setup', this.deckTypesArray);
    },

    toggleDeck(index){
      this.deckTypesArray[index].enabled = !this.deckTypesArray[index].enabled;
      var el = document.getElementById(this.deckTypesArray[index].deck);
      if (this.deckTypesArray[index].enabled) {
	      el.firstElementChild.style.color = "black";
      } else {
	      el.firstElementChild.style.color = "rgba(0,0,0,0)";
      }
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
	position: relative;
	margin: 10px;
	min-width: 5em;
	height: 5em;
}

.tick {
  overflow: hidden;
  margin-left: -5px;
  margin-top: -40px;
  position: absolute;
  top: 0;
  font-size: 3em;
  color: rgba(0,0,0,0);
}

</style>
