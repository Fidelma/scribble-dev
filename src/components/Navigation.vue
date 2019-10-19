<template lang="html">
  <div>
  <div class="nav">
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&#10799;</a>

        <div class="navlink" @click="closeNav()">
          <router-link :to="{ name: 'home'}">Home</router-link>
        </div>

        <div class="navlink" @click="closeNav()">
          <router-link :to="{ name: 'needed' }">What&nbsp;you&nbsp;need</router-link>
        </div>

        <div class="navlink" @click="closeNav()">
          <router-link :to="{ name: 'howto'}">How&nbsp;To&nbsp;Play</router-link>
        </div>

        <div class="navlink" @click="resetPlay()">
          <router-link :to="{ name: 'game'}">Play</router-link>
        </div>

        <div class="adult" id="adult-mode-button" @click="toggleAdult()">
           Adult mode enabled
        </div>

        <div class="by">By&nbsp;<a href="">Fidelma</a>&nbsp;&&nbsp;<a href="https://kaklin.github.io/">Filip</a></div>
      </div>
  </div>
    <span class="hamburger" @click="openNav()">&#9776;</span>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'navigation',
  methods: {

    openNav() {
      document.getElementById("mySidenav").style.width = "9em";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    resetPlay(){
      this.closeNav();
      eventBus.$emit('reset-play', true);
    },
    toggleAdult(){
      eventBus.$emit('toggle-adult');

      let elem = document.getElementById("adult-mode-button")
      // modify text color on click
      // modify back on another click.
      if (window.getComputedStyle(elem).color == "rgb(255, 255, 170)") {
        document.getElementById("adult-mode-button").style.color = "black";
      } else {
        document.getElementById("adult-mode-button").style.color = "rgb(255, 255, 170)";
      }
    }
  }
}
</script>

<style lang="css" scoped>
.sidenav {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 10px;
  background-color: #ffffaa;
  overflow-x: hidden;
  transition: 0.5s;
  /*padding-top: 60px;*/
  /*margin-bottom: -160px;*/
  text-align:left;
  color: black;
}
.sidenav a {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  text-decoration: none;
  font-size: 1em;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidenav .navlink {
  padding: 8px 8px 12px 20px;
  text-decoration: none;
  font-size: 1em;
  /*display: block;*/
  transition: 0.3s;
  cursor: pointer;

}
.navlink:hover {
  color: black;
  background-color: #eeee88;
}
.sidenav .closebtn {
  /*position: absolute;*/
  padding-left: 20px;
  top: 0;
  font-size: 1em;
  cursor: pointer;
}

.closebtn:hover {

}

.adult {
  padding: 8px 8px 12px 20px;
  height: 2em;
  color: #ffffaa;
  margin-top: auto;
  margin-botton: auto;
  cursor: pointer;

}

.hamburger {
  margin: 20px;
  position: absolute;
  font-size: 1em;
  cursor: pointer;
}

.by {
  color: gray;
  font-size: 0.7em;
  text-align: left;
  padding-bottom: 1.5em;
  padding-left: 1em;
  padding-right: auto;
  margin-top: 1em;
  /*margin-top: auto;*/
  margin-botton: auto;
}
.by > a {
  color: gray;
  text-decoration: underline;
  display: inline;
  padding: 0;
}
</style>
