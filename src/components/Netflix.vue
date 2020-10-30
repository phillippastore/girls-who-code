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
      rightwall: null,
      counter: -1,
      dragBody: null
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
      const World = Matter.World
      const Bodies = Matter.Bodies
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
      const boxA = Bodies.rectangle(400, 200, 80, 80)
      const ballA = Bodies.circle(380, 100, 40, 10)
      const ballB = Bodies.circle(460, 10, 40, 10)
      this.ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true })
      this.ceil = Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true })
      this.leftwall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true })
      this.rightwall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true })
      World.add(this.engine.world, [boxA, ballA, ballB, this.ground, this.ceil, this.leftwall, this.rightwall])

      for (let i = 0; i < 10; i++) {
        let radius = Math.round(Math.random() * 100)
        let size = Math.random() * height / 4
        World.add(this.engine.world, Bodies.circle(
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

      Matter.Events.on(this.engine, 'beforeUpdate', event => {
        this.counter += 0.014
        if (this.counter < 0) { return }
        if (this.dragBody != null) {
          if (this.dragBody.velocity.x > 25.0) {
            Matter.Body.setVelocity(this.dragBody, { x: 25, y: this.dragBody.velocity.y })
          }
          if (this.dragBody.velocity.y > 25.0) {
            Matter.Body.setVelocity(this.dragBody, { x: this.dragBody.velocity.x, y: 25 })
          }
          if (this.dragBody.positionImpulse.x > 25.0) {
            this.dragBody.positionImpulse.x = 25.0
          }
          if (this.dragBody.positionImpulse.y > 25.0) {
            this.dragBody.positionImpulse.y = 25.0
          }
        }
      })

      const mouse = Matter.Mouse.create(render.canvas)
      const mouseConstraint = Matter.MouseConstraint.create(this.engine, { mouse: mouse, constraint: { stiffness: 0.1, render: { visible: false } } })

      Matter.Events.on(mouseConstraint, 'startdrag', function(event) {
        console.log(event)
        this.dragBody = event.body
      })

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
