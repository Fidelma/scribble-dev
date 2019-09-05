<template lang="html">
  <div class="">

  <h2>A stack of post-it notes</h2>
  <h2>Something hard to lean against x number of players</h2>
  <h2>pencils or pens x number of players</h2>
  <button type="button" @click="displayRules()">Rules</button>

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
</style>
