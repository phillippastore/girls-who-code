<template>
  <div class="container" ref="container">
    <div v-if="showModal" class="modal">
      <img class="modal-header" src="@/assets/modal-header.png">
      <img class="img-404" src="@/assets/404.png">
      <div class="content">
        THE FIRST EVER PROGRAMMER<br>WAS A WOMAN.<br><br>AKA NONE OF THIS S%$# WOULD EVEN<br>BE POSSIBLE WITHOUT GIRLS.
      </div>
      <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" class="windows-button">LEARN MORE</a>
      <router-link class="windows-button" :to="{ name: 'EndSlide'}">NEXT</router-link>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
// import { GlitchFilter } from '@pixi/filter-glitch'

export default {
  name: 'TeenVogue',
  data() {
    return {
      pixi: null,
      bg: null,
      showModal: false,
      slides: {},
      numSlides: 190,
      currentIndex: 0,
      counter: 0
    }
  },
  mounted() {
    // Start PIXI and animate the background with the glitch filter
    this.pixi = new PIXI.Application()
    this.$refs.container.appendChild(this.pixi.view)

    if (PIXI.utils.TextureCache['teenvogue']) {
      this.bg = new PIXI.Sprite(PIXI.utils.TextureCache['teenvogue'])
      this.init()
    } else {
      const loader = PIXI.Loader.shared

      for (var i = 0; i < this.numSlides; i++) {
        var num = 0
        if (i < 10) {
          num = `0000${i}`
        } else if (i < 100) {
          num = `000${i}`
        } else {
          num = `00${i}`
        }
        loader.add(`netflix_${i}`, require(`@/assets/NetflixCompressed30/Netflix Final_2_${num}.jpg`))
      }

      loader.load((loader, resources) => {
        for (var i = 0; i < this.numSlides; i++) {
          this.slides[`slide_${i}`] = new PIXI.Sprite(resources[`netflix_${i}`].texture)
        }
      })

      loader.onLoad.add(() => {
        console.log('added')
      })

      loader.onComplete.add(() => {
        this.init()
      })
    }
  },
  destroy() {
    window.removeEventListener('resize', this.resize)
    this.pixi.destroy()
    PIXI.Texture.removeTextureFromCache('teenvogue').destroy(true)
  },
  methods: {
    init() {
      this.pixi.stage.addChild(this.slides['slide_0'])

      /*
      const glitchFilter = new GlitchFilter({
        fillMode: 1,
        offset: 10
      })
      this.bg.filters = [glitchFilter]
      */

      this.pixi.ticker.speed = 0.2

      this.pixi.ticker.add(time => {
        this.counter += time
        if (this.counter > 1) {
          this.pixi.stage.removeChild(this.slides[`slide_${this.currentIndex}`])
          this.currentIndex = this.currentIndex < this.numSlides - 1 ? this.currentIndex + 1 : 0
          const slide = this.slides[`slide_${this.currentIndex}`]
          slide.width = window.innerWidth
          slide.height = window.innerWidth * 2.59
          this.pixi.stage.addChild(slide)
          this.counter = 0
        }
      })

      // Timeout to show the modal
      setTimeout(() => {
        this.showModal = true
      }, 20000)

      window.addEventListener('resize', this.resize)
      this.resize()
    },
    resize() {
      const width = window.innerWidth
      const height = width * 2.59
      this.pixi.renderer.resize(width, height)
    }
  }
}
</script>

<style scoped>

.container {
  position: relative;
  width: 100%;
  height: calc(100vw * 2.59);
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
