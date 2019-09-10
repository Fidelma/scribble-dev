import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import HowTo from '@/views/HowTo';
import Needed from '@/views/Needed';
import Game from '@/views/Game';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'game',
      component: Game
    },
    {
      path: '/howto',
      name: 'howto',
      component: HowTo,
    },
    {
      path: '/needed',
      name: 'needed',
      component: Needed,
    }
  ]
})
export default router;
