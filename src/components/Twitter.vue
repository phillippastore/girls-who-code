<template>
  <div class="container twitter" ref="container">
    <div v-if="showModal" class="modal">
      <img class="modal-header" src="@/assets/modal-header.png">
      <img class="img-404" src="@/assets/404.png">
      <div class="content">
        THE FIRST EVER PROGRAMMER<br>WAS A WOMAN.<br><br>AKA NONE OF THIS S%$# WOULD EVEN<br>BE POSSIBLE WITHOUT GIRLS.
      </div>
      <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows-button">LEARN MORE</a>
      <router-link class="windows-button" :to="{ name: 'EndSlide'}">NEXT</router-link>
    </div>
    <vimeo-player class="vimeo-player" ref="player" :video-id="477845965" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
  </div>
</template>

<script>
// import * as PIXI from 'pixi.js'
// import { GlitchFilter } from '@pixi/filter-glitch'

export default {
  name: 'TeenVogue',
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

.container.twitter {
  background-color: white;
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

.modal {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 500px;
  z-index: 2;
  background-color: black;
  box-shadow:
    inset -2px 4px 1px -2px #999999,
    inset 0px 0px 1px 1px #000000,
    inset 0px -4px 1px -2px #999999,
    inset -5px 0px 1px -2px #999999;
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
