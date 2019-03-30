<template>
  <div>
    <transition-group
      name="small-nav"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
    >
      <nav
        v-show="navShow"
        key="smal-nav"
        class="w3-sidebar w3-bar-block w3-card-4 w3-hide-large w3-large w3-text-white"
        style="width:85%; background: linear-gradient(#111111, #9c27b0);"
      >
        <button class="w3-button w3-hide-large w3-large" @click="navShow = !navShow">
          <i class="fa fa-close"></i>
        </button>
        <form class="w3-bar-item w3-container w3-border-purple w3-bottombar">
          <input
            name="q"
            type="text"
            class="w3-input w3-hover-light-gray w3-light-white w3-col s10"
            placeholder="Search article..."
            style="border:0px; border-radius:32px 0px 0px 32px"
            required
          >
          <button
            type="submit"
            class="w3-button w3-purple w3-hover-light-purple w3-col s2"
            style="border-radius:0px 32px 32px 0px"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
        <nuxt-link to="/" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-home"></i> Home
          </b>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-coffee"></i> Portfolio
          </b>
        </nuxt-link>
        <button
          class="w3-bar-item w3-button"
          @click="contactShow = !contactShow; navShow = !navShow"
        >
          <b>
            <i class="fa fa-send"></i> Contact
          </b>
        </button>
        <nuxt-link :to="{name: 'portfolio-about'}" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-info-circle"></i> About Me
          </b>
        </nuxt-link>
      </nav>
    </transition-group>

    <button
      class="w3-button w3-hide-large w3-hide-medium w3-left w3-large w3-text-white"
      @click="navShow = !navShow; archiveShow = false"
      style="background: none"
    >
      <i class="fa fa-bars"></i>
    </button>
    <button
      @click="navShow = false; archiveShow = !archiveShow"
      class="w3-bar-item w3-button w3-right w3-text-white w3-large"
      style="background: none"
    >
      <i class="fa fa-list-ul"></i>
    </button>
    <header class="w3-container w3-purple w3-padding w3-border-gray w3-bottombar">
      <div class="w3-content w3-padding w3-margin-top w3-center">
        <h1>Code Philosophy</h1>
        <p class="w3-large">
          Welcome to the blog of
          <span
            class="w3-round-xxlarge w3-hover-yellow w3-hover-text-black w3-purple w3-hover-border-yellow w3-border-purple w3-bottombar w3-leftbar w3-topbar w3-rightbar"
          >
            <nuxt-link :to="{name: 'portfolio-about'}" style="text-decoration: none">@dennielsadian</nuxt-link>
          </span>
        </p>
      </div>
    </header>

    <nav id="largeNav" class="w3-bar w3-black w3-large w3-border-gray w3-bottombar w3-hide-small">
      <div class="w3-content">
        <nuxt-link to="/" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-home"></i> Home
          </b>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-coffee"></i> Portfolio
          </b>
        </nuxt-link>
        <button class="w3-bar-item w3-button" @click="contactShow = !contactShow">
          <b>
            <i class="fa fa-send"></i> Contact
          </b>
        </button>
        <nuxt-link to="/portfolio/about" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-info-circle"></i> About
          </b>
        </nuxt-link>
        <form
          action="{% url 'blog:index' %}#list"
          method="get"
          class="w3-bar-item"
          style="float:right; padding:0px 5px 0px 0px; width:35%"
        >
          <input
            name="q"
            type="search"
            class="w3-input w3-hover-light-gray w3-light-white w3-col s10"
            placeholder="Search..."
            style="border:0px; padding:3px; margin:4.5px 0px 4.5px 0px; border-radius:32px 0px 0px 32px"
            required
          >
          <button
            type="submit"
            class="w3-button w3-purple w3-hover-gray w3-col s2"
            style="padding:3px; margin:4.5px 0px 4.5px 0px; border-radius:0px 32px 32px 0px"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
    </nav>

    <transition-group
      name="small-archive"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <nav
        v-show="archiveShow"
        key="small-archive"
        class="w3-sidebar w3-bar-block w3-display-topright w3-text-white"
      >
        <button
          class="w3-button w3-right w3-large"
          @click="archiveShow = !archiveShow; navshow=false"
        >
          <i class="fa fa-close"></i>
        </button>
        <h3 class="w3-bar-item w3-border-purple w3-bottombar">
          <i class="fa fa-archive"></i> Blog Archive
        </h3>
        <BlogArchive/>
      </nav>
    </transition-group>
    <div class="w3-container w3-row">
      <div class="w3-content">
        <ArticleList/>
      </div>
    </div>
    <transition-group
      name="contact"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
    >
      <Contact v-show="contactShow" key="contact" @hide-contact-modal="contactShow = !contactShow"/>
    </transition-group>
    <Footer/>
  </div>
</template>

<script>
import BlogArchive from '~/components/BlogArchive.vue'
import ArticleList from '~/components/ArticleList.vue'
import Footer from '~/components/Footer.vue'
import Contact from '~/components/Contact.vue'

export default {
  data() {
    return {
      navShow: false,
      contactShow: false,
      archiveShow: false,
      q: ''
    }
  },
  components: {
    ArticleList,
    BlogArchive,
    Footer,
    Contact
  }
}
</script>

<style scoped>
header {
  background: url('../assets/images/header.png') no-repeat fixed;
  background-size: cover;
}
header div h1 {
  letter-spacing: 10px;
  font-size: 80px;
  line-height: 1;
  padding-top: 30px;
  padding-bottom: 30px;
}
#largeNav {
  background: url('../assets/images/body.png') no-repeat fixed;
  background-size: cover;
}
@media (max-width: 425px) {
  header div h1 {
    font-size: 50px;
    letter-spacing: 0px;
  }
  .entry-image {
    height: 180px;
  }
}
.w3-modal {
  display: block;
} 
</style>