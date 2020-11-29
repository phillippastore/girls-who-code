<template>
  <div class="container twitter" ref="container">
    <Finder />
    <Browser3 name="twitter" width=85 height=60 left=50 top=50 url="twitter.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser3 from '@/components/Browser3.vue'

export default {
  name: 'Twitter',
  components: {
    Finder,
    Browser3
  }
}
</script>

<style>

.twitter iframe {
  width: 100% !important;
  /* height: 40vw; */
}

.twitter .site_content {
  background-color: #FFFFFF !important;
}

#vimeo-player-1 {
  position: fixed;
  left: 0px;
  width: 24.479%;
  top: 61px;
}

#vimeo-player-1 iframe {
  height: 38vw;
}

#vimeo-player-2 {
  position: absolute;
  left: 24.479%;
  width: 43.958%;
  top: 0px;
}

#vimeo-player-2 iframe {
  height: 181.5vw;
}

#vimeo-player-3 {
  position: fixed;
  right: 17px;
  width: 31.5625%;
  top: 61px;
}

#vimeo-player-3 iframe {
  height: 38vw;
}

.twitter .browser-container {
  height: 42vw !important;
  width: 70vw !important;
  max-height: 80vh;
  overflow: hidden;
}

@media (max-width: 1000px) {
  .twitter .browser-container {
    height: 50.7vw !important;
    width: 80vw !important;
  }

  .twitter iframe {
    width: 78vw;
    height: 45vw;
  }

  #vimeo-player-2 {
    top: -14px;
  }
}

@media (max-width: 600px) {
  .twitter .browser-container {
    width: 95vw !important;
    height: 66vw !important;
    top: 45% !important;
  }

  .twitter iframe {
    width: 95vw;
    height: 54vw;
  }
}


</style>
