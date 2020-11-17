import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import TeenVogue from '@/components/TeenVogue'
import Netflix from '@/components/Netflix'
import Sephora from '@/components/Sephora'
import Twitter from '@/components/Twitter'
import Spotify from '@/components/Spotify'
import Adidas from '@/components/Adidas'
import EndSlide from '@/components/EndSlide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/teenvogue',
      name: 'TeenVogue',
      component: TeenVogue
    },
    {
      path: '/netflix',
      name: 'Netflix',
      component: Netflix
    },
    {
      path: '/sephora',
      name: 'Sephora',
      component: Sephora
    },
    {
      path: '/twitter',
      name: 'Twitter',
      component: Twitter
    },
    {
      path: '/adidas',
      name: 'Adidas',
      component: Adidas
    },
    {
      path: '/spotify',
      name: 'Spotify',
      component: Spotify
    },
    {
      path: '/endslide',
      name: 'EndSlide',
      component: EndSlide
    }
  ]
})
