import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import TeenVogue from '@/components/TeenVogue'
import Instagram from '@/components/Instagram'
import Sephora from '@/components/Sephora'
import Twitter from '@/components/Twitter'
import Spotify from '@/components/Spotify'
import Adidas from '@/components/Adidas'
import Info from '@/components/Info'
import Film from '@/components/Film'

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
      path: '/instagram',
      name: 'Instagram',
      component: Instagram
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
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    }
  ]
})
