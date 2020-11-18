<template>
  <div class="container" ref="container">
    <Finder />
    <div v-if="showModal" class="modal">
      <Popup name="modal_2" type=1 width=14 height=5.3 left=45 top=30 background="modal_2" />
    </div>
    <div class="browser-container" ref="browser">
      <div class="header" :class="{'editor': (type == '2'), 'outro': (type == '3')}">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
        <div class="browser_tab"><img class="" src="@/assets/tab.png"></div>
      </div>
      <div class="url"><img class="" src="@/assets/url.png"></div>
      <div class="site_content">
        <vimeo-player class="vimeo-player" ref="player" :video-id="477844508" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
      </div>
    </div>
  </div>
</template>

<script>
// import * as PIXI from 'pixi.js'
// import { GlitchFilter } from '@pixi/filter-glitch'

import Finder from '@/components/Finder.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'TeenVogue',
  components: {
    Finder,
    Popup
  },
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    this.$refs.browser.addEventListener('scroll', this.scrollEvt)
  },
  beforeDestroy() {
    this.$refs.browser.removeEventListener('scroll', this.scrollEvt)
  },
  methods: {
    onReady() {
      this.play()
    },
    play () {
      this.$refs.player.mute()
      this.$refs.player.play()
    },
    pause () {
      this.$refs.player.pause()
    },
    scrollEvt(e) {
      if (this.$refs.browser.scrollHeight - this.$refs.browser.scrollTop === this.$refs.browser.clientHeight) {
        this.pause()
        this.showModal = true
      }
    }
  }
}
</script>

<style>

.container {
  position: relative;
  width: 100%;
  height: 100px;
  overflow-x: hidden;
}

.container.teenvogue {
  background-color: #e1e1e1;
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

.header .url {
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 1;
}

img {
  width: 100%;
  height: auto;
}

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

.browser-container {
  position: fixed;
  width: 65%;
  height: 70%;
  max-width: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, .3);
}

.browser-container .site_content {
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% + 2px);
  left: -2px;
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

.vimeo-player iframe {
   width: 74vw;
   height: 187vw;
   max-height: 3626px;
   min-height: 100vh;
   max-width: 1400px;
}
</style>
