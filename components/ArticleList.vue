<template>
  <div id="articles">
    <article class="w3-container w3-margin-top">
      <h2>
        <i class="fa fa-book"></i> Articles
      </h2>
      <div v-if="moddedArticles.length">
        <div
          v-for="a in pagedArticles"
          :key="a.id"
          class="animated fadeIn w3-col l4 m6 w3-container w3-margin-top w3-margin-bottom"
        >
          <div
            class="container w3-hover-shadow w3-border w3-border-purple w3-round-xlarge"
            @click="$router.push({path: '/blog/article/'+a.id, query: {reload: 0}})"
          >
            <img :src="a.image" :alt="a.headline" class="w3-image entry-image">
            <div class="content">
              <h4 class="heading">{{ a.headline }}</h4>
              <p class="w3-small">{{ new Date(a.pub_date).toDateString() }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="w3-center w3-text-red w3-padding w3-margin animated bounceIn">
        <h1>
          <i class="fa fa-exclamation-triangle"></i>
          <br>Sorry, I found none.
        </h1>
      </div>
      <ArticlePaginator :actualNumber="moddedArticles.length" :pageNumber="page"/>
    </article>
  </div>
</template>

<script>
import ArticlePaginator from '~/components/ArticlePaginator.vue'

export default {
  layout: 'blog',
  props: ['articles'],
  components: {
    ArticlePaginator
  },
  data() {
    return {
      moddedArticles: [],
      size: 9,
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
      return this.moddedArticles.slice(start, end)
    }
  },
  watch: {
    $route: function(r) {
      this.moddedArticles = []
      this.getArticles(r.query.q)
    }
  },
  methods: {
    getArticles(q) {
      var link = 'https://denniel.herokuapp.com/blog/api/entries/'
      if (q) {
        this.moddedArticles = this.articles.filter(function(a) {
          return a.headline.toLowerCase().includes(q.toLowerCase())
        })
        if (this.moddedArticles.length == 1) {
          this.$router.push({
            path: '/blog/article/' + this.moddedArticles[0].id,
            query: { reload: 0 }
          })
        } else this.foundNone = true
      } else this.moddedArticles = this.articles
    }
  },
  mounted() {
    this.getArticles(this.$route.query.q)
  }
}
</script>

<style scoped>
.entry-image {
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
  width: 100%;
}
.container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(#9c27b0, #111111);
}

.container img {
  vertical-align: middle;
  transition: 0.3s;
  width: 100%;
  border-radius: 15px;
}

.container img:hover {
  opacity: 0.5;
}

.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: #9c27b0;
  color: #f1f1f1;
  width: 100%;
  padding: 5px;
  transition: 0.3s;
  border-radius: 0px 0px 14px 14px;
}
.container .content h4 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

@media (max-width: 425px) {
  .w3-container {
    padding: 0px !important;
  }
}
</style>