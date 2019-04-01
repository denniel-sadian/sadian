<template>
  <div>
    <article class="w3-container w3-margin-top">
      <h2>
        <i class="fa fa-book"></i> Articles
      </h2>
      <div v-if="articles.length">
        <div
          v-for="a in pagedArticles"
          :key="a.id"
          class="w3-card-4 w3-margin-top w3-margin-bottom"
          style="border-radius: 5px 5px 5px 5px"
        >
          <div v-if="a.image">
            <img :src="a.image" class="w3-image entry-image" style="border-radius: 5px 5px 0 0">
          </div>
          <div
            class="w3-container preview-text w3-white w3-border-purple w3-bottombar"
            style="border-radius: 0 0 5px 5px"
          >
            <p class="w3-large">
              {{ a.headline }}
              <br>
              <span class="w3-small">
                <i class="fa fa-calendar"></i>
                {{ new Date(a.pub_date).toDateString() }}
              </span>
            </p>
            <p class="shorter-content w3-border-bottom w3-border-purple">{{ a.preview_content }}</p>
            <nuxt-link
              :to="{name: 'blog-detail', query: {id: a.id, reload: 0}}"
              class="w3-button w3-purple w3-margin-bottom w3-right w3-round-xxlarge"
            >
              <b>
                <i class="fa fa-eye"></i> Read more
              </b>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else-if="!foundNone" class="w3-center text-purple" style="font-size: 80px">
        <i class="fa fa-spinner w3-text-black w3-spin"></i>
      </div>
      <div v-else class="w3-center w3-text-red w3-padding w3-margin animated bounceIn">
        <h1>
          <i class="fa fa-exclamation-triangle"></i>
          <br>Sorry, I found none.
        </h1>
      </div>
      <ArticlePaginator :actualNumber="articles.length" :pageNumber="page"/>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import ArticlePaginator from '~/components/ArticlePaginator.vue'

export default {
  layout: 'blog',
  components: {
    ArticlePaginator
  },
  data() {
    return {
      articles: [],
      size: 5,
      pageCount: 0,
      foundNone: false
    }
  },
  computed: {
    page() {
      var n = 0
      if (this.$route.query.page) {
        n = Number(this.$route.query.page)
      }
      return n
    },
    pagedArticles() {
      var start = this.page * this.size
      var end = start + this.size
      return this.articles.slice(start, end)
    }
  },
  watch: {
    $route: function(r) {
      this.articles = []
      this.getArticles(r.query.q)
    }
  },
  methods: {
    getArticles(q) {
      var link = 'https://denniel.herokuapp.com/blog/api/entries/'
      if (q) link += '?q=' + q
      axios.get(link).then(res => {
        this.articles = res.data
        if (this.articles.length) {
          this.pageCount = Math.ceil(this.articles.length / this.size)
          this.foundNone = false
          if (this.articles.length == 1) {
            this.$router.push({
              name: 'blog-detail',
              query: { id: this.articles[0].id, reload: 0 }
            })
          }
        } else this.foundNone = true
      })
    }
  },
  created() {
    this.getArticles(this.$route.query.q)
  }
}
</script>

<style scoped>
.shorter-content {
  max-height: 100px;
  overflow: hidden;
}
.entry-image {
  height: 300px;
  object-fit: cover;
  width: 100%;
}
@media (max-width: 425px) {
  .entry-image {
    height: 120px;
  }
  .shorter-content {
    max-height: 50px;
    line-height: 1.3;
  }
  .preview-text {
    line-height: 1;
  }
}
</style>