<template>
  <div class="container adidas" ref="container">
    <Finder />
    <Browser name="adidas" width=85 height=60 left=50 top=50 url="adidas.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'Adidas',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.adidas iframe {
  width: 69vw;
  height: 175vw;
}

@media (max-width: 600px) {
  .adidas .browser-container {
    width: 95vw !important;
  }

  .adidas iframe {
    width: 95vw !important;
    height: 246vw !important;
  }
}

.adidas .site_content {
  background-color: #FFF !important;
}
</style>
