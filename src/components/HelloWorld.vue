<template>
  <transition @enter="enter" appear>
    <div class="container">
      <div class="logo">Girls Who Code</div>
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
        <div class="popup popup_13" @click="onClick">
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
      const duration = 0.4
      const yStart = 5
      return gsap.timeline({ onComplete: done })
        .from('.popup_1', duration, {
          opacity: 0,
          y: yStart
        }, 0)
        .from('.popup_2', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_3', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_4', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_5', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_6', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_7', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_8', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_9', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_10', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_11', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_12', duration, {
          opacity: 0,
          y: yStart
        })
        .from('.popup_13', duration, {
          opacity: 0,
          y: yStart
        })
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
  box-shadow: 0px 5px 13px 2px rgba(0,0,0,0.31);
}

.popup_1 {
  width: 20%;
  left: 1%;
  top: 10%;
}

.popup_2 {
  width: 23%;
  left: 20%;
  top: 13%;
}

.popup_3 {
  width: 15%;
  left: 38%;
  top: 3%;
}

.popup_4 {
  width: 17%;
  left: 47.5%;
  top: 16%;
}

.popup_5 {
  width: 15%;
  left: 64%;
  top: 11%;
}

.popup_6 {
  width: 20%;
  left: 78%;
  top: 7%;
}

.popup_7 {
  width: 20%;
  left: 2%;
  top: 47%;
}

.popup_8 {
  width: 16%;
  left: 21%;
  top: 41%;
}

.popup_9 {
  width: 17%;
  left: 31%;
  top: 54%;
}

.popup_10 {
  width: 28%;
  left: 44%;
  top: 39%;
}

.popup_11 {
  width: 18%;
  left: 71%;
  top: 34%;
}

.popup_12 {
  width: 14%;
  left: 55.8%;
  top: 80%;
}

.popup_13 {
  cursor: pointer;
  width: 24%;
  left: 69.4%;
  top: 67%;
}

img {
  width: 100%;
  height: auto;
}
</style>
