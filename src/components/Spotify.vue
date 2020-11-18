<template>
  <div class="container sephora" ref="container">
    <Finder />
    <div v-if="showModal" class="modal">
      <Popup name="modal_6" type=1 width=16 height=5.3 left=45 top=30 background="modal_6" />
    </div>
    <div class="browser-container">
      <div class="header">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
        <div class="browser_tab"><img class="" src="@/assets/tab.png"></div>
      </div>
      <div class="url"><img class="" src="@/assets/url.png"><div class="url_text">spotify.com</div></div>
      <div class="site_content" ref="content">
        <vimeo-player class="vimeo-player" ref="player" :video-id="480359675" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
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
  name: 'Spotify',
  components: {
    Finder,
    Popup
  },
 data() {
    return {
      showModal: false,
      isPlaying: false,
      type: 2
    }
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', this.scrollEvt)
  },
  beforeDestroy() {
    this.$refs.content.removeEventListener('scroll', this.scrollEvt)
  },
  methods: {
    onReady() {
      this.play()
    },
    play () {
      this.$refs.player.mute()
      this.$refs.player.play()
      this.isPlaying = true
    },
    pause () {
      this.$refs.player.pause()
      this.isPlaying = false
    },
    scrollEvt(e) {
      if (this.$refs.content.scrollHeight - this.$refs.content.scrollTop === this.$refs.content.clientHeight) {
        this.pause()
        this.showModal = true
      } else if (!this.isPlaying) {
        this.play()
        this.showModal = false
      }
    }
  }
}
</script>

<style>

.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
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
  background-color: #000000;
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
   width: 116.5vw;
   height: 40vw;
   max-height: 3626px;
   min-height: 40vh;
   max-width: 1180px;
}

.modal {
  width: 100%;
  height: 100%;
}
</style>
