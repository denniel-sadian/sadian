<template>
  <div>
    <BlogSmallNav
      :show="navShow"
      @hide-small-nav="navShow = !navShow"
      @show-contact="contactShow = !contactShow; navShow = false"
    />

    <button
      class="w3-button w3-hide-large w3-left w3-large w3-text-white"
      @click="navShow = !navShow; archiveShow = false"
      style="background: none"
    >
      <i class="fa fa-bars"></i>
    </button>
    <button
      @click="navShow = false; archiveShow = !archiveShow"
      class="w3-margin-top w3-margin-right light-gray-opacity w3-hide-large w3-button w3-display-topright w3-text-white w3-round-xxlarge w3-large light-gray-opac"
    >
      <i class="fa fa-list-ul"></i> Archive
    </button>

    <div id="header-nav">
      <nav class="w3-bar w3-large w3-padding w3-text-white w3-hide-medium w3-hide-small">
        <nuxt-link to="/blog" class="w3-bar-item light-gray-opacity w3-round-xxlarge w3-button">
          <img src="~/assets/images/icon.png" width="25">
          <span class="w3-hide-small">Code Philosophy</span>
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-id-card"></i>
          <span class="w3-hide-small">Portfolio</span>
        </nuxt-link>
        <button
          @click="contactShow = !contactShow"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-envelope"></i>
          <span class="w3-hide-small w3-hide-medium">Contact</span>
        </button>
        <nuxt-link
          :to="{name: 'portfolio-about'}"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-info-circle"></i>
          <span class="w3-hide-small w3-hide-medium">About</span>
        </nuxt-link>
        <button
          @click="navShow = false; archiveShow = !archiveShow"
          class="w3-bar-item w3-button w3-right w3-text-white w3-round-xxlarge w3-large light-gray-opacity"
        >
          <i class="fa fa-list-ul"></i>
          <span class="w3-hide-large">Archive</span>
        </button>
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
            style="border:0px; padding:8px; 0px 4.5px 0px; border-radius:32px 0px 0px 32px"
            required
          >
          <button
            type="submit"
            class="w3-button w3-purple w3-hover-gray w3-col s2"
            style="padding:8px; 0px 4.5px 0px; border-radius:0px 32px 32px 0px"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </nav>

      <header class="w3-container w3-text-white w3-center w3-border-purple w3-bottombar">
        <h1 id="headline" class="w3-padding">{{ article.headline }}</h1>
        <p class="w3-large">{{ new Date(article.pub_date).toDateString() }}</p>
      </header>
    </div>

    <div class="w3-container w3-margin">
      <div class="w3-content w3-margin-top w3-margin-bottom">
        <img :src="article.image" class="w3-image entry-image">
        <div id="content" v-html="article.content" class="w3-large"></div>
        <button
          v-if="article.can_comment"
          class="w3-button w3-round-xxlarge w3-purple w3-right w3-margin-bottom"
          @click="commentShow = !commentShow"
        >
          <b>
            <i class="fa fa-commenting"></i>
            Comment
          </b>
        </button>
        <p v-else class="w3-opacity w3-right">Commenting was turned off</p>
        <BlogComments/>
      </div>
    </div>
    <BlogCommentForm :show="commentShow" @hide-comment="commentShow = !commentShow"/>

    <BlogArchive :show="archiveShow" @hide-archive="archiveShow = !archiveShow; navshow=false"/>
    <Contact :show="contactShow" key="contact" @hide-contact-modal="contactShow = !contactShow"/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import BlogArchive from '~/components/BlogArchive.vue'
import BlogSmallNav from '~/components/BlogSmallNav.vue'
import BlogCommentForm from '~/components/BlogCommentForm.vue'
import BlogComments from '~/components/BlogComments.vue'
import Footer from '~/components/Footer.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    BlogArchive,
    BlogSmallNav,
    BlogCommentForm,
    BlogComments,
    Footer,
    Contact
  },
  data() {
    return {
      article: {},
      comments: [],
      navShow: false,
      contactShow: false,
      archiveShow: false,
      commentShow: false,
      q: ''
    }
  },
  watch: {
    $route: function(r) {
      this.getArticle(r.query.id)
    }
  },
  methods: {
    getArticle(id) {
      var link = 'http://127.0.0.1:8000/blog/api/entries/' + id
      axios.get(link).then(res => {
        this.article = res.data
      })
      axios.get(link + '/comments').then(res => {
        this.comments = res.data
      })
    },
    search() {
      this.$router.push({ name: 'blog', query: { q: this.q } })
    }
  },
  created() {
    this.getArticle(this.$route.query.id)
  }
}
</script>

<style scoped>
header {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
}
#header-nav {
  background: url('../../assets/images/header.png');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
header h1 {
  font-size: 70px;
  line-height: 1;
}
.light-gray-opacity {
  background: rgba(211, 211, 211, 0.3);
  margin-left: 2px;
  margin-right: 2px;
}
@media (max-width: 768px) {
  header {
    padding-top: 90px !important;
    padding-bottom: 40px !important;
  }
  header h1 {
    font-size: 60px;
  }
}
@media (max-width: 425px) {
  header h1 {
    font-size: 50px;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  header {
    padding-top: 80px !important;
    padding-bottom: 30px !important;
  }
  #content {
    font-size: 15px !important;
  }
}
.entry-image {
  height: 300px;
  object-fit: cover;
  width: 100%;
}
@media (max-width: 425px) {
  .entry-image {
    height: 180px;
  }
}
</style>