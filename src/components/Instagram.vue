<template>
  <div class="container instagram" ref="container">
    <Finder />
    <Browser2 id="browser2" name="instagram" width=85 height=60 left=50 top=50 url="instagram.com" />
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

.instagram iframe {
  width: 100% !important;
  /* height: 40vw; */
}

.instagram .site_content {
  background-color: #FFFFFF !important;
}

#vimeo-player-1 {
  position: absolute;
  left: 0px;
  width: calc(61.3% - 7.5px);
  top: 2px;
}

#vimeo-player-1 iframe {
  height: 270vw;
}

#vimeo-player-2 {
  position: fixed;
  right: 17px;
  width: calc(38.69% - 7.5px);
  top: -14px;
}

#vimeo-player-2 iframe {
  height: 49vw;
}

.instagram .browser-container {
  height: 42vw !important;
  width: 70vw !important;
  max-height: 80vh;
  overflow: hidden;
}

@media (max-width: 1000px) {
  .instagram .browser-container {
    height: 50.7vw !important;
    width: 80vw !important;
  }

  .instagram iframe {
    width: 78vw;
    height: 45vw;
  }

  #vimeo-player-2 {
    top: 0px;
  }
}

@media (max-width: 600px) {
  .instagram .browser-container {
    width: 95vw !important;
    height: 66vw !important;
    top: 45% !important;
  }

  .instagram iframe {
    width: 95vw;
    height: 54vw;
  }
}

</style>
