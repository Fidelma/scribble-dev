<template lang="html">
  <div class="">
    <h1>Draw!</h1>
    <div class="rules">
    <ol>
      <div class="completedStep">
      <li>Drawing prompt! <i class="fa fa-file-text-o" aria-hidden="true"></i></li>
      <p>Write it down on your Post-it in secret.</p>
    </div>
      <li> Scribble it! <i class="fa fa-pencil" aria-hidden="true"></i></li>
      <p>Unleash the artist in you.</p>
      <li>Everyone pass it on! <i class="fa fa-arrow-right" aria-hidden="true"></i></li>
      <p>The player to your right will try to guess what you doodled. </p>
      <li><i class="fa fa-arrow-right" aria-hidden="true"></i><span>&nbsp;</span><i class="fa fa-question-circle-o" aria-hidden="true"></i> Guess the prompt! </li>
      <p>Guess what the player to your left drew, write it down on a blank note and cover the Scribble.</p>
      <li>Everyone pass it on again! <i class="fa fa-arrow-right" aria-hidden="true"></i></li>
      <p>Scribble it on a blank note and cover the prompt.</p>
    </ol>
    <p>Once the scribbles go full circle reveal the drawings and prompts!</p>
    <strong>Funniest wins!</strong>
  </div>
    <div class="button-row">
      <button @click="playAgain()">Play Again!</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'draw',
  methods: {
    playAgain(){
      eventBus.$emit('play-again');
    }
  }
}

</script>

<style lang="css" scoped>

.completedStep {
  color: #aaaaaa;
}

.rules ol {
  list-style-position: outside;
  padding-left: auto;
  padding-right: auto;
  margin-left: 0.5em;
  margin-right: 1em;
  text-align: left;
}
.rules p {
  margin-top: 10px;
  /*padding-bottom: 1em;*/
  padding-top: 0px;
}

li {
  font-size: 22px;
  font-weight: bold;
  /*padding-right: 1em;*/
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
