<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import 'assets/fonts/digitany.css';

body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: 'DigitanyRegular', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: white;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
