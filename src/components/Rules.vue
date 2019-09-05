<template lang="html">
  <div class="">

  <h2>Rule1</h2>
  <h2>Rule2</h2>
  <h2>Rule3</h2>

  <button type="button" @click="displaySetup()">Let's Go!</button>

</div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'rules',
  methods: {
    displaySetup(){
      eventBus.$emit('display-setup', true)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
