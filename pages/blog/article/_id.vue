<template>
  <div :key="article.id">
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
      class="w3-margin-top w3-margin-right light-gray-opacity w3-hide-large w3-hide-medium w3-button w3-display-topright w3-text-white w3-round-xxlarge w3-large light-gray-opac"
    >
      <i class="fa fa-list-ul"></i> Archive
    </button>

    <div id="header-nav">
      <nav class="w3-bar w3-large w3-padding w3-text-white w3-hide-small">
        <nuxt-link to="/blog" class="w3-bar-item light-gray-opacity w3-round-xxlarge w3-button">
          <img src="~/assets/images/icon.jpg" width="25">
          <span class="w3-hide-small w3-hide-medium">Code Philosophy</span>
        </nuxt-link>
        <nuxt-link to="/" class="w3-bar-item light-gray-opacity w3-round-xxlarge w3-button">
          <span class="w3-hide-small">
            <i class="fa fa-home"></i>
          </span>
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-coffee"></i>
        </nuxt-link>
        <button
          @click="contactShow = !contactShow"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-envelope"></i>
        </button>
        <nuxt-link
          :to="{name: 'portfolio-about'}"
          class="light-gray-opacity w3-bar-item w3-round-xxlarge w3-button"
        >
          <i class="fa fa-info-circle"></i>
        </nuxt-link>
        <button
          @click="navShow = false; archiveShow = !archiveShow"
          class="w3-bar-item w3-button w3-right w3-text-white w3-round-xxlarge w3-large light-gray-opacity"
        >
          <i class="fa fa-list-ul"></i>
          <span class="w3-hide-medium">Archive</span>
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
        <h1 id="headline" class="animated fadeIn w3-padding">{{ article.headline }}</h1>
        <p class="w3-large animated fadeIn">{{ new Date(article.pub_date).toDateString() }}</p>
      </header>
    </div>

    <div class="w3-container ar-cont w3-margin">
      <div class="w3-content">
        <img
          :src="article.image"
          class="w3-image entry-image"
          style="background: rgba(211, 211, 211, 0.9)"
        >
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
  transition: 'bounce',
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
  computed: {
    art() {
      return this.article
    },
    id() {
      return this.$route.params.id
    }
  },
  watch: {
    $route: function(r) {
      this.getArticle(r.params.id)
      this.getComments(r.params.id)
    }
  },
  methods: {
    async getArticle(id) {
      var link = `https://denniel.herokuapp.com/blog/api/entries/${id}`
      await axios.get(link).then(res => {
        this.article = res.data
      })
    },
    async getComments(id) {
      var link = `https://denniel.herokuapp.com/blog/api/entries/${id}/comments`
      await axios.get(link).then(res => {
        this.comments = res.data
      })
    },
    search() {
      this.$router.push({ name: 'blog', query: { q: this.q } })
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://denniel.herokuapp.com/blog/api/entries/${params.id}`
    )
    return { article: data }
  },
  head() {
    return {
      title: this.article.headline,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.preview_content
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: this.article.headline
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: this.article.preview_content
        },
        {
          hid: 'preview_img',
          property: 'og:image',
          content: this.article.image
        },
        {
          hid: 'twitter-preview_img',
          name: 'twitter:image',
          content: this.article.image
        }
      ]
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>
header {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
}
#header-nav {
  background: url('../../../assets/images/header.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
header h1 {
  font-size: 60px;
  line-height: 1;
}
.light-gray-opacity {
  background: rgba(211, 211, 211, 0.3);
  margin-left: 2px;
  margin-right: 2px;
}
.entry-image {
  height: 300px;
  object-fit: cover;
  width: 100%;
}
@media (max-width: 768px) {
  header {
    padding-top: 90px !important;
    padding-bottom: 40px !important;
  }
  header h1 {
    font-size: 40px;
  }
}
@media (max-width: 425px) {
  header h1 {
    font-size: 30px;
  }
  header {
    padding-top: 80px !important;
    padding-bottom: 30px !important;
  }
  #content {
    font-size: 15px !important;
  }
  .entry-image {
    height: 180px;
  }
  .ar-cont {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>