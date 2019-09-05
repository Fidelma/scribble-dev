<template lang="html">
  <div class="">

  <h1>Scribble</h1>
  <img src="" alt="">
  <div class="postit"></div>
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
.postit {
animation: postit-spin infinite 0.5s ease-in-out;
/*animation-iteration-count: 3;*/
animation-direction: alternate;

line-height: 1;
text-align:center;     
width: 275px;    
margin: 45px;    
min-height:200px;
max-height:200px;
padding-top:35px;
position:relative;   
border:1px solid #E8E8E8;  
border-top:60px solid #fdfd86;
font-family:'Reenie Beanie';    
font-size:22px;      
border-bottom-right-radius: 60px 5px;
display:inline-block;    
 background: #ffff88; /* Old browsers */
background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
transform: rotate(-3deg);
  box-shadow:3px 5px 5px rgba(0, 0, 0, 0.40);
}

@keyframes postit-spin {
  0% {transform: rotate(-3deg);}
  50% {transform: rotate(3deg);}
  100% {transform: rotate(-3deg);}
}
</style>
