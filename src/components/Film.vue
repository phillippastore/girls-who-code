<template>
  <transition @enter="enter" appear>
    <div class="container">
    <Finder />
      <div class="video_player">
        <iframe src="https://www.youtube.com/embed/bmA45AMqVK4&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="folders">
        <img src="@/assets/folders.png">
      </div>
      <div class="gradient_background"></div>
    </div>
  </transition>
</template>

<script>
// import { gsap } from 'gsap'
import Popup from '@/components/Popup.vue'
import Finder from '@/components/Finder.vue'

export default {
  name: 'Film',
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
    }
  }
}
</script>

<style>

.header_text {
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 11px;
  left: 0;
  font-size: 14px;
  letter-spacing: .5px;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.gradient_background, .solid_background {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  left: 0px;
  top: 0px;
  background: linear-gradient(-45deg, #173346, #3067d8, #71d2b9, #f7d962);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
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

.header {
  background: #e3e3e3;
  width: 100%;
  height: 35px;
  text-align: left;
  padding-left: 6px;
  border-radius: 6px 6px 0px 0px;
  padding: 7px 12px;
  box-sizing: border-box;
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

.logo {
  position: absolute;
  top: 2%;
  left: 3.5%;
  width: 10%;
}

.generation {
  position: absolute;
  top: 37%;
  left: 30%;
  width: 50%;
}

.browser_tab {
    display: inline-block;
    vertical-align: top;
    height: 36px;
}

.browser_tab img {
    width: auto;
    height: 78%;
}

.url {
  width: 100%;
  height: 35px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.url img {
  height: 35px;
  width: auto;
}

.url_text {
  position: absolute;
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 11px;
  color: #666;
  top: 10px;
  left: 140px;
}

/* img {
  width: 100%;
  height: auto;
} */

.modal-header {
  width: 98%;
  margin-top: 3px;
}

.img-404 {
  width: 65%;
  padding: 0 37%;
}

.content {
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 28px;
  width: 100%;
}

.windows-button {
  box-sizing: border-box;
  border: none;
  background: #c0c0c0;
  box-shadow:
    inset -2px 4px 1px -2px #e1e1e1,
    inset 4px 0px 1px -2px #e1e1e1,
    inset 0px -4px 1px -2px #999999,
    inset -5px 0px 1px -2px #999999;
  border-radius: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 22px;
  min-width: 200px;
  margin: 0 11px;
  padding-top: 7px;
  min-height: 40px;
  color: black;
  text-decoration: none;
}

.browser-container, .video_player iframe {
  z-index: 1;
  position: fixed;
  width: 80vw;
  height: 50.8vw;
  max-width: 1400px;
  max-height: 85vh;
  top: 49%;
  left: 47%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, .3);
}

@media (max-width: 600px) {
  .browser-container, .video_player iframe {
    width: 95vw;
    left: 50%;
  }
}

.browser-container .site_content {
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100%);
  height: calc(100% - 70px);
  position: absolute;
  box-sizing: border-box;
}

canvas {
  width: 100%;
  height: 100%;
}

.vimeo-wrapper {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   pointer-events: none;
   overflow: hidden;
}

.popup {
  z-index: 2 !important;
}

.modal {
  width: 100%;
  height: 100%;
}

iframe {
  width: 79vw;
  height: 46vw;
}

.site_content {
  background-color: #000000 !important;
}

.video_player {
  position: relative;
  z-index: 2;
}

.video_player iframe {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .3);
}
</style>
