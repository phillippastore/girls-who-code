<template>
  <div class="container instagram" ref="container">
    <Finder />
    <Browser2 name="instagram" width=85 height=60 left=50 top=50 url="instagram.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser2 from '@/components/Browser2.vue'

export default {
  name: 'Instagram',
  components: {
    Finder,
    Browser2
  }
}
</script>

<style>

.instagram-vimeo-player {
  position: absolute;
  left: 0;
  height: 415%;
  /* margin-left: -106px; */
  /* margin-top: -3px; */
  width: 51.75%;
  top: 71px;
}

.instagram-player-main {
  position: fixed;
  /* left: -1px; */
  height: calc(100% - 61px);
  width: calc(51.75% - 8.5px);
  top: 61px;
}

.instagram-player-right {
  position: fixed;
  right: 17px;
  height: calc(100% - 61px);
  width: calc(48.25% - 8.5px);
  top: 61px;
}

.instagram-vimeo-player {
  position: absolute;
}

.instagram .instagram-player-right iframe {
  width: 100%;
  background-color: blueviolet;
}

.instagram .instagram-player-main iframe {
  width: 100%;
  height: 108%;
  background-color: green;
}

.instagram .browser-container {
  height: 64% !important;
}

</style>
