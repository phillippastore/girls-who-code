<template>
  <div class="container" ref="container">
    <div class="logo">
      <img src="@/assets/teen-vogue-logo.png">
    </div>
    <div class="generation">
      <img src="@/assets/teenvogue_generation.png">
    </div>
    <div v-if="showModal" class="modal">
      <img class="modal-header" src="@/assets/modal-header.png">
      <img class="img-404" src="@/assets/404.png">
      <div class="content">
        THE FIRST EVER PROGRAMMER<br>WAS A WOMAN.<br><br>AKA NONE OF THIS S%$# WOULD EVEN<br>BE POSSIBLE WITHOUT GIRLS.
      </div>
      <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows-button">LEARN MORE</a>
      <router-link class="windows-button" :to="{ name: 'Netflix'}">NEXT</router-link>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import { GlitchFilter } from '@pixi/filter-glitch'
import { gsap } from 'gsap'

export default {
  name: 'TeenVogue',
  data() {
    return {
      pixi: null,
      bg: null,
      showModal: false
    }
  },
  mounted() {
    // Start PIXI and animate the background with the glitch filter
    this.pixi = new PIXI.Application({
      resolution: devicePixelRatio
    })
    this.$refs.container.appendChild(this.pixi.view)
    this.bg = PIXI.Sprite.from(require('@/assets/BG_TeenVogue.jpg'))
    this.pixi.stage.addChild(this.bg)

    const glitchFilter = new GlitchFilter({
      fillMode: 1,
      offset: 10
    })

    this.bg.filters = [glitchFilter]

    this.pixi.ticker.add(() => {
      glitchFilter.slices = Math.floor(Math.random() * 4)
    })

    window.addEventListener('resize', this.resize)
    this.$nextTick(() => this.resize())

    // Animate the logo and teen vogue generation text
    gsap.timeline({ repeat: -1 })
      .to('.logo', 1.2, { rotation: 15, ease: 'power.easeinout', transformOrigin: 'top left' })
      .to('.logo', 1.5, { rotation: 0, ease: 'power.easeinout' })
      .to('.logo', 0.9, { rotation: 38, ease: 'power.easeinout' })
      .to('.logo', 2.1, { rotation: -10, ease: 'power.easeinout' })

    gsap.timeline({ repeat: -1 })
      .to('.generation', 1.4, { rotation: 20, ease: 'power.easeinout', transformOrigin: 'top left' })
      .to('.generation', 0.4, { rotation: 10, ease: 'power.easeinout' })
      .to('.generation', 0.9, { rotation: 38, ease: 'power.easeinout' })
      .to('.generation', 0.3, { rotation: -10, ease: 'power.easeinout' })
      .to('.generation', 0.6, { rotation: -5, ease: 'power.easeinout' })
      .to('.generation', 0.4, { rotation: -12, ease: 'power.easeinout' })

    // Timeout to show the modal
    setTimeout(() => {
      this.showModal = true
    }, 10000)
  },
  destroy() {
    window.removeEventListener('resize', this.resize)
    this.pixi = null
  },
  methods: {
    resize() {
      // Resize the renderer
      this.pixi.renderer.resize(window.innerWidth, window.innerHeight)
      var scale = Math.max(window.innerWidth / this.bg.texture.width, window.innerHeight / this.bg.texture.height)
      this.bg.scale.set(scale, scale)
      this.bg.x = 0
      this.bg.y = 0
    }
  }
}
</script>

<style scoped>

.container {
  position: relative;
  width: 100%;
  height: 100%;
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
</style>
