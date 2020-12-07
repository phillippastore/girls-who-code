<template>
  <transition @enter="enter" appear>
    <div class="container">
      <Finder icons="no" />
      <div class="logo">
        <img src="@/assets/GWC_Final-Logo_White.png">
      </div>
      <div class="popup-container">
        <Popup name="popup_1" type=2 width=14 height=9 left=1 top=7.5 background="today" />
        <Popup name="popup_2" type=1 width=13 height=8 left=11.5 top=23.7 background="percentage" />
        <Popup name="popup_3" type=1 width=12.5 height=8.5 left=20.7 top=10.5 background="all" />
        <Popup name="popup_4" type=1 width=16.5 height=6.5 left=29.7 top=25 background="coders" />
        <Popup name="popup_5" type=1 width=11.35 height=7.8 left=41.7 top=13.5 background="are" />
        <Popup name="popup_6" type=2 width=17.35 height=7.6 left=52.7 top=4.6 background="women" />
        <Popup name="popup_7" type=2 width=13.35 height=9 left=1.7 top=53.35 background="what" />
        <Popup name="popup_8" type=1 width=11.35 height=7.3 left=14.7 top=50.35 background="would" />
        <Popup name="popup_9" type=1 width=11 height=7.1 left=22.2 top=64.35 background="the" />
        <Popup name="popup_10" type=2 width=18 height=8.9 left=31.2 top=47.8 background="internet" />
        <Popup name="popup_11" type=1 width=17.35 height=7.4 left=48.3 top=40.35 background="looklike" />
        <Popup name="popup_12" type=1 width=11.35 height=6.5 left=39.2 top=78.2 background="without" />
        <Popup name="popup_13" type=1 width=17.6 height=10.6 left=50.4 top=67.35 background="them" />
      </div>
      <div class="gradient_background"></div>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap'
import Popup from '@/components/Popup.vue'
import Finder from '@/components/Finder.vue'

export default {
  name: 'Intro',
  components: {
    Popup,
    Finder
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!',
      slides: {},
      numSlides: 190
    }
  },
  beforeDestroy() {
    const loader = PIXI.Loader.shared
    loader.reset()
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'TeenVogue' })
      this.$gtag.event('Intro', { method: 'next' })
    },
    enter(el, done) {
      const duration = 0.4
      const yStart = 5
      return gsap.timeline({ onComplete: this.onComplete, delay: 2 })
        .from('.popup_1', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 0)
        .from('.popup_2', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 1.0)
        .from('.popup_3', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 1.2)
        .from('.popup_4', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 1.5)
        .from('.popup_5', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 1.6)
        .from('.popup_6', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 1.7)
        .from('.popup_7', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 3.5)
        .from('.popup_8', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 3.7)
        .from('.popup_9', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 4.0)
        .from('.popup_10', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 4.3)
        .from('.popup_11', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 4.6)
        .from('.popup_12', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 5.0)
        .from('.popup_13', duration, {
          scale: 0,
          y: yStart,
          ease: 'back.out'
        }, 5.5)
        .from('.arrow_2', 0.4, {
          x: -30,
          scale: 0,
          ease: 'back.out'
        }, 7.0)
        .from('.arrow_3', 0.4, {
          x: -5,
          y: -30,
          scale: 0,
          ease: 'back.out'
        }, 7.1)
        .from('.arrow_4', 0.4, {
          x: 5,
          y: -30,
          scale: 0,
          ease: 'back.out'
        }, 7.2)
        .from('.arrow_5', 0.4, {
          x: 30,
          scale: 0,
          ease: 'back.out'
        }, 7.3)
        .from('.arrow_6', 0.4, {
          x: 15,
          y: 25,
          scale: 0,
          ease: 'back.out'
        }, 7.4)
        .from('.arrow_7', 0.4, {
          x: -2,
          y: 25,
          scale: 0,
          ease: 'back.out'
        }, 7.5)
    },
    onComplete() {
      console.log('complete')
      gsap.timeline({ repeat: -1 })
        .to('.arrow_2', 2, { x: '-=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_2', 3, { x: '+=5', rotation: '+=5', ease: 'power.easeinout' })

      gsap.timeline({ repeat: -1 })
        .to('.arrow_3', 3, { y: '-=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_3', 2.2, { y: '+=5', rotation: '+=5', ease: 'power.easeinout' })

      gsap.timeline({ repeat: -1 })
        .to('.arrow_4', 2, { x: '+=5', y: '-=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_4', 2.5, { x: '-=5', y: '+=5', rotation: '+=5', ease: 'power.easeinout' })

      gsap.timeline({ repeat: -1 })
        .to('.arrow_5', 3.2, { x: '+=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_5', 2.8, { x: '-=5', rotation: '+=5', ease: 'power.easeinout' })

      gsap.timeline({ repeat: -1 })
        .to('.arrow_6', 2.7, { x: '+=5', y: '-=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_6', 2.5, { x: '-=5', y: '+=5', rotation: '+=5', ease: 'power.easeinout' })

      gsap.timeline({ repeat: -1 })
        .to('.arrow_7', 3, { x: '+=2', y: '+=5', ease: 'power.easeinout' })
        .to('.arrow_7', 3, { x: '-=2', y: '-=5', ease: 'power.easeinout' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  position: relative;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(-45deg, #173346, #3067d8, #71d2b9, #f7d962);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite; */
}

.gradient_background, .solid_background {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background: linear-gradient(-45deg, #173346, #3067d8, #71d2b9, #f7d962);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.solid_background {
  background: #f9f9f9;
  background-size: 100% 100%;
  animation: none;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.logo {
  position: absolute;
  color: white;
  bottom: 50px;
  left: 80px;
  width: 9%;
  min-width: 15vh;
}

@media(max-width:600px) {
  .logo {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 30%;
    min-width: 10vh;
  }
}

.popup-container {
  position: relative;
  width: 100%;
  max-width: 1350px;
  height: 100%;
  min-height: 750px;;
  margin: 0 auto;
  margin-top: 3rem;
}

.popup {
  position: absolute;
}

.popup_1 {
  width: 25%;
  left: -1%;
  top: 5.5%;
}

.popup_2 {
  width: 23%;
  left: 14%;
  top: 22.7%;
}

.popup_3 {
  width: 22%;
  left: 27.5%;
  top: 9%;
}

.popup_4 {
  width: 29%;
  left: 39.5%;
  top: 24%;
}

.popup_5 {
  width: 20%;
  left: 57.5%;
  top: 12%;
}

.popup_6 {
  width: 29%;
  left: 73%;
  top: 3%;
}

.popup_7 {
  width: 24%;
  left: 0%;
  top: 51%;
}

.popup_8 {
  width: 19%;
  left: 20.5%;
  top: 43%;
}

.popup_9 {
  width: 19%;
  left: 30%;
  top: 63%;
}

.popup_10 {
  width: 30%;
  left: 42.4%;
  top: 46%;
}

.popup_11 {
  width: 30%;
  left: 66%;
  top: 39%;
}

.popup_12 {
  width: 20%;
  left: 54%;
  top: 77%;
}

.popup_13 {
  cursor: pointer;
  width: 31%;
  left: 69%;
  top: 65%;
}

img {
  width: 100%;
  height: auto;
}

.arrow {
  position: absolute;
}

.arrow_1 {
  width: 3%;
  top: 34%;
  left: 3%;
}

.arrow_2 {
  width: 10%;
  top: 66%;
  left: 48%;
  transform: rotate(44deg);
}

.arrow_3 {
  width: 8.4%;
  top: 41%;
  left: 60.3%;
  transform: rotate(117deg);
}

.arrow_4 {
  width: 15%;
  top: 23%;
  left: 81.5%;
  transform: rotate(167deg);
}

.arrow_5 {
  width: 11%;
  top: 54%;
  left: 91.5%;
  transform: rotate(223deg);
}

.arrow_6 {
  width: 16%;
  top: 75%;
  left: 82%;
  transform: rotate(275deg);
}

.arrow_7 {
  width: 10%;
  top: 79%;
  left: 62%;
  transform: rotate(356deg);
}

.cta {
  position: absolute;
  bottom: 61px;
  right: 56px;
  color: white;
  font-size: 20px;
  padding: 4px 19px;
  border-radius: 2px;
  text-decoration: none;
  border-radius: 3px;
  font-family: 'Bebas Neue', cursive;
  border: 1px solid #5856e6;
  background: linear-gradient(0deg, #007bff, #5ac7fa);
}

.cta:hover {
  background: linear-gradient(0deg, #007bff, #64d2ff);
}

</style>
