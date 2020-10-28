import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TeenVogue from '@/components/TeenVogue'
import Netflix from '@/components/Netflix'
import EndSlide from '@/components/EndSlide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/endslide',
      name: 'EndSlide',
      component: EndSlide
    }
  ]
})
