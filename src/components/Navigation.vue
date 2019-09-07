<template lang="html">
  <div>
  <div class="nav">
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="navlink" @click="homeSetup()">Home</div>
        <div class="navlink" @click="rulesSetup()">Rules</div>
        <div class="by">Fidelma and Filip</div>
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
    homeSetup(){
      eventBus.$emit('home-setup', true);
      this.closeNav();
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "40%";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
}
</script>

<style lang="css" scoped>
.sidenav {
  display: flex;
  flex-direction: column;
  height: 92vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ffff88;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  margin-bottom: -160px;
  text-align:left;
  color: black;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidenav .navlink {
  padding: 8px 8px 8px 20px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  cursor: pointer;

}
.navlink:hover {
  color: black;
  background-color: #eeee88;
}
.sidenav .closebtn {
  position: absolute;
  padding-left: 20px;
  top: 0;
  font-size: 2em;
  cursor: pointer;
}

.hamburger {
  margin: 15px;
  position: absolute;
  font-size: 1.5em;
  cursor: pointer;
}

.by {
  color: gray;
  font-size: 12px;
  text-align: center;
  padding-bottom: 20px;
  margin-top: auto;
  margin-botton: auto;
}
</style>
