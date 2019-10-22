<template lang="html">
  <div class="">
  	<h1>Pick your prompts</h1>
  	<div id="deck-container" class="decks decks-empty">
      <button v-for="(i, index) in this.deckTypesArray" :id=i.deck @click="toggleDeck(index)">{{i.deck}}<span class="tick">&#10003;</span></button>
    </div>
    <div class="button-row">
	    <button disabled="disabled" id="enable-button" type="button" @click="displaySetup()">Done</button>
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

      // change button enable state if any element in array is enabled
      var butt = document.getElementById("enable-button");
      for (var i = this.deckTypesArray.length - 1; i >= 0; i--) {
        if (this.deckTypesArray[i].enabled) {
          butt.removeAttribute("disabled", "disabled")
          break;
        } else {
          butt.setAttribute("disabled", "disabled")
        }
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
  opacity: 100;
  min-height: 60vh;
  transition: opacity 0.5s linear;
}

.decks-empty {
  opacity: 0;
  min-height: 60vh;
  overflow: hidden;
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
