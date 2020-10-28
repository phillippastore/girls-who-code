<template>
  <transition @enter="enter" appear>
    <div class="container">
      <div class="popup-container">
        <div class="popup popup_1">
          <img src="@/assets/popup_outro.png">
        </div>
        <div class="popup popup_2">
          <img src="@/assets/popup_outro.png">
        </div>
        <div class="popup popup_3">
            <div class="text">
              The online resources we use every day exist and work like they should, in part, because of the contributions of women coders.<br><br>
              By learning to code, girls can reach millions of people and impact the world in ways we have, and haven’t yet, seen.<br><br><br>
              <span class="text-small">Learn more, get involved, and get a girl coding at</span>
          </div>
          <img src="@/assets/popup_outro.png">
        </div>
        <div class="popup popup_4">
          <div class="arrow arrow_1">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_2">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_3">
            <img src="@/assets/mouse_1.png">
          </div>
          <div class="arrow arrow_4">
            <img src="@/assets/mouse_1.png">
          </div>
          <img class="logo" src="@/assets/GWC_Logo_Black.png">
          <img src="@/assets/popup_outro_2.png">
          <a class="cta" href="https://www.girlswhocode.com" target="_blank">Let's Go</a>
        </div>
      </div>
      <div class="folders">
        <img src="@/assets/folders.png">
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
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        }, 0)
        .from('.popup_2', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        })
        .from('.popup_3', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
        })
        .from('.popup_4', duration, {
          scale: 0,
          y: yStart,
          ease: 'bounce.out'
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
  font-size: 2.5vw;
  text-align: left;
}

.text-small {
  font-size: 2.15vw;
}

.folders {
  position: absolute;
  width: 5%;
  right: 4%;
  top: 11%;
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
