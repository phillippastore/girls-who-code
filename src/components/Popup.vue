<template>
  <div class="popup_wrapper">
    <div v-if="(background == 'them')" class="all_arrows">
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
    </div>
    <div class="popup" :class="name" :style="computedPositioning">
      <div class="header" :class="{'editor': (type == '2')}">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
      </div>
      <div class="window_body" :class="{
        'windowGray': (type == '1'), 
        'windowWhite': (type == '2'), 
        'windowToday': (background == 'today'), 
        'window24': (background == '24'), 
        'windowAll': (background == 'all'),
        'windowCoders': (background == 'coders'),
        'windowAre': (background == 'are'),
        'windowWomen': (background == 'women'),
        'windowWhat': (background == 'what'),
        'windowWould': (background == 'would'),
        'windowThe': (background == 'the'),
        'windowInternet': (background == 'internet'),
        'windowLooklike': (background == 'looklike'),
        'windowWithout': (background == 'without'),
        'windowThem': (background == 'them')
        }" :style="computedWindow" >
        <router-link v-if="(background == 'them')" class="cta" :to="{ name: 'TeenVogue'}">Let's See</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Popup',
  props: {
    name: String,
    width: String,
    height: String,
    left: String,
    top: String,
    type: String,
    background: String
  },
  computed: {
    computedWindow() {
      return {
        '--height': this.height + 'vw'
      }
    },
    computedPositioning() {
      return {
        '--left': this.left + 'vw',
        '--top': this.top + 'vh',
        '--width': this.width + 'vw'
      }
    }
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'TeenVogue' })
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

.popup {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0,0,0,.5);
  width: var(--width);
  left: var(--left);
  top: var(--top);
}

.header {
  background: #e3e3e3;
  width: 100%;
  height: 20px;
  text-align: left;
  padding-left: 6px;
}

.header.editor {
  background-image: url('../assets/headerBar.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 40px;
}

.header_button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: inline-block;
  margin-top: 5px;
}

.red { background-color: #ff0000; }
.yellow { background-color: #ffbe2d; }
.green { background-color: #2acb42; }
    
.window_body {
  height: var(--height);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.windowToday { background-image: url('../assets/today.png');}
.window24 { background-image: url('../assets/24.png');}
.windowAll { background-image: url('../assets/ofall.png');}
.windowCoders { background-image: url('../assets/coders.png');}
.windowAre { background-image: url('../assets/are.png');}
.windowWomen { background-image: url('../assets/women.png');}
.windowWhat { background-image: url('../assets/what.png');}
.windowWould { background-image: url('../assets/would.png');}
.windowThe { background-image: url('../assets/the.png');}
.windowInternet { background-image: url('../assets/internet.png');}
.windowLooklike { background-image: url('../assets/looklike.png');}
.windowWithout { background-image: url('../assets/without.png');}
.windowThem { background-image: url('../assets/them.gif');}
  
.windowGray { background-color: #ececec; }
.windowWhite { background-color: #ffffff; }

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
  width: 23%;
  left: -1%;
  top: 5.5%;
}

@media(min-width:768px) and (max-width:850px) {
  .popup_1 {
    width: 29%;
    left: -1%;
    top: 5.5%;
  }
}

.popup_2 {
  width: 21%;
  left: 14%;
  top: 22.7%;
}

.popup_3 {
  width: 20%;
  left: 27.5%;
  top: 9%;
}

.popup_4 {
  width: 27%;
  left: 39.5%;
  top: 24%;
}

.popup_5 {
  width: 18%;
  left: 57.5%;
  top: 12%;
}

.popup_6 {
  width: 27%;
  left: 73%;
  top: 3%;
}

.popup_7 {
  width: 20%;
  left: 0%;
  top: 51%;
}

.popup_8 {
  width: 17%;
  left: 19%;
  top: 43%;
}

.popup_9 {
  width: 15%;
  left: 30%;
  top: 56%;
}

.popup_10 {
  width: 30%;
  left: 42.4%;
  top: 43%;
}

.popup_11 {
  width: 24%;
  left: 71%;
  top: 37%;
}

.popup_12 {
  width: 20%;
  left: 51%;
  top: 77%;
}

.popup_13 {
  cursor: pointer;
  width: 30%;
  left: 70%;
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

.all_arrows {
  z-index: 1;
  position: absolute;
  width: 30%;
  left: 71.5%;
  top: 65%;
  height: 250px;
  pointer-events: none;
}

.cta {
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: white;
  font-size: 20px;
  padding: 4px 19px;
  border-radius: 6px;
  text-decoration: none;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 1px;
  border: 1px solid #49a2fb;
  background: linear-gradient(0deg, #007bff, #5ac7fa);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1;
}

.cta:hover {
  background: linear-gradient(0deg, #007bff, #64d2ff);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: .8;
}

</style>
