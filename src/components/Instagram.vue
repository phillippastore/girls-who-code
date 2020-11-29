<template>
  <div class="container instagram" ref="container">
    <Finder />
    <Browser2 name="instagram" width=85 height=60 left=50 top=50 url="instagram.com" />
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
  background-color: #fbfafb !important; /*fbfafb*/
}

#vimeo-player-1 {
  position: absolute;
  left: 0px;
  width: 61.3%;
  top: 5px;
}

#vimeo-player-1 iframe {
  height: 270vw;
}

#vimeo-player-2 {
  position: fixed;
  right: 17px;
  width: 38%;
  top: 51px;
}

#vimeo-player-2 iframe {
  height: 38vw;
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

  #vimeo-player-2 {
    top: 61px;
  }
  
  #vimeo-player-2 iframe {
    height: 42vw;
  }

  #vimeo-player-1 {
    top: 1px;
  }

  #vimeo-player-1 iframe {
    height: 306vw;
  }

  /* .instagram iframe {
    width: 78vw;
    height: 45vw;
  }

  #vimeo-player-2 {
    top: 0px;
  } */
}

@media (max-width: 600px) {
  .instagram .browser-container {
    width: 95vw !important;
    height: 66vw !important;
    top: 45% !important;
  }

  #vimeo-player-2 {
    top: 45px;
  }
  
  #vimeo-player-2 iframe {
    height: 49vw;
  }

  #vimeo-player-1 {
    top: 1px;
  }

  #vimeo-player-1 iframe {
    height: 362vw;
  }
}

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 960px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    #vimeo-player-2 {
      right: 0px;
      width: 39%;
    }

    #vimeo-player-1 iframe {
      height: 306w;
    }
}

@media only screen 
  and (min-device-width: 961) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    #vimeo-player-2 {
      right: 0px;
      width: 39%;
    }

    #vimeo-player-1 iframe {
      height: 315vw;
    }
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    #vimeo-player-2 {
      right: 0px;
      width: 39%;
    }

    #vimeo-player-1 iframe {
      height: 374vw;
    }
    
}



</style>
