<template lang="html">
  <div class="">

  <button type="button" @click="homeSetup()">Home</button>

  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'navigation',
  methods: {
    homeSetup(){
      eventBus.$emit('home-setup', true)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
