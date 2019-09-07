<template lang="html">
  <div>
    <h1>What you'll need:</h1>
    <div class="needed">
      <ol>
        <li>A stack of Post-itⓇ notes.</li>
        <li>Something stiff for each player to draw against.</li>
        <li>One pen per player.</li>
      </ol>
    </div>
    <div>
      <div class="button-row">
      <button type="button" @click="displayRules()">How to play</button>
      </div>
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
  margin: 20px;
}

.needed ol {
  list-style-position: outside;
}

li {
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 1em;
}

</style>
