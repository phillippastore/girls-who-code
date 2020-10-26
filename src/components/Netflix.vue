<template>
 <div class="container">
   <div class="logo">Girls Who Code</div>
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
</style>
