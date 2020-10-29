<template>
 <div class="container" ref="container">
   <div class="logo">Girls Who Code</div>
   <router-link class="cta" :to="{ name: 'EndSlide'}">Next</router-link>
   <canvas ref="canvas"></canvas>
 </div>
</template>

<script>
import * as Matter from 'matter-js'

export default {
  name: 'Netflix',
  data() {
    return {
      world: null,
      bodies: null,
      engine: null,
      ground: null,
      ceil: null,
      leftwall: null,
      rightwall: null
    }
  },
  mounted() {
    console.log(this.$mq)
    window.addEventListener('resize', this.resize)
    this.init()
  },
  destroy() {
    this.engine.events = {}
    Matter.World.clear(this.engine.world)
    Matter.Engine.clear(this.engine)
  },
  methods: {
    resize() {
      this.init()
    },
    init() {
      const width = window.innerWidth
      const height = window.innerHeight
      const Engine = Matter.Engine
      const Render = Matter.Render
      this.world = Matter.World
      this.bodies = Matter.Bodies
      this.engine = Engine.create()
      var render = Render.create({
        canvas: this.$refs.canvas,
        engine: this.engine,
        options: {
          width: width,
          height: height,
          wireframes: false
        }
      })
      this.engine.events = {}
      Matter.World.clear(this.engine.world)
      Matter.Engine.clear(this.engine)
      const boxA = this.bodies.rectangle(400, 200, 80, 80)
      const ballA = this.bodies.circle(380, 100, 40, 10)
      const ballB = this.bodies.circle(460, 10, 40, 10)
      this.ground = this.bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true })
      this.ceil = this.bodies.rectangle(width / 2, -25, width, 50, { isStatic: true })
      this.leftwall = this.bodies.rectangle(-25, height / 2, 50, height, { isStatic: true })
      this.rightwall = this.bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true })
      this.world.add(this.engine.world, [boxA, ballA, ballB, this.ground, this.ceil, this.leftwall, this.rightwall])

      for (let i = 0; i < 10; i++) {
        let radius = Math.round(Math.random() * 100)
        let size = Math.random() * height / 4
        this.world.add(this.engine.world, this.bodies.circle(
          Math.random() * width,
          size,
          radius, {
            mass: size / 5,
            render: {
              fillStyle: ['#EA1070', '#EAC03C', '#25DDBC', '#007DB0', '#252B7F', '#FF6040'][Math.round(Math.random() * 6 - 0.5)]
            }
          }
        ))
      }

      Engine.run(this.engine)
      Render.run(render)
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
</style>
