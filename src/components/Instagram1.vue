<template>
  <div class="container instagram" ref="container">
    <Finder />
    <Browser name="instagram" width=85 height=60 left=50 top=50 url="instagram.com" />
  </div>
</template>

<script>
import Finder from '@/components/Finder.vue'
import Browser from '@/components/Browser.vue'

export default {
  name: 'Instagram1',
  components: {
    Finder,
    Browser
  }
}
</script>

<style>

.instagram iframe {
  width: 69vw;
  height: 280vw;
}

@media (max-width: 600px) {
  .instagram .browser-container {
    width: 95vw !important;
  }

  .instagram iframe {
    width: 95vw !important;
    height: 386vw !important;
  }
}

.instagram .site_content {
  background-color: #FFF !important;
}
</style>
