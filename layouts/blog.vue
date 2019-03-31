<template>
  <div>
    <BlogSmallNav
      :show="navShow"
      @hide-small-nav="navShow = !navShow"
      @show-contact="contactShow = !contactShow; navShow = false"
    />
    <button
      class="w3-button w3-hide-large w3-hide-medium w3-left w3-large w3-text-white"
      @click="navShow = !navShow; archiveShow = false"
      style="background: none"
    >
      <i class="fa fa-bars"></i>
    </button>
    <button
      @click="navShow = false; archiveShow = !archiveShow"
      class="w3-button w3-display-topright w3-text-white w3-round-xxlarge w3-margin-right w3-large w3-margin-top light-gray-opac"
    >
      <i class="fa fa-list-ul"></i> Archive
    </button>
    <header class="w3-container w3-purple w3-padding w3-border-gray w3-bottombar">
      <div class="w3-content w3-padding w3-margin-top w3-center">
        <h1 class="w3-margin-top">Code Philosophy</h1>
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
          @submit.prevent="search()"
          class="w3-bar-item"
          style="float:right; padding:0px 5px 0px 0px; width:35%"
        >
          <input
            v-model="q"
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

    <BlogArchive :show="archiveShow" @hide-archive="archiveShow = !archiveShow; navshow=false"/>

    <div class="w3-container w3-row">
      <div class="w3-content">
        <nuxt/>
      </div>
    </div>
    <Contact :show="contactShow" key="contact" @hide-contact-modal="contactShow = !contactShow"/>
    <Footer/>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
import BlogArchive from '~/components/BlogArchive.vue'
import BlogSmallNav from '~/components/BlogSmallNav.vue'
import Footer from '~/components/Footer.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    ArticleList,
    BlogArchive,
    BlogSmallNav,
    Footer,
    Contact
  },
  data() {
    return {
      navShow: false,
      contactShow: false,
      archiveShow: false,
      q: ''
    }
  },
  methods: {
    search() {
      this.$router.push({ name: 'blog', query: { q: this.q } })
    }
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
#archive,
#small-nav {
  width: 85%;
  background: linear-gradient(#111111, #9c27b0);
}
.w3-modal {
  display: block;
}
.light-gray-opac {
  background: rgba(211, 211, 211, 0.3);
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
</style>