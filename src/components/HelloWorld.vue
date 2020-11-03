<template>
  <transition @enter="enter" appear>
    <div class="container">
      <div class="logo">
        <img src="@/assets/GWC_Final-Logo_White.png">
      </div>
      <div class="popup-container">
        <div class="popup popup_1">
          <img src="@/assets/popup_1.png">
        </div>
        <div class="popup popup_2">
          <img src="@/assets/popup_2.png">
        </div>
        <div class="popup popup_3">
          <img src="@/assets/popup_3.png">
        </div>
        <div class="popup popup_4">
          <img src="@/assets/popup_4.png">
        </div>
        <div class="popup popup_5">
          <img src="@/assets/popup_5.png">
        </div>
        <div class="popup popup_6">
          <img src="@/assets/popup_6.png">
        </div>
        <div class="popup popup_7">
          <img src="@/assets/popup_7.png">
        </div>
        <div class="popup popup_8">
          <img src="@/assets/popup_8.png">
        </div>
        <div class="popup popup_9">
          <img src="@/assets/popup_9.png">
        </div>
        <div class="popup popup_10">
          <img src="@/assets/popup_10.png">
        </div>
        <div class="popup popup_11">
          <img src="@/assets/popup_11.png">
        </div>
        <div class="popup popup_12">
          <img src="@/assets/popup_12.png">
        </div>
        <div class="popup popup_13">
          <div class="arrow arrow_2">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_3">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_4">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_5">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_6">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_7">
            <img src="@/assets/mouse_1.png">
          </div>
          <router-link class="cta" :to="{ name: 'Netflix'}">Let's See</router-link>
          <img src="@/assets/popup_13.png">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!'
    }
  },
  mounted() {
    console.log(this.$mq)
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'TeenVogue' })
    },
    enter(el, done) {
      const duration = 0.8
      const yStart = 5
      return gsap.timeline({ onComplete: this.onComplete, delay: 2 })
        .from('.popup_1', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 0)
        .from('.popup_2', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 0.4)
        .from('.popup_3', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 0.7)
        .from('.popup_4', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 1.1)
        .from('.popup_5', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 1.3)
        .from('.popup_6', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 1.6)
        .from('.popup_7', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 2)
        .from('.popup_8', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 2.2)
        .from('.popup_9', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 2.5)
        .from('.popup_10', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 2.8)
        .from('.popup_11', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 3.1)
        .from('.popup_12', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 3.5)
        .from('.popup_13', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 4)
        .from('.arrow_2', 0.4, {
          x: -30,
          scale: 0,
          ease: 'elastic.out'
        }, 4.5)
        .from('.arrow_3', 0.4, {
          x: -5,
          y: -30,
          scale: 0,
          ease: 'elastic.out'
        }, 4.7)
        .from('.arrow_4', 0.4, {
          x: 5,
          y: -30,
          scale: 0,
          ease: 'elastic.out'
        }, 4.9)
        .from('.arrow_5', 0.4, {
          x: 30,
          scale: 0,
          ease: 'elastic.out'
        }, 5.1)
        .from('.arrow_6', 0.4, {
          x: 15,
          y: 25,
          scale: 0,
          ease: 'elastic.out'
        }, 5.3)
        .from('.arrow_7', 0.4, {
          x: -2,
          y: 25,
          scale: 0,
          ease: 'elastic.out'
        }, 5.5)
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
}

.popup-container {
  position: relative;
  width: 100%;
  max-width: 1350px;
  height: 100%;
  min-height: 750px;;
  margin: 0 auto;
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
  width: 20%;
  left: 18.5%;
  top: 49%;
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
