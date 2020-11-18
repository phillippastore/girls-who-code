<template>
  <div class="container netflix" ref="container">
    <Finder />
    <div v-if="showModal" class="modal">
      <Popup name="modal_1" type=1 width=14 height=5.3 left=45 top=30 background="modal_1" />
    </div>
    <div class="browser-container" ref="browser">
      <div class="header">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
        <div class="browser_tab"><img class="" src="@/assets/tab.png"></div>
      </div>
      <div class="url"><img class="" src="@/assets/url.png"><div class="url_text">netflix.com</div></div>
      <div class="site_content">
        <vimeo-player class="vimeo-player" ref="player" :video-id="477225887" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
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
  name: 'Netflix',
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
    setTimeout(() => {
      this.pause()
      this.showModal = true
    }, 8000)
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
    }
  }
}
</script>

<style>

.container {
  position: relative;
  width: 100%;
  height: 259vw;
  max-height: 3626px;
  overflow-x: hidden;
}

.container.netflix {
  background-color: black;
}

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
   width: 100vw;
   height: 259vw;
   max-height: 3626px;
   min-height: 100vh;
   max-width: 1400px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
</style>
