<template>
  <div class="popup_wrapper">
    <div v-if="background == 'them' || background == 'ending'" class="all_arrows" :class="{ ending: background == 'ending' }"></div>
    <div class="popup" :class="name" :style="computedPositioning">
    <div class="browser-container" id="browser1">
      <div v-if="showModal" class="modal">
        <Popup v-if="name == 'instagram'" @close="onModalClose" name="modal_1" type=1 width=14 height=5.3 left=45 top=30 background="modal_1" />
        <Popup v-if="name == 'teenvogue'" @close="onModalClose" name="modal_2" type=1 width=14 height=5.3 left=45 top=30 background="modal_2" />
        <Popup v-if="name == 'twitter'" @close="onModalClose" name="modal_3" type=1 width=14 height=5.3 left=45 top=30 background="modal_3" />
        <Popup v-if="name == 'sephora'" @close="onModalClose" name="modal_4" type=1 width=14 height=5.3 left=45 top=30 background="modal_4" />
        <Popup v-if="name == 'adidas'" @close="onModalClose" name="modal_5" type=1 width=14 height=5.3 left=45 top=30 background="modal_5" />
        <Popup v-if="name == 'spotify'" @close="onModalClose" name="modal_6" type=1 width=14 height=5.3 left=45 top=30 background="modal_6" />
      </div>
      <div class="header" id="browser1_header">
        <div class="header_button red"></div>
        <div class="header_button yellow"></div>
        <div class="header_button green"></div>
        <div class="header_text">This is what the Internet would look like if girls didn't code.</div>
      </div>
      <div class="url">
        <div v-on:click="goBack()" class="browser_back"><img src="@/assets/arrow_left.png" /></div>
        <div v-on:click="goForward()" class="browser_forward"><img src="@/assets/arrow_right.png" /></div>
        <div v-on:click="refresh()" class="browser_refresh"><img src="@/assets/refresh.png" /></div>
        <div class="browser_url">
          <div class="browser_lock"><img src="@/assets/lock.png" /></div>
          <div class="url_copy">{{url}}</div>
        </div>
      </div>
      <div class="site_content" ref="content">
        <vimeo-player v-if="name == 'instagram'" class="instagram-vimeo-player" ref="player" :video-id="485204423" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
        <vimeo-player v-if="name == 'teenvogue'" class="teenvogue-vimeo-player" ref="player" :video-id="483217171" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
        <vimeo-player v-if="name == 'twitter'" class="twitter-vimeo-player" ref="player" :video-id="485207971" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
        <vimeo-player v-if="name == 'sephora'" class="sephora-vimeo-player" ref="player" :video-id="483217394" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
        <vimeo-player v-if="name == 'adidas'"  class="adidas-vimeo-player" ref="player" :video-id="483217749" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
        <vimeo-player v-if="name == 'spotify'"  class="spotify-vimeo-player" ref="player" :video-id="483217398" :loop="true" :controls="false" :autoplay="true" @ready="onReady"/>
      </div>
      <transition name="fade">
        <div class="scroll_indicator bounce" v-show="showScrollIndicator">
          <div class="scroll_text">Scroll</div>
          <div><img src="@/assets/scroll_green.png"></div>
        </div>
      </transition>
    </div>
      <div
        class="window_body"
        :class="{
          windowGray: type == '1',
          windowWhite: type == '2' || type == '3',
          windowToday: background == 'today',
          windowPercentage: background == 'percentage',
          windowAll: background == 'all',
          windowCoders: background == 'coders',
          windowAre: background == 'are',
          windowWomen: background == 'women',
          windowWhat: background == 'what',
          windowWould: background == 'would',
          windowThe: background == 'the',
          windowInternet: background == 'internet',
          windowLooklike: background == 'looklike',
          windowWithout: background == 'without',
          windowThem: background == 'them',
          windowEnding: background == 'ending'
        }"
        :style="computedWindow"
      >
        </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable'
import Popup from '@/components/Popup.vue'

export default {
  name: 'Browser',
  components: {
    Popup
  },
  props: {
    name: String,
    width: String,
    height: String,
    left: String,
    top: String,
    background: String,
    url: String,
    noScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    computedWindow() {
      return {
        '--height': this.height + 'vw'
      }
    },
    computedPositioning() {
      return {
        '--left': this.left + 'vw',
        '--top': this.top + 'vh',
        '--width': this.width + 'vw'
      }
    }
  },
  data() {
    return {
      options: {
        quality: '2K'
      },
      showModal: false,
      isPlaying: false,
      type: 2,
      showScrollIndicator: false,
      scrollTimer: null
    }
  },
  created() {
    gsap.registerPlugin(Draggable)
  },
  mounted() {
    this.$refs.player.quality = '2K'
    Draggable.create('#browser1', {
      type: 'x, y',
      trigger: '#browser1_header',
      bounds: this.$refs.popup_container,
      edgeResistance: 0.65,
      onClick: function() {
        // console.log('clicked')
      },
      onDragEnd: this.trackingBrowser
    })
    if (this.noScroll) {
      this.startNoScrollTimer()
    } else {
      this.$refs.content.addEventListener('scroll', this.scrollEvt)
      this.startScrollTimer()
    }
  },
  beforeDestroy() {
    this.$refs.content.removeEventListener('scroll', this.scrollEvt)
  },
  methods: {
    trackingBrowser() {
      this.$gtag.event('Browser Dragged', { method: 'next' })
    },
    onReady() {
      this.play()
    },
    play () {
      this.$refs.player.mute()
      this.$refs.player.play()
      this.isPlaying = true
    },
    pause () {
      this.$refs.player.pause()
      this.isPlaying = false
    },
    scrollEvt(e) {
      this.showScrollIndicator = false
      this.stopScrollTimer()
      if (this.$refs.content.scrollHeight - this.$refs.content.scrollTop <= this.$refs.content.clientHeight) {
        this.pause()
        this.showModal = true
      } else {
        if (!this.isPlaying) {
          this.play()
        }
        this.showModal = false
        this.startScrollTimer()
      }
    },
    startScrollTimer() {
      this.scrollTimer = setTimeout(() => {
        this.$gtag.event('Show Scroll', { method: 'next' })
        this.showScrollIndicator = true
      }, 4000)
    },
    stopScrollTimer() {
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer)
      }
    },
    startNoScrollTimer() {
      setTimeout(() => {
        this.showModal = true
        this.pause()
      }, 5000)
    },
    onModalClose() {
      this.showModal = false
      this.play()
      if (this.noScroll) {
        this.startNoScrollTimer()
      }
    },
    goBack() {
      this.$gtag.event('Browser Back Icon', { method: 'next' })
      this.$router.go(-1)
    },
    goForward() {
      this.$gtag.event('Browser Forward Icon', { method: 'next' })
      this.$router.go(1)
    },
    refresh() {
      this.$gtag.event('Browser Reload Icon', { method: 'next' })
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.header_text {
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 6px;
  left: 0;
  font-size: 14px;
  letter-spacing: .5px;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.header {
  text-align: left;
  box-sizing: border-box;
  background: rgb(223, 225, 230);
  background: linear-gradient(
    180deg,
    rgba(223, 225, 230, 1) 0%,
    rgba(213, 210, 213, 1) 100%
  );
  border: 1px solid #f4f5f4;
  border-left: 1px solid #dad8da;
  border-right: 1px solid #dad8da;
  border: none;
  width: 100%;
  height: 28px;
  padding-left: 6px;
  border-radius: 6px 6px 0px 0px;
  padding: 7px 12px;
  position: absolute;
  top: 0px;
}

@media (max-width: 600px) {
  .header {
    height: 20px;
    padding-left: 6px;
  }
}

.header.editor {
  background-image: url('../assets/headerBar.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 40px;
}

.header.outro {
  background-image: url('../assets/popup_outro.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 116px;
}

.header_button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: inline-block;
  margin-top: 0px;
  position: relative;
  top: -2px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .header_button {
    margin-top: 2px;
    width: 8px;
    height: 8px;
    position: relative;
    top: -5px;
  }
}

.red {
  background-color: #ed6a5f;
  /* border: 0.1px solid #d05347; */
}
.yellow {
  background-color: #f3bd4e;
  /* border: 0.1px solid #d7a244; */
}
.green {
  background-color: #62c655;
  /* border: 0.1px solid #56a842; */
}

.logo {
  position: absolute;
  top: 2%;
  left: 3.5%;
  width: 10%;
}

.generation {
  position: absolute;
  top: 37%;
  left: 30%;
  width: 50%;
}

.browser_tab {
    display: inline-block;
    vertical-align: top;
    height: 36px;
}

.browser_tab img {
    width: auto;
    height: 78%;
}

.url {
  width: 100%;
  height: 35px;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 28px;
  background-color: #FFFFFF;
  text-align: left;
}

.url_copy {
  display: inline-block;
  position: relative;
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #666;
  line-height: 30px;
  left: -5px;
}

.browser_back {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2px 0px;
  margin-left: 10px;
  vertical-align: top;
}

.browser_forward {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2px 0px;
  vertical-align: top;
}

.browser_refresh {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 2px 0px;
  vertical-align: top;
}

.browser_back:hover,
.browser_forward:hover,
.browser_refresh:hover {
  opacity: .4;
  cursor: pointer;
}

.browser_back img,
.browser_forward img,
.browser_refresh img,
.browser_lock img {
  width: 100%;
  height: 100%;
}

.browser_url {
  display: inline-block;
  width: 60%;
  height: 30px;
  background-color: #f1f3f4;
  margin: 2px 5px;
  border-radius: 30px;
  vertical-align: top;
}

.browser_lock {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 2px 6px;
  vertical-align: top;
}

.modal-header {
  width: 98%;
  margin-top: 3px;
}

.img-404 {
  width: 65%;
  padding: 0 37%;
}

.content {
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 28px;
  width: 100%;
}

.windows-button {
  box-sizing: border-box;
  border: none;
  background: #c0c0c0;
  box-shadow:
    inset -2px 4px 1px -2px #e1e1e1,
    inset 4px 0px 1px -2px #e1e1e1,
    inset 0px -4px 1px -2px #999999,
    inset -5px 0px 1px -2px #999999;
  border-radius: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 22px;
  min-width: 200px;
  margin: 0 11px;
  padding-top: 7px;
  min-height: 40px;
  color: black;
  text-decoration: none;
}

.browser-container {
  z-index: 1;
  position: fixed;
  width: 70%;
  height: 82%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, .3);
}

.browser-container .site_content {
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100%);
  height: calc(100% - 61px);
  top: 61px;
  position: absolute;
  box-sizing: border-box;
  background-color: #eeeeee;
}

@media (max-width: 600px) {
  .browser-container .site_content {
    height: calc(100% - 59px);
    top: 59px;
  }
}

.vimeo-wrapper {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   pointer-events: none;
   overflow: hidden;
}

@media (max-width: 600px) {
  .header {
    padding: 5px 9px;
    height: 25px;
  }

  .header_text {
    font-size: 10px;
    letter-spacing: 0px;
    text-align: center;
    /* right: 4px;
    left: auto; */
    top: 7px;
  }

  .header_button {
    width: 8px;
    height: 8px;
    top: -2px;
    left: -2px;
    position: relative;
  }
}

.modal {
  width: 100%;
  height: 100%;
}

.popup {
  z-index: 2 !important;
}

@media (max-width: 600px) {
  .browser_back,
  .browser_forward,
  .browser_refresh {
    width: 18px;
    height: 18px;
  }

  .browser_back img {
    width: 100%;
    height: 100%;
  }

  .browser_url {
    width: 50%;
    height: 18px;
  }

  .browser_lock {
    width: 15px;
    height: 15px;
  }

  .url {
    height: 22px;
    top: 24px;
  }

  .url_copy {
    font-size: 8px;
    line-height: 18px;
    left: -8px;
    top: -1px;
  }

  .browser-container {
    width: 95%;
    height: 75vh;
    top: 53%;
  }

  .browser-container .site_content {
    height: calc(100% - 45px);
    top: 45px;
  }
}

.scroll_indicator {
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  padding: 5px 10px;
}

.scroll_indicator img {
  width: 30px;
  height: 30px;
  padding-top: 4px;
}

.bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

.scroll_text {
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .4rem;
  line-height: 25px;
  vertical-align: top;
  color: #10a195;
  text-align: center;
  padding: 0px 15px 0px 17px;
}

.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

</style>
