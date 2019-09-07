<template lang="html">
  <div class="">

  <h2>Start with a clue</h2>
  <h2>Doodle it</h2>
  <h2>Pass it on</h2>
  <div class="button-row">
    <button type="button" @click="displayNeeded()">What you need</button>
    <button type="button" @click="displayDecks()">Let's Go!</button>
  </div>


</div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'rules',
  methods: {
    displayDecks(){
      eventBus.$emit('display-decks', true)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
