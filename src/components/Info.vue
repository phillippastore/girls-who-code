<template>
  <transition @enter="enter" appear>
    <div class="container">
    <Finder />
      <div class="popup-container">
        <Popup name="popup_15" type=3 width=17.6 height=10.6 left=50.4 top=67.35 background="outro1" />
        <Popup name="popup_16" type=3 width=17.6 height=10.6 left=50.4 top=67.35 background="outro2" />
        <Popup name="popup_17" type=3 width=17.6 height=10.6 left=50.4 top=67.35 background="outro3" />
        <Popup name="popup_14" type=1 width=17.6 height=10.6 left=50.4 top=67.35 background="ending" />
      </div>
      <div class="folders">
        <img src="@/assets/folders.png">
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
  name: 'Info',
  components: {
    Popup,
    Finder
  },
  mounted() {
    console.log(this.$mq)
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'TeenVogue' })
    },
    enter(el, done) {
      const duration = 0.4
      const yStart = 40
      const xStart = -30
      return gsap.timeline({ onComplete: this.onComplete })
        .from('.popup_15', duration, {
          opacity: 0,
          scale: 0.95,
          y: yStart,
          x: xStart,
          ease: 'back.out'
        }, 1)
        .from('.popup_16', duration, {
          opacity: 0,
          scale: 0.95,
          y: yStart,
          x: xStart,
          ease: 'back.out'
        })
        .from('.popup_17', duration, {
          opacity: 0,
          scale: 0.95,
          y: yStart,
          x: xStart,
          ease: 'back.out'
        })
        .from('.popup_14', 0.4, {
          scale: 0,
          y: yStart,
          x: xStart,
          ease: 'back.out'
        })
        .from('.arrow_2', 0.4, {
          x: -30,
          scale: 0,
          ease: 'back.out'
        }, 3)
        .from('.arrow_5', 0.4, {
          x: 30,
          scale: 0,
          ease: 'back.out'
        }, 3.1)
        .from('.arrow_6', 0.4, {
          x: 15,
          y: 25,
          scale: 0,
          ease: 'back.out'
        }, 3.2)
        .from('.arrow_7', 0.4, {
          x: -2,
          y: 25,
          scale: 0,
          ease: 'back.out'
        }, 3.3)
    },
    onComplete() {
      gsap.timeline({ repeat: -1 })
        .to('.arrow_2', 2, { x: '-=5', rotation: '-=5', ease: 'power.easeinout' })
        .to('.arrow_2', 3, { x: '+=5', rotation: '+=5', ease: 'power.easeinout' })

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
  width: 42%;
  top: 26%;
  left: 27%;
}

.popup-container {
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  min-height: 750px;;
  margin: 0 auto;
}

.popup {
  position: absolute;
}

.popup_1 {
  width: 76%;
  left: 0.5%;
  top: 3%;
}

.popup_2 {
  width: 76%;
  left: 2%;
  top: 1%;
}

.popup_3 {
  width: 76%;
  left: 3.5%;
  top: -1%;
}

.popup_4 {
  width: 30%;
  left: 70%;
  top: 54.8%;
}

.text {
  color: #060606;
  position: absolute;
  top: 27%;
  width: 80%;
  left: 10%;
  font-size: 2.2rem;
  text-align: left;
}

@media(max-width:1100px) {
  .text {
    font-size: 2rem;
  }
}

.text-small {
  font-size: 2.15vw;
}

.folders {
  position: absolute;
  width: 5%;
  right: 4%;
  top: 11%;
  z-index: 0;
}

@media(max-width:1250px) {
  .folders {
    width: 7%;
  }
}

@media(max-width:800px) {
  .folders {
    width: 11%;
  }
}

img {
  width: 100%;
  height: auto;
}

.arrow {
  position: absolute;
}

.arrow_1 {
  width: 12%;
  top: 43%;
  left: 69.5%;
  transform: rotate(212deg);
}

.arrow_2 {
  width: 15%;
  top: 74%;
  left: 56.5%;
  transform: rotate(281deg);
}

.arrow_3 {
  width: 11%;
  top: 79%;
  left: 37%;
  transform: rotate(338deg);
}

.arrow_4 {
  width: 13%;
  top: 51%;
  left: 18%;
  transform: rotate(55deg);
}

.cta {
  position: absolute;
  bottom: 32%;
  left: 40%;
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
