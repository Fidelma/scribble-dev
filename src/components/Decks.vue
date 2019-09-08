<template lang="html">
  <div class="">
  	<h1>Pick your prompts</h1>
	<div class="decks">
    <button v-for="i in this.deckTypesArray" name="button">{{i}}</button>
    </div>
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
.decks {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.decks > button {
	font-size: 28px;
	text-align: center;
	padding-left: auto;
	padding-right: auto;
	margin: 10px;
	min-width: 6em;
	height: 6em;
}
</style>
