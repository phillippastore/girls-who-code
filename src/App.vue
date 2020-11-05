<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}


window.addEventListener('mousemove', function(e) {
  [1, .9, .8, .5, .1].forEach(function(i) {
    var j = (1 - i) * 10;
    var elem = document.createElement('div');
    // var size = Math.ceil(Math.random() * 30) + 'px';
    elem.style.position = 'fixed';
    elem.style.top = e.pageY + 'px'; // + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.left = e.pageX + 'px'; // + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.width = "20px";
    elem.style.height = "20px";
    elem.style.zIndex = 3;
    // elem.style.background = 'hsla(' +
    //   Math.round(Math.random() * 360) + ', ' +
    //   '100%, ' +
    //   '50%, ' +
    //   i + ')';
    elem.style.backgroundImage = "url('http://heyimphil.com/mouseStraight.png')";
    elem.style.backgroundSize = "contain";
    elem.style.backgroundRepeat = "no-repeat";
    elem.style.pointerEvents = 'none';
    document.body.appendChild(elem);
    window.setTimeout(function() {
      document.body.removeChild(elem);
    }, 1000); //Math.round(Math.random() * i * 
  });
}, false);


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
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
