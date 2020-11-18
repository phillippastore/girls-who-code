<template>
  <div class="popup_wrapper">
    <div v-if="(background == 'them' || background == 'ending')" class="all_arrows" :class="{'ending': (background == 'ending')}">
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
      <div class="header" :class="{'editor': (type == '2'), 'outro': (type == '3')}">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
      </div>
      <div class="window_body" :class="{
        'windowGray': (type == '1'),
        'windowWhite': (type == '2' || type == '3'),
        'windowToday': (background == 'today'),
        'windowPercentage': (background == 'percentage'),
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
        'windowThem': (background == 'them'),
        'windowEnding': (background == 'ending')
        }" :style="computedWindow" >

      <div  v-if="(background == 'modal_1')">
        <img class="modal_image" src="@/assets/alerts/1.png">
        <div class="modal_content">back in the day, women made up almost 40% of the tech workforce. today it’s like a quarter. wtf?</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'TeenVogue'}">Next</router-link>
        </div>
      </div>
      <div  v-if="(background == 'modal_2')">
        <img class="modal_image" src="@/assets/alerts/2.png">
        <div class="modal_content windowGray">“coder” isn’t code for tech bro. This is what women in tech actually look like.</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'Twitter'}">Next</router-link>
        </div>
      </div>
      <div  v-if="(background == 'modal_3')">
        <img class="modal_image" src="@/assets/alerts/3.png">
        <div class="modal_content">coding doesn’t have to be crazy hard like in the movies. start with something small you actually care about.</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'Sephora'}">Next</router-link>
        </div>
      </div>
      <div  v-if="(background == 'modal_4')">
        <img class="modal_image" src="@/assets/alerts/4.png">
        <div class="modal_content">when you’re a girl who codes, you’re not alone. the sisterhood has your back. and so does lizzo.</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'Adidas'}">Next</router-link>
        </div>
      </div>
      <div  v-if="(background == 'modal_5')">
        <img class="modal_image" src="@/assets/alerts/5.png">
        <div class="modal_content">oh, and coding pays. a lot. so if you’re into making money, a career in tech may be for you.</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'Spotify'}">Next</router-link>
        </div>
      </div>
      <div  v-if="(background == 'modal_6')">
        <img class="modal_image" src="@/assets/alerts/6.png">
        <div class="modal_content">in fact, the first-ever programmer was a woman. aka none of this S%$# would even be possible without girls.</div>
        <div class="modal_buttons">
          <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows_button">Learn more</a>
          <router-link class="windows_button" :to="{ name: 'EndSlide'}">Next</router-link>
        </div>
      </div>

        <router-link v-if="(background == 'them')" class="cta" :to="{ name: 'TeenVogue'}">Let's See</router-link>
        <a v-if="(background == 'ending')"  class="cta" href="https://girlswhocode.com/programs/code-at-home" target="_blank">Let's Go</a>
         <div v-if="(background == 'outro3')"  class="text">
            The online resources we use every day exist and work like they should, in part, because of the contributions of women coders.<br><br>
            By learning to code, girls can reach millions of people and impact the world in ways we have, and haven’t yet, seen.<br><br><br>
            <span class="text-small">Start coding at...</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap'

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

.header.outro {
  background-image: url('../assets/popup_outro.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 116px;
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
.windowPercentage { background-image: url('../assets/percentage.png');}
.windowAll { background-image: url('../assets/ofall.png');}
.windowCoders { background-image: url('../assets/coders2.gif');}
.windowAre { background-image: url('../assets/are.png');}
.windowWomen { background-image: url('../assets/women.png');}
.windowWhat { background-image: url('../assets/what.png');}
.windowWould { background-image: url('../assets/would.png');}
.windowThe { background-image: url('../assets/the.png');}
.windowInternet { background-image: url('../assets/internet.png');}
.windowLooklike { background-image: url('../assets/looklike.png');}
.windowWithout { background-image: url('../assets/without.png');}
.windowThem { background-image: url('../assets/them.gif'); background-position: center top;}
.windowEnding { background-image: url('../assets/GWC_Logo_Black_window.png'); background-position: center top;}

.windowGray { background-color: #ececec; }
.windowWhite { background-color: #ffffff; }

.modal_image {
  width: 80px;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding: 2%;
  padding-right: 0%;
}

.modal_content {
  display: inline-block;
  width: 60%;
  padding: 4%;
  padding-left: 3%;
  font-size: 13px;
  line-height: 22px;
  font-weight: bold;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}

.modal_buttons {
  float: right;
  margin-right: 20px;
}

.windows_button {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 12px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  padding: 2px 15px;
  position: relative;
  margin-right: 5px;
  text-decoration: none;
  color: black;
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
/*
@media(max-width:600px) {
  .popup-container {
    overflow: scroll;
  }
} */

.popup {
  position: absolute;
  z-index: 1;
}

.popup_1 {
  width: 300px;
  left: -1%;
  top: 5.5%;
}

.popup_1 .window_body {
  height: 150px;
}

@media(max-width:1300px) {
  .popup_1 {
    width: 200px;
    left: 3%;
    top: 3%;
  }

  .popup_1 .window_body {
    height: 100px;
  }
}

@media(max-width:600px) {
  .popup_1 {
    width: 70vw;
    left: 3%;
    top: 3%;
  }

  .popup_1 .window_body {
    height: 30vw;
  }
}

.popup_2 {
  width: 275px;
  left: 14%;
  top: 22.7%;
}

.popup_2 .window_body {
  height: 130px;
}

@media(max-width:1300px) {
  .popup_2 {
    width: 200px;
    left: 16%;
    top: 15%;
  }

  .popup_2 .window_body {
    height: 100px;
  }
}

@media(max-width:600px) {
  .popup_2 {
    width: 45vw;
    left: 38%;
    top: 19%;
  }

  .popup_2 .window_body {
    height: 22vw;
  }
}
.popup_3 {
  width: 220px;
  left: 27.5%;
  top: 12%;
}

.popup_3 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_3 {
    width: 160px;
    left: 30%;
    top: 7%;
  }

  .popup_3 .window_body {
    height: 80px;
  }
}

@media(max-width:600px) {
  .popup_3 {
    width: 60vw;
    left: 10%;
    top: 30%;
  }

  .popup_3 .window_body {
    height: 26vw;
  }
}

.popup_4 {
  width: 370px;
  left: 39.5%;
  top: 23%;
}

.popup_4 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_4 {
    width: 270px;
    left: 39.5%;
    top: 16%;
  }

  .popup_4 .window_body {
    height: 80px;
  }
}

@media(max-width:600px) {
  .popup_4 {
    width: 65vw;
    left: 15.5%;
    top: 42%;
  }

  .popup_4 .window_body {
    height: 20vw;
  }
}

.popup_5 {
  width: 180px;
  left: 59%;
  top: 15%;
}

.popup_5 .window_body {
  height: 90px;
}

@media(max-width:1300px) {
  .popup_5 {
    width: 150px;
    left: 59%;
    top: 9%;
  }

  .popup_5 .window_body {
    height: 70px;
  }
}

@media(max-width:600px) {
  .popup_5 {
    width: 37vw;
    left: 50%;
    top: 52%;
  }

  .popup_5 .window_body {
    height: 20vw;
  }
}

.popup_6 {
  width: 320px;
  left: 71%;
  top: 3%;
}

.popup_6 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_6 {
    width: 250px;
    left: 73%;
    top: 3%;
  }

  .popup_6 .window_body {
    height: 70px;
  }
}

@media(max-width:600px) {
  .popup_6 {
    width: 80vw;
    left: 10%;
    top: 62%;
  }

  .popup_6 .window_body {
    height: 30vw;
  }
}

.popup_7 {
  width: 280px;
  left: 0%;
  top: 51%;
}

.popup_7 .window_body {
  height: 140px;
}

@media(max-width:1300px) {
  .popup_7 {
    width: 180px;
    left: 2%;
    top: 51%;
  }

  .popup_7 .window_body {
    height: 90px;
  }
}

@media(max-width:600px) {
  .popup_7 {
    width: 60vw;
    left: 3%;
    top: 78%;
  }

  .popup_7 .window_body {
    height: 30vw;
  }
}

.popup_8 {
  width: 240px;
  left: 19%;
  top: 47%;
}

.popup_8 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_8 {
    width: 200px;
    left: 19%;
    top: 47%;
  }

  .popup_8 .window_body {
    height: 80px;
  }
}

@media(max-width:600px) {
  .popup_8 {
    width: 40vw;
    left: 19%;
    top: 94%;
  }

  .popup_8 .window_body {
    height: 23vw;
  }
}

.popup_9 {
  width: 220px;
  left: 30%;
  top: 58%;
}

.popup_9 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_9 {
    width: 150px;
    left: 32%;
    top: 56%;
  }

  .popup_9 .window_body {
    height: 70px;
  }
}

@media(max-width:600px) {
  .popup_9 {
    width: 40vw;
    left: 42%;
    top: 105%;
  }

  .popup_9 .window_body {
    height: 20vw;
  }
}

.popup_10 {
  width: 420px;
  left: 42.4%;
  top: 44%;
}

.popup_10 .window_body {
  height: 150px;
}

@media(max-width:1300px) {
  .popup_10 {
    width: 280px;
    left: 42.4%;
    top: 44%;
  }

  .popup_10 .window_body {
    height: 100px;
  }
}

@media(max-width:600px) {
  .popup_10 {
    width: 85vw;
    left: 5%;
    top: 116%;
  }

  .popup_10 .window_body {
    height: 30vw;
  }
}

.popup_11 {
  width: 320px;
  left: 71%;
  top: 37%;
}

.popup_11 .window_body {
  height: 100px;
}

@media(max-width:1300px) {
  .popup_11 {
    width: 260px;
    left: 69%;
    top: 39%;
  }

  .popup_11 .window_body {
    height: 90px;
  }
}

@media(max-width:600px) {
  .popup_11 {
    width: 70vw;
    left: 15%;
    top: 132%;
  }

  .popup_11 .window_body {
    height: 27vw;
  }
}

.popup_12 {
  width: 270px;
  left: 51%;
  top: 77%;
}

.popup_12 .window_body {
  height: 110px;
}

@media(max-width:1300px) {
  .popup_12 {
    width: 220px;
    left: 44%;
    top: 77%;
  }

  .popup_12 .window_body {
    height: 90px;
  }
}

@media(max-width:600px) {
  .popup_12 {
    width: 60vw;
    left: 10%;
    top: 145%;
  }

  .popup_12 .window_body {
    height: 26vw;
  }
}

.popup_13 {
  cursor: pointer;
  width: 360px;
  left: 70%;
  top: 65%;
}

.popup_13 .window_body {
  height: 180px;
}

@media(max-width:1300px) {
  .popup_13 {
    width: 300px;
    left: 64%;
    top: 65%;
  }

  .popup_13 .window_body {
    height: 170px;
  }
}

@media(max-width:600px) {
  .popup_13 {
    width: 90vw;
    left: 5%;
    top: 158%;
    margin-bottom: 30vw;
  }

  .popup_13 .window_body {
    height: 50vw;
  }
}

.popup_14 {
  cursor: pointer;
  width: 360px;
  left: 70%;
  top: 65%;
}

.popup_14 .window_body {
  height: 200px;
}

@media(max-width:1250px) {
  .popup_14 {
    width: 300px;
    left: 55%;
    top: 53%;
  }

  .popup_14 .window_body {
    height: 170px;
  }
}

@media(max-width:640px) {
  .popup_14 {
    width: 200px;
    left: 32%;
    top: 48%;
    margin-bottom: 30vw;
  }

  .popup_14 .window_body {
    height: 160px;
  }
}

.popup_15 {
  cursor: pointer;
  width: 944px;
  left: 2%;
  top: 11%;
}

.popup_15 .window_body {
  height: 615px;
}

@media(max-width:1250px) {
  .popup_15 {
    width: 644px;
    left: 2%;
    top: 11%;
  }

  .popup_15 .window_body {
    height: 415px;
  }
}

@media(max-width:800px) {
  .popup_15 {
    width: 400px;
    left: 2%;
    top: 11%;
    margin-bottom: 30vw;
  }

  .popup_15 .window_body {
    height: 400px;
  }
}

@media(max-width:640px) {
  .popup_15 {
    width: 280px;
    top: 8%;
  }

  .popup_15 .window_body {
    height: 250px;
  }
}

.popup_16 {
  cursor: pointer;
  width: 944px;
  left: 3.5%;
  top: 9%;
}

.popup_16 .window_body {
  height: 615px;
}

@media(max-width:1250px) {
  .popup_16 {
    width: 644px;
    left: 3.5%;
    top: 9%;
  }

  .popup_16 .window_body {
    height: 415px;
  }
}

@media(max-width:800px) {
  .popup_16 {
    width: 400px;
    left: 3.5%;
    top: 9%;
    margin-bottom: 30vw;
  }

  .popup_16 .window_body {
    height: 400px;
  }
}

@media(max-width:640px) {
  .popup_16 {
    width: 280px;
    top: 5%;
  }

  .popup_16 .window_body {
    height: 250px;
  }
}

.popup_17 {
  cursor: pointer;
  width: 944px;
  left: 5%;
  top: 7%;
}

.popup_17 .window_body {
  height: 615px;
}

@media(max-width:1250px) {
  .popup_17 {
    width: 644px;
    left: 5%;
    top: 7%;
  }

  .popup_17 .window_body {
    height: 415px;
  }
}

@media(max-width:800px) {
  .popup_17 {
    width: 400px;
    left: 5%;
    top: 7%;
    margin-bottom: 30vw;
  }

  .popup_17 .window_body {
    height: 400px;
  }
}

@media(max-width:640px) {
  .popup_17 {
    width: 280px;
    left: 5%;
    top: 2%;
    margin-bottom: 30vw;
  }

  .popup_17 .window_body {
    height: 250px;
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
  width: 10%;
  top: 36%;
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
  z-index: 2;
  position: absolute;
  width: 30%;
  left: 68%;
  top: 65%;
  height: 250px;
  pointer-events: none;
}

.all_arrows.ending {
  left: 61%;
  top: 66.5%;
}

@media(max-width:1250px) {
  .all_arrows.ending {
    left: 44.5%;
    top: 51.5%;
  }
}

@media(max-width:800px) {
  .all_arrows.ending {
    left: -19.5%;
    top: 41.5%;
  }
}

.all_arrows.ending .arrow_3,
.all_arrows.ending .arrow_4 {
  display: none;
}

@media(max-width:1300px) {
  .all_arrows {
    width: 300px;
    left: 63%;
    top: 65%;
    height: 250px;
  }
}

@media(max-width:640px) {
  .all_arrows {
    width: 100vw;
    left: -5vw;
    top: 155%;
    height: 80vw;
  }
}

@media(max-width:600px) {
  .all_arrows.ending {
    left: -12.5%;
    top: 43.5%;
  }
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

.windowEnding .cta {
  right: 35%;
}

@media(max-width:640px) {
  .windowEnding .cta {
    right: 25%;
  }
}

.text {
  color: #060606;
  position: absolute;
  top: 22%;
  width: 80%;
  left: 10%;
  font-size: 2.2rem;
  text-align: left;
}

@media(max-width:1250px) {
  .text {
    top: 27%;
    font-size: 1.4rem;
  }
}

@media(max-width:800px) {
  .text {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
}

@media(max-width:640px) {
  .text {
    top: 35%;
    font-size: .8rem;
    line-height: .9rem;
  }
}

.text-small {
  font-size: 1.6rem;
}

@media(max-width:1300px) {
  .text-small {
    font-size: 1.3rem;
  }
}

@media(max-width:800px) {
  .text-small {
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
}

@media(max-width:640px) {
  .text-small {
    font-size: .8rem;
    line-height: .9rem;
  }
}

.modal_2 {
  background-color: #ececec;
}

</style>
