<template>
 <div class="container">
   <div class="logo">Girls Who Code</div>
   <router-link class="cta" :to="{ name: 'EndSlide'}">Next</router-link>
 </div>
</template>

<script>
export default {
  name: 'Netflix',
  mounted() {
    console.log(this.$mq)
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
