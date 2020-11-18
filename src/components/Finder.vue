<template>
    <div class="finder">
        <div class="top_toolbar">
            <div class="menu_options">
                <div class="apple_logo"><img src="@/assets/apple.png"></div>
                <div class="menu_item">Finder</div>
                <div class="menu_item">File</div>
                <div class="menu_item">Edit</div>
                <div class="menu_item">View</div>
                <div class="menu_item">Go</div>
                <div class="menu_item">Window</div>
                <div class="menu_item">Help</div>
            </div>
            <div class="system_options">
                <div class="system_icon instagram"><img src="@/assets/instagram.png"></div>
                <div class="system_icon twitter"><img src="@/assets/twitter.png"></div>
                <div class="system_icon youtube"><img src="@/assets/youtube.png"></div>
                <div class="system_icon mail"><img src="@/assets/mail.png"></div>
                <div class="system_icon sound"><img src="@/assets/sound.png"></div>
                <div class="system_icon time">Mon 10:57 AM</div>
                <div class="system_icon title">GirlsWhoCode</div>
                <div class="system_icon search"><img src="@/assets/search.png"></div>
                <div class="system_icon list"><img src="@/assets/menu.png"></div>
            </div>
        </div>
        <div class="desktop">
            <div class="icon folder"><img src="@/assets/folder.png"><div class="title">Info</div></div>
            <div class="icon cd"><img src="@/assets/CD.png"><div class="title">MissingCode_<br>Film</div></div>
            <div class="wallpaper"><img src="@/assets/GWC_Logo_Green.png"></div>
        </div>
    </div>
</template>

<script>
// import { gsap } from 'gsap'

export default {
  name: 'Finder'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top_toolbar {
  height: 30px;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(0,0,0,.2);
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: #FFFFFF;
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

.apple_logo {
  width: 25px;
  height: 25px;
}

.system_icon {
  width: 20px;
  height: 20px;
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

.desktop .icon img {
    width: 100%;
    height: auto;
}

.desktop .icon:hover .title {
    text-decoration: underline;
}

.wallpaper {
    position: fixed;
    bottom: 50px;
    left: 50px;
    width: 150px;
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
}

</style>
