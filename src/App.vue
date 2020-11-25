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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

@media(max-width:600px) {
  body,
  html {
    overflow-y: scroll;
    overflow-x: hidden;
  }
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

@font-face {
  font-family: 'DigitanyRegular';
  src: url('assets/fonts/digitany.eot');
  src: url('assets/fonts/digitany.eot?#iefix') format('embedded-opentype'),
       url('assets/fonts/digitany.woff2') format('woff2'),
       url('assets/fonts/digitany.woff') format('woff'),
       url('assets/fonts/digitany.ttf') format('truetype'),
       url('assets/fonts/digitany.svg#youworkforthem') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
