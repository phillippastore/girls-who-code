<template>
    <div class="finder">
        <div class="top_toolbar">
            <div class="menu_options">
                <div v-on:click="toggleMenu()" class="mobile_menu" :class="{'active': (menuActive == true)}">
                  <img v-if="menuActive" src="@/assets/mobile_menu_active.png">
                  <img v-if="!menuActive" src="@/assets/mobile_menu.png">
                </div>
                <router-link :to="{ name: 'Intro' }"><div class="apple_logo"><span @click="tracking('Click Apple Logo')"><img src="@/assets/apple.png"></span></div></router-link>
                <div v-on:click="toggleMenu()" class="menu_item finder" :class="{'active': (menuActive == true)}">Finder</div>
                <div class="menu_item extra_menu">File</div>
                <div class="menu_item extra_menu">Edit</div>
                <div class="menu_item extra_menu">View</div>
                <div class="menu_item extra_menu">Go</div>
                <div class="menu_item extra_menu">Window</div>
                <div class="menu_item extra_menu">Help</div>
            </div>
            <div class="system_options">
                <div class="system_icon instagram"><span @click="tracking('Click Instagram Icon')"><a href="https://instagram.com/girlswhocode" target="_blank"><img src="@/assets/instagram.png"></a></span></div>
                <div class="system_icon twitter"><span @click="tracking('Click Twitter Icon')"><a href="https://twitter.com/girlswhocode" target="_blank"><img src="@/assets/twitter.png"></a></span></div>
                <div class="system_icon youtube"><span @click="tracking('Click YouTube Icon')"><a href="https://www.youtube.com/user/GirlsWhoCode" target="_blank"><img src="@/assets/youtube.png"></a></span></div>
                <div class="system_icon mail"><span @click="tracking('Click Mail Icon')"><a href="mailto:info@girlswhocode.com" target="_blank"><img src="@/assets/mail.png"></a></span></div>
                <div class="system_icon sound"><img src="@/assets/sound.png"></div>
                <div class="system_icon time"><span>{{ currentTime | moment("ddd h:mm A") }}</span></div>
                <div class="mobile_title"><span @click="tracking('Click GirlsWhoCode Text')"><a href="https://girlswhocode.com" target="_black">GirlsWhoCode</a></span></div>
                <div v-on:click="toggleCD()" :class="{'active': (cdActive == true)}" class="mobile_cd"><img src="@/assets/CD.png"></div>
                <div class="system_icon title"><a href="https://girlswhocode.com" target="_black">GirlsWhoCode</a></div>
                <div class="system_icon search"><img src="@/assets/search.png"></div>
                <div class="system_icon list"><img src="@/assets/menu.png"></div>
            </div>
        </div>
        <div class="cd_dropdown" v-if="cdActive">
          <router-link :to="{ name: 'Film' }"><div class="menu_option noborder">Watch the film<img src="@/assets/nav_arrow.png"></div></router-link>
        </div>
        <div class="finder_dropdown" v-if="menuActive">
          <router-link :to="{ name: 'Instagram' }"><span @click="tracking('Click Menu - Instagram')"><div class="menu_option noborder">Instagram<img src="@/assets/nav_arrow.png"></div></span></router-link>
          <router-link :to="{ name: 'TeenVogue' }"><span @click="tracking('Click Menu - TeenVogue')"><div class="menu_option">Teen Vogue<img src="@/assets/nav_arrow.png"></div></span></router-link>
          <router-link :to="{ name: 'Twitter' }"><span @click="tracking('Click Menu - Twitter')"><div class="menu_option">Twitter<img src="@/assets/nav_arrow.png"></div></span></router-link>
          <router-link :to="{ name: 'Sephora' }"><span @click="tracking('Click Menu - Sephora')"><div class="menu_option">Sephora<img src="@/assets/nav_arrow.png"></div></span></router-link>
          <router-link :to="{ name: 'Adidas' }"><span @click="tracking('Click Menu - Adidas')"><div class="menu_option">Adidas<img src="@/assets/nav_arrow.png"></div></span></router-link>
          <router-link :to="{ name: 'Spotify' }"><span @click="tracking('Click Menu - Spotify')"><div class="menu_option">Spotify<img src="@/assets/nav_arrow.png"></div></span></router-link>
        </div>
        <div class="desktop">
            <!-- <div class="icon folder" :class="{'hidden': (icons == 'no')}"><img src="@/assets/folder.png"><div class="title">Info</div></div> -->
            <router-link :to="{ name: 'Film' }">
              <span @click="tracking('Click Film CD')">
                <div class="icon cd" :class="{'hidden': (icons == 'no')}"><img src="@/assets/CD.png"><div class="title">MissingCode_Film</div></div>
              </span>
            </router-link>
            <div class="wallpaper"><img src="@/assets/GWC_Logo_Green.png"></div>
        </div>
        <div class="gradient_background"></div>
    </div>
</template>

<script>

export default {
  name: 'Finder',
  props: {
    icons: String
  },
  data() {
    return {
      menuActive: false,
      cdActive: false,
      currentTime: null
    }
  },
  created() {
    setInterval(this.setTime, 1000)
  },
  methods: {
    toggleMenu() {
      this.tracking('Toggle Menu Button')
      this.menuActive = !this.menuActive
    },
    toggleCD() {
      this.tracking('Toggle CD Button')
      this.cdActive = !this.cdActive
    },
    setTime() {
      this.currentTime = new Date()
    },
    tracking(label) {
      this.$gtag.event(label, { method: 'next' })
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

.gradient_background, .solid_background {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  left: 0px;
  top: 0px;
  background: linear-gradient(-45deg, #173346, #3067d8, #71d2b9, #f7d962);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
}

.solid_background {
  background: #f9f9f9;
  background-size: 100% 100%;
  animation: none;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.top_toolbar {
  height: 30px;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(0,0,0,.2);
  position: fixed;
  z-index: 3001;
  top: 0;
  background-color: #FFFFFF;
}

.finder_dropdown, .cd_dropdown {
  position: fixed;
  z-index: 3000;
  left: 50px;
  background: #bdbdbd;
  top: 26px;
  width: 140px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;
  padding-bottom: 2px;
  box-shadow: 0px 0px 20px rgba(0,0,0,.4);
}

.cd_dropdown {
  width: 150px;
  right: 50px;
  left: auto;
}

@media (max-width: 600px) {
  .finder_dropdown {
    left: 10px;
  }

  .cd_dropdown {
    right: 10px;
  }

  .icon.cd {
    display: none;
  }
}

a {
  text-decoration: none;
  color: #000000;
}

.finder_dropdown .menu_option, .cd_dropdown .menu_option {
  padding: 9px 15px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-top: 1px solid #aaa;
  cursor: pointer;
  text-decoration: none;
}

.finder_dropdown .menu_option img, .cd_dropdown .menu_option img {
  width: 10px;
  height: 10px;
  float: right;
  margin-top: 3px;
}

.finder_dropdown .menu_option:hover {
  opacity: .7;
}

.finder_dropdown .menu_option.noborder,
.cd_dropdown .menu_option.noborder {
  border-top: none !important;
}

.menu_options {
  position: absolute;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.menu_options div, .system_options div {
  display: inline-block;
  padding: 6px 10px;
  vertical-align: top;
  font-size: 15px;
  letter-spacing: -.2px;
  line-height: 20px;
}

.system_options div {
  padding: 6px 6px;
}

.apple_logo, .mobile_menu {
  width: 25px;
  height: 25px;
}

.mobile_menu {
  height: 18px;
  padding: 6px !important;
  left: 10px;
  position: relative;
}

.mobile_menu.active, .mobile_cd.active {
  background-color: #548def;
}

.mobile_cd {
  width: 25px;
  height: 18px;
  right: 10px;
  position: relative;
  display: none !important;
}

@media (max-width: 600px) {
  .mobile_cd {
    display: inline-block !important;
  }
}

.mobile_cd img {
  width: 20px !important;
  height: 20px !important;
}

.mobile_menu, .mobile_time, .mobile_title {
  display: none !important;
}

.mobile_time {
  right: 9px;
  position: absolute;
  width: 100px;
  text-align: right;
}

@media (max-width: 600px) {
  .mobile_menu, .mobile_time, .mobile_title {
    display: inline-block !important;
  }
}

.system_icon {
  width: 20px;
  height: 20px;
}

.menu_item:hover {
  cursor:default;
}

.menu_item.finder {
  cursor: pointer;
}

.apple_logo:hover,
.menu_item.finder:hover,
.system_icon.instagram:hover,
.system_icon.twitter:hover,
.system_icon.youtube:hover,
.system_icon.mail:hover,
.system_icon.title:hover {
  opacity: .7;
}

.menu_item.finder.active:hover {
  opacity: 1;
}

.menu_item.finder.active {
  cursor: pointer;
  color: white;
  background-color: #548def;
  height: 18px;
}

@media (max-width: 1000px) {
  .extra_menu {
    display: none !important;
  }
}

@media (max-width: 600px) {
  .system_icon, .apple_logo, .menu_item {
    display: none !important;
  }

  .mobile_title {
    position: fixed;
    left: 25%;
    width: 50%;
  }
}

.system_icon.time, .system_icon.title {
  width: auto;
  padding: 6px 11px;
}

.apple_logo img {
  width: 85%;
  position: relative;
  top: -2px;
  margin-left: 8px;
}

.mobile_menu img {
  width: 85%;
  position: relative;
  top: -1px;
}

.system_options {
  position: absolute;
  right: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.system_options img {
  width: 95%;
}

.desktop {
    right: 70px;
    position: fixed;
    z-index: 1;
    padding-top: 70px;
}

.desktop .icon {
    width: 70px;
    height: 70px;
    margin-bottom: 55px;
    cursor: pointer;
}

@media (max-width: 600px) {
  .desktop .icon {
    width: 45px;
    height: 45px;
  }

  .desktop {
    right: 50px;
    padding-top: 50px;
  }
}

.desktop .icon img {
    width: 100%;
    height: auto;
}

.desktop .icon.hidden {
  display: none;
}

.desktop .icon:hover .title {
    text-decoration: underline;
}

.wallpaper {
    position: fixed;
    bottom: 50px;
    left: 50px;
    width: 300px;
}

@media (max-width: 600px) {
  .wallpaper {
    position: fixed;
    bottom: 62px;
    left: 29px;
    width: 250px;
  }
}

.wallpaper img {
    width: 100%;
    height: auto;
}

.icon .title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
  text-shadow: 0px 1px 8px rgba(0,0,0,1);
  letter-spacing: .3px;
  width: 100px;
  text-align: center;
  position: relative;
  left: -15px;
  top: 5px;
  line-height: 23px;
  word-break: break-all;
}

@media (max-width: 600px) {
  .icon .title {
    font-size: 11px;
    width: 130px;
    left: -42px;
    top: 0px;
  }
}

</style>
