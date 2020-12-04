<template>
  <div class="container sephora" ref="container">
    <Finder />
    <Browser name="sephora" width=85 height=60 left=50 top=50 url="sephora.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'Sephora',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.sephora .site_content {
  background-color: #000 !important;
}

.sephora .sephora-vimeo-player iframe {
  width: 69vw;
  height: 179vw;
}

@media (max-width: 600px) {
  .sephora .browser-container {
    width: 95vw !important;
  }

  .sephora iframe {
    width: 95vw !important;
    height: 246vw !important;
  }
}

</style>
