<template lang="html">
  <div class="">

    <button v-for="i in this.deckTypesArray" name="button">{{i}}</button>




  </div>
</div>

</template>

<script>

export default {
  name: 'decks',
  props: ['deckTypesArray'],

}
</script>

<style lang="css" scoped>
</style>
