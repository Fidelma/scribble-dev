<template lang="html">
  <div class="">

  <h1>How many playing?</h1>
  <div class="selector">
  <button type="button" @click="removePlayer()">-</button>
  <div class="">
    <p>{{this.players}}</p>
  </div>
  <button type="button" @click="addPlayer()">+</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'setup',
  data(){
    return {
      players: 2
    }
  },
  methods: {
    addPlayer(){
      if (this.players < 12){
        this.players += 1;
      }
    },

    removePlayer(){
      if(this.players > 2){
        this.players -= 1
      }
    }
  }
}
</script>

<style lang="css" scoped>

.selector {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

</style>
