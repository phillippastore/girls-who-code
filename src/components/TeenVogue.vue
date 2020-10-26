<template>
 <div class="container" ref="container">
   <div class="logo">Girls Who Code</div>
   <router-link class="cta" :to="{ name: 'Netflix'}">Next</router-link>
 </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import { GlitchFilter } from '@pixi/filter-glitch'

export default {
  name: 'TeenVogue',
  data() {
    return {
      pixi: null
    }
  },
  mounted() {
    this.pixi = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio
    })
    this.$refs.container.appendChild(this.pixi.view)
    const bg = PIXI.Sprite.from('/static/img/glitch.6138e6b.png')

    bg.anchor.set(0)
    bg.x = this.pixi.screen.width
    bg.y = 0
    bg.alpha = 0.6

    this.pixi.stage.addChild(bg)

    const glitchFilter = new GlitchFilter()

    bg.filters = [glitchFilter]

    this.pixi.ticker.add(() => {
      glitchFilter.slices = Math.floor(Math.random() * 4)
    })

    window.addEventListener('resize', this.resize)
    this.resize()
  },
  destroy() {
    window.removeEventListener('resize', this.resize)
    this.pixi = null
  },
  methods: {
    resize() {
      // Resize the renderer
      this.pixi.renderer.resize(window.innerWidth, window.innerHeight)
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
  color: white;
  bottom: 50px;
  left: 80px;
}

img {
  width: 100%;
  height: auto;
}

.cta {
  position: absolute;
  bottom: 50px;
  right: 80px;
  color: white;
  background-color: blue;
  padding: 10px 30px;
  border-radius: 2px;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
