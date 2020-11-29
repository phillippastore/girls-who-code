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

.twitter-vimeo-player {
  position: absolute;
  left: 24.479%;
  height: 415%;
  /* margin-left: -106px; */
  /* margin-top: -3px; */
  width: 43.9583%;
}

.vimeo-player-left {
  position: fixed;
  /* left: -1px; */
  height: calc(100% - 70px);
  width: 24.479%;
  top: 42px;
}

.vimeo-player-right {
  position: fixed;
  right: 17px;
  height: calc(100% - 70px);
  width: 31.5625%;
  top: 42px;
}

.twitter-vimeo-player {
  position: absolute;
}

.twitter .vimeo-player-left iframe {
  /* width: 15.8vw; */
  /* height: 36vw; */
  width: 100%;
  /* height: 100%; */
}

.twitter .vimeo-player-right iframe {
  /* width: 20.7vw; */
  /* height: 36vw; */
  width: 100%;
  /* height: 100%; */
}

.twitter #vimeo-player-2 iframe {
  /* width: 78vw; */
  /* height: 193vw; */
  width: 100%;
  height: 100%;
}

</style>
