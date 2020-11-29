<template>
  <div class="container teenvogue" ref="container">
    <Finder />
    <Browser name="teenvogue" width=85 height=60 left=50 top=50 url="teenvogue.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'TeenVogue',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.teenvogue .teenvogue-vimeo-player iframe {
  width: 69vw;
  height: 170vw;
}

@media (max-width: 600px) {
  .teenvogue .browser-container {
    width: 95vw !important;
    height: 74% !important;
  }

  .teenvogue iframe {
    width: 95vw !important;
    height: 234vw !important;
  }
}
</style>
