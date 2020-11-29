// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App'
import router from './router'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueGtag from 'vue-gtag'

Vue.use(vueVimeoPlayer)

Vue.use(VueMoment, {
  moment
})

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    md: 1280,
    lg: 2000,
    xl: Infinity
  }
})

Vue.use(VueGtag, {
  config: { id: 'UA-184173915-1' }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
