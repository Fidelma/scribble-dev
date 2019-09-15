<template lang="html">
  <div class="">


  <decks v-if="this.displayDecks" :deckTypesArray="deckTypesArray"/>
  <setup v-if="this.displaySetup"/>
  <clues v-if="this.displayClues" :cluesIncluded="cluesIncluded" :players="players"/>
  <draw v-if="this.displayDraw"/>

</div>
</template>

<script>
import Setup from '@/components/Setup.vue'
import Clues from '@/components/Clues.vue'
import Decks from '@/components/Decks.vue'
import Draw from '@/components/Draw.vue'

import { eventBus } from '@/main.js'

export default {

  name: 'game',
  data(){
    return {
      displayDecks: true,
      displaySetup: false,
      displayDraw: false,
      players: null,
      displayClues: false,
      clues: [],
      deckTypesArray: [],
      cluesIncluded: [],
      selectedDecks: []
    }
  },


  mounted(){
    this.loadClues();

    eventBus.$on('display-setup', (chosenDecks) => {
      let toBeSelected = [];
      this.deckTypesArray.forEach(function (deck) {
        if(deck.enabled){
          toBeSelected.push(deck.deck);
        }
      })
      this.selectedDecks = toBeSelected;

      let tempClues = [];
      this.clues.forEach(function(clue) {
        if(toBeSelected.includes(clue.deck)){
          tempClues.push(clue);
        }
      })
      this.cluesIncluded = tempClues;
      this.displaySetup = true;
      this.displayDecks = false;
    })

    eventBus.$on('first-clue', (players) => {
      this.players = players;
      this.displaySetup = false;
      this.displayClues = true;
    })

    eventBus.$on('display-draw', (display) => {
      this.displayClues = false;
      this.displayDraw = display;
    })
  },

  methods: {
    loadClues(){
      fetch('./data/clues.JSON')
      .then(function(response){
        if(response.ok){
          return response.json();
        }
      })
      .then(returnedData => {
       this.clues = returnedData.clueCollection;
       const deckTypes = [];
       const tempDecks = [];
       for(const i in returnedData.clueCollection){
         if(!tempDecks.includes(returnedData.clueCollection[i].deck)){
           const deck = returnedData.clueCollection[i].deck;
           deckTypes.push({deck: deck, enabled: false});
           tempDecks.push(deck);
         }
       }
       this.deckTypesArray = deckTypes;
     });
   }
  },


  components: {
    setup: Setup,
    clues: Clues,
    decks: Decks,
    draw: Draw
  }
}
</script>

<style lang="css" scoped>
</style>
