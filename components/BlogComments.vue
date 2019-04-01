<template>
  <div>
    <div
      v-if="comments.length"
      id="commentSection"
      class="w3-container w3-margin-bottom"
      style="padding-left:0px; padding-right:0px"
    >
      <div class="w3-container w3-light-gray" id="article-comments">
        <h4>
          There
          <span v-if="comments.length > 1">
            are
            <b class="w3-text-red">{{ comments.length }}</b>
            comments
          </span>
          <span v-else>
            is
            <b class="w3-text-red">{{ comments.length }}</b>
            comment
          </span>
        </h4>
        <div
          v-for="i in pagedComments"
          class="w3-container w3-white w3-margin-bottom w3-border-purple w3-leftbar"
        >
          <p>
            <i class="fa fa-user-circle"></i>
            <span class="w3-large">{{ i.full_name }}</span>
            <br>
            <i class="fa fa-calendar"></i>
            <span class="w3-small">{{ new Date(i.when).toDateString() }}</span>
          </p>
          <p>
            <i class="fa fa-long-arrow-right"></i>
            {{ i.content }}
          </p>
        </div>
        <div class="w3-center w3-margin-bottom">
          <span class="step-links"></span>
          <BlogCommentsPaginator :actualNumber="comments.length" :pageNumber="page"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BlogCommentsPaginator from '~/components/BlogCommentsPaginator.vue'

export default {
  components: { BlogCommentsPaginator },
  data() {
    return {
      comments: [],
      size: 5,
      pageCount: 0
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
    pagedComments() {
      var start = this.page * this.size
      var end = start + this.size
      return this.comments.slice(start, end)
    }
  },
  watch: {
    $route: function(r) {
      this.getComments(r.params.id)
    }
  },
  methods: {
    getComments(id) {
      var link = 'https://denniel.herokuapp.com/blog/api/entries/' + id
      axios.get(link + '/comments').then(res => {
        this.comments = res.data
        this.pageCount = Math.ceil(this.comments.length / this.size)
      })
    }
  },
  created() {
    this.getComments(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>