<template>
  <div class="container spotify" ref="container">
    <Finder />
    <Browser name="spotify" width=85 height=60 left=50 top=50 url="spotify.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'Spotify',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.spotify iframe {
  width: 69vw;
  height: 40vw;
}

.spotify .site_content {
  background-color: #000000 !important;
}

.spotify .browser-container {
  height: 43.7vw !important;
  width: 70vw !important;
  max-height: 80vh;
}

@media (max-width: 1000px) {
  .spotify .browser-container {
    height: 50.7vw !important;
    width: 80vw !important;
  }

  .spotify iframe {
    width: 78vw;
    height: 45vw;
  }
}

@media (max-width: 600px) {
  .spotify .browser-container {
    width: 95vw !important;
    height: 66vw !important;
    top: 45% !important;
  }

  .spotify iframe {
    width: 95vw;
    height: 54vw;
  }
}

</style>
