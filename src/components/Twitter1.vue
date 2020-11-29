<template>
  <div class="container twitter" ref="container">
    <Finder />
    <Browser name="twitter" width=85 height=60 left=50 top=50 url="twitter.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'Twitter1',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.twitter iframe {
  width: 69vw;
  height: 180vw;
}

@media (max-width: 600px) {
  .twitter .browser-container {
    width: 95vw !important;
  }

  .twitter iframe {
    width: 95vw !important;
    height: 251vw !important;
  }
}

.twitter .site_content {
  background-color: #FFF !important;
}
</style>
