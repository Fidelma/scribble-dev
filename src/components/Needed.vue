<template lang="html">
  <div>
    <h1>What you'll need:</h1>
    <div class="needed">
      <h2>1. A stack of Post-itⓇ notes.</h2>
      <h2>2. Something stiff for each player to draw against.</h2>
      <h2>3. One pen per player.</h2>
    </div>
    <div>
      <button type="button" @click="displayRules()">Rules</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'needed',
  methods: {
    displayRules(){
      eventBus.$emit('display-rules', true)
    }
  }
}
</script>

<style lang="css" scoped>

.needed {
  padding-bottom: 0px;
  text-align: left;
  margin: 40px;
}
</style>
