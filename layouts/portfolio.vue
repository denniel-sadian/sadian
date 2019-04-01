<template>
  <transition name="layout" mode="out-in">
    <div>
      <div
        id="sidebar_large"
        class="w3-text-white w3-sidebar w3-bar-block w3-card-4 w3-hide-medium w3-hide-small"
      >
        <div class="w3-bar-item w3-center w3-border-purple w3-bottombar">
          <img
            key="large_face"
            v-if="$route.name != 'portfolio-about'"
            src="~/assets/images/me.jpg"
            class="face animated fadeIn w3-image w3-circle w3-margin-top w3-card-4"
            width="150"
          >
          <img
            key="large_icon"
            v-else
            src="~/assets/images/icon.png"
            class="face animated fadeIn w3-image w3-circle w3-margin-top w3-card-4"
            width="150"
          >
          <h3>Denniel Luis Saway Sadian</h3>
        </div>
        <nuxt-link to="/" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
          <b>
            <i class="fa fa-home"></i> Home
          </b>
        </nuxt-link>
        <nuxt-link to="/blog" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
          <b>
            <i class="fa fa-book"></i> Blog
          </b>
        </nuxt-link>
        <button
          class="w3-bar-item w3-button w3-large w3-round-xxlarge"
          @click="contactShow = !contactShow; navShow = !navShow"
        >
          <b>
            <i class="fa fa-send"></i> Contact
          </b>
        </button>
        <nuxt-link
          :to="{name: 'portfolio-about'}"
          class="w3-bar-item w3-button w3-large w3-round-xxlarge"
        >
          <b>
            <i class="fa fa-info-circle"></i> About Me
          </b>
        </nuxt-link>
        <nuxt-link to="/admin" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
          <b>
            <i class="fa fa-gear"></i> Manage
          </b>
        </nuxt-link>
      </div>
      <transition-group
        name="small-nav"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <div
          v-show="navShow"
          id="sidebar_small"
          class="w3-sidebar w3-text-white w3-bar-block w3-card-4 w3-hide-large"
          key="1"
        >
          <button class="w3-button w3-hide-large w3-large" @click="navShow = !navShow">
            <i class="fa fa-close"></i>
          </button>
          <form
            @submit.prevent="search(); navShow = !navShow"
            class="w3-bar-item w3-container w3-border-purple w3-bottombar"
          >
            <input
              v-model="q"
              type="text"
              class="w3-input w3-hover-light-gray w3-light-white w3-col s10"
              placeholder="Search project..."
              style="border:0px; border-radius:32px 0px 0px 32px;"
              required="required"
            >
            <button
              type="submit"
              class="w3-button w3-purple w3-hover-purple w3-col s2"
              style="border-radius:0px 32px 32px 0px;"
            >
              <i class="fa fa-search"></i>
            </button>
          </form>
          <nuxt-link to="/" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
            <b>
              <i class="fa fa-home"></i> Home
            </b>
          </nuxt-link>
          <nuxt-link to="/blog" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
            <b>
              <i class="fa fa-book"></i> Blog
            </b>
          </nuxt-link>
          <button
            class="w3-bar-item w3-button w3-large w3-round-xxlarge"
            @click="contactShow = !contactShow; navShow = !navShow"
          >
            <b>
              <i class="fa fa-send"></i> Contact
            </b>
          </button>
          <button
            @click="navShow = !navShow; $router.push({name: 'portfolio-about'})"
            class="w3-bar-item w3-button w3-large w3-round-xxlarge"
          >
            <b>
              <i class="fa fa-info-circle"></i> About Me
            </b>
          </button>
          <nuxt-link to="/admin" class="w3-bar-item w3-button w3-large w3-round-xxlarge">
            <b>
              <i class="fa fa-gear"></i> Manage
            </b>
          </nuxt-link>
        </div>
      </transition-group>

      <header class="w3-container w3-text-white w3-border-purple w3-bottombar" style="padding:0px">
        <button
          class="w3-button w3-hide-large w3-large w3-hover-purple"
          @click="navShow = !navShow"
        >
          <i class="fa fa-bars"></i>
        </button>
        <form
          class="w3-container w3-hide-small w3-hide-medium w3-display-topright w3-margin-top"
          @submit.prevent="search(); navShow = !navShow"
        >
          <input
            v-model="q"
            type="text"
            class="w3-input w3-hover-light-gray w3-light-white w3-col s10"
            placeholder="Search project..."
            style="border:0px; border-radius:32px 0px 0px 32px;"
            required="required"
          >
          <button
            type="submit"
            class="w3-button w3-purple w3-hover-purple w3-col s2"
            style="border-radius:0px 32px 32px 0px;"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
        <h1 class="w3-padding w3-hide-small w3-margin-top">Welcome to my Portfolio</h1>
        <h1
          id="small-heading"
          class="w3-padding w3-hide-large w3-hide-medium w3-margin-top"
        >Denniel's Portfolio</h1>

        <Categories/>

        <div class="w3-padding w3-display-topright w3-hide-large">
          <nuxt-link :to="{name: 'portfolio-about'}">
            <img
              key="small_face"
              v-if="$route.name != 'portfolio-about'"
              src="~/assets/images/me.jpg"
              style="min-height:80px!important; max-height:80px!important"
              width="80"
              class="animated bounceIn face w3-image w3-circle w3-card"
            >
            <img
              key="small_icon"
              v-else
              src="~/assets/images/icon.png"
              style="min-height:80px!important; max-height:80px!important"
              width="80"
              class="face animated bounceIn w3-image w3-circle w3-card"
            >
          </nuxt-link>
        </div>
      </header>

      <div id="content" class="w3-container">
        <nuxt/>
      </div>

      <Contact :show="contactShow" key="contact" @hide-contact-modal="contactShow = !contactShow"/>

      <Footer/>
    </div>
  </transition>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Categories from '~/components/Categories.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Footer,
    Categories,
    Contact
  },
  data() {
    return {
      navShow: false,
      contactShow: false,
      q: ''
    }
  },
  methods: {
    search() {
      this.$router.push({ name: 'portfolio', query: { q: this.q } })
    }
  }
}
</script>

<style scoped>
header,
#footer,
.last-footer,
#content {
  margin-left: 25%;
}
#sidebar_large {
  display: block;
  width: 25%;
}
#sidebar_large,
#sidebar_small {
  background: #9c27b0;
  background: linear-gradient(#111111, #9c27b0);
}
#sidebar_large {
  width: 25%;
}
header {
  background: url('../assets/images/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
header,
body,
footer {
  background-size: cover;
}
.face {
  border: 4px solid white;
  max-height: 150px;
  min-height: 150px;
  object-fit: cover;
}
@media (max-width: 992px) {
  header,
  footer,
  .last-footer,
  #content {
    margin-left: 0%;
  }
  #sidebar_small {
    width: 50%;
  }
}
@media (max-width: 600px) {
  #sidebar_small {
    width: 85% !important;
  }
}
@media (max-width: 425px) {
  #small-heading {
    margin-top: 35px !important;
    font-size: 40px;
  }
}
@media (max-width: 992px) {
  header,
  #footer,
  .last-footer,
  #content {
    margin-left: 0%;
  }
  #sidebar_small {
    width: 50%;
  }
}
</style>