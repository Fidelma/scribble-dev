<template lang="html">
  <div class="">

  <h1>Scribble</h1>
  <img src="" alt="">
  <button type="button" name="button" @click="startPlay()">PLAY</button>

</div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: "home",
  methods: {
    startPlay(){
      const display = false;
      eventBus.$emit('play-game', display)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
