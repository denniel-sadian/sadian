<template>
  <div>
    <div id="header-nav">
      <nav class="w3-bar w3-large w3-padding w3-text-white">
        <div class="w3-content">
          <nuxt-link to="/" class="w3-bar-item light-gray-opacity w3-round-xxlarge w3-button">
            <img src="~/assets/images/icon.jpg" width="25">
            <span class="w3-hide-small">Denniel Luis Sadian</span>
          </nuxt-link>
          <nuxt-link
            to="/portfolio"
            class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
          >
            <i class="fa fa-coffee"></i>
            <span class="w3-hide-small">Portfolio</span>
          </nuxt-link>
          <nuxt-link to="/blog" class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button">
            <i class="fa fa-book"></i>
            <span class="w3-hide-small">Blog</span>
          </nuxt-link>
          <button
            @click="contactShow = !contactShow"
            class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button w3-right"
          >
            <i class="fa fa-envelope"></i>
            <span class="w3-hide-small w3-hide-medium">Contact</span>
          </button>
          <nuxt-link
            :to="{name: 'portfolio-about'}"
            class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button w3-right"
          >
            <i class="fa fa-info-circle"></i>
            <span class="w3-hide-small w3-hide-medium">About</span>
          </nuxt-link>
        </div>
      </nav>

      <header class="w3-container w3-text-white w3-center w3-border-purple w3-bottombar">
        <h1>Welcome to my Website!</h1>
        <p class="w3-large">Hi, I'm Denniel! And I'm so glad that you found me!</p>
      </header>
    </div>

    <div class="intro-section w3-container w3-padding">
      <div class="w3-content w3-row">
        <div class="w3-col l7 m7 w3-padding">
          <h1 class="intro-heading">
            I'm a passionate programmer.
            <span class="w3-text-gray">I love to code.</span>
          </h1>
          <p class="intro-p">
            I mainly code in Python and JavaScript.
            I mostly work with Web Development. I use Django for back-end and
            Vue for front-end. I also have a little knowledge of some other languages.
            I can also do automation like web scraping. You can find my
            works in my
            <nuxt-link to="/portfolio" class="w3-hover-text-purple">portfolio</nuxt-link>.
          </p>
        </div>
        <div class="w3-col l5 m5 w3-center w3-padding">
          <img src="~/assets/images/binary.jpg" class="intro-img w3-round-xlarge w3-image">
        </div>
      </div>
    </div>

    <div class="w3-container">
      <div class="w3-content">
        <hr class="intro-sec-sep w3-border-purple">
      </div>
    </div>

    <div class="intro-section w3-container w3-padding">
      <div class="w3-content w3-row">
        <div class="w3-col w3-center l5 m5 w3-padding w3-hide-small">
          <img src="~/assets/images/pro.gif" class="w3-round-xlarge w3-image">
        </div>
        <div class="w3-col l7 m7 w3-padding">
          <h1 class="intro-heading">
            I'm currently in Senior High.
            <span
              class="w3-text-gray"
            >Currently waiting for graduation.</span>
          </h1>
          <p class="intro-p">
            After senior high, I'll take Computer Science in college. I'll continue to learn
            new things and build incredibly using the knowledge I'll be gaining there.
          </p>
        </div>
        <div class="w3-col w3-center l5 m5 w3-padding w3-hide-medium w3-hide-large">
          <img src="~/assets/images/pro.gif" class="w3-round-xlarge w3-image">
        </div>
      </div>
    </div>

    <div class="w3-container">
      <div class="w3-content">
        <hr class="intro-sec-sep w3-border-purple">
      </div>
    </div>

    <div class="intro-section w3-container w3-padding">
      <div class="w3-content w3-row">
        <div class="w3-col l7 m7 w3-padding">
          <h1 class="intro-heading">
            I want to get employed!
            <span class="w3-text-gray">I really want to.</span>
          </h1>
          <p class="intro-p">
            I want to get a job where I can apply my skills that I love.
            I interact nicely with other humans. As much as possible, I try to understand them
            and learn from them as well.
          </p>
        </div>
        <div class="w3-col l5 m5 w3-center w3-padding">
          <img src="~/assets/images/love_coding.png" class="intro-img w3-round-xlarge w3-image">
        </div>
      </div>
    </div>
    <Contact :show="contactShow" key="contact" @hide-contact-modal="contactShow = !contactShow"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Footer,
    Contact
  },
  data() {
    return { contactShow: false }
  },
  head() {
    return {
      title: 'Denniel Luis S. Sadian',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Greetings! Welcome to my website!'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
}
#header-nav {
  background: url('../assets/images/header.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
header h1 {
  font-size: 80px;
}
.light-gray-opacity {
  background: rgba(211, 211, 211, 0.3);
  margin-left: 2px;
  margin-right: 2px;
}
.intro-section {
  margin-top: 80px;
  margin-bottom: 80px;
}
.intro-heading {
  font-size: 50px;
  line-height: 1;
  margin-top: 80px;
}
.intro-p {
  font-size: 21px;
}
.intro-img {
  object-fit: cover;
}
@media (max-width: 768px) {
  header {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  header h1 {
    font-size: 60px;
  }
  .intro-heading {
    margin-top: 20px;
    font-size: 40px;
  }
}
@media (max-width: 425px) {
  header h1 {
    font-size: 50px;
  }
  header {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }
  .intro-section {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .intro-heading {
    margin-top: 10px;
    font-size: 30px;
  }
  .intro-p {
    font-size: 16px;
  }
}
</style>
