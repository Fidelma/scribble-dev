<template lang="html">
  <div>
    <h1>What you need:</h1>
    <div class="needed">
      <h2><i class="fa fa-sticky-note-o" aria-hidden="true"></i>
 A stack of Post-itⓇ notes.</h2>
      <h2><i class="fa fa-book" aria-hidden="true"></i> Something stiff for each player to draw against.</h2>
      <h2><i class="fa fa-pencil" aria-hidden="true"></i> One pen per player.</h2>
    </div>
    <div>
      <div class="button-row">
      <button type="button" @click="goToHowTo()">How to play</button>
      <button type="button" @click="displaySetup()">Let's Go!</button>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'needed',
  methods: {
    goToHowTo(){
      eventBus.$emit('display-rules', true)
    },
    displaySetup(){
      eventBus.$emit('display-decks', true)
    },
  }
}
</script>

<style lang="css" scoped>

.needed {
  padding: 0px 10px ;
  padding-bottom: 0px;
  text-align: left;
  margin: 20px;
}

</style>
