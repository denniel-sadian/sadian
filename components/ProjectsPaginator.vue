<template>
  <div v-show="actualNumber > 12">
    <div class="w3-container w3-center w3-margin-bottom">
      <span class="step-links">
        <button
          @click="goPrevious()"
          v-if="pageNumber != 0"
          class="w3-button w3-purple w3-hover-pink w3-round-xxlarge"
        >
          <i class="fa fa-chevron-left"></i>
        </button>
        <span v-else class="w3-button w3-gray w3-hover-pink w3-round-xxlarge">
          <i class="fa fa-chevron-left"></i>
        </span>

        <span>{{ pageNumber + 1 }} of {{ max + 1 }}</span>

        <button
          @click="goNext()"
          v-if="pageNumber != max"
          style="text-decoration:none"
          class="w3-button w3-purple w3-hover-pink w3-round-xxlarge"
        >
          <i class="fa fa-chevron-right"></i>
        </button>
        <span v-else class="w3-button w3-gray w3-hover-pink w3-round-xxlarge">
          <i class="fa fa-chevron-right"></i>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actualNumber: {
      type: Number
    },
    pageNumber: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { q: '' }
  },
  computed: {
    max() {
      var m = this.actualNumber / 12
      return Math.floor(m)
    },
    previousLink() {
      var link = { query: { page: this.pageNumber - 1 } }
      if (this.$route.query.q) link.query.q = this.$route.query.q
      if (this.$route.query.category)
        link.query.category = this.$route.query.category
      return link
    },
    nextLink() {
      var link = { query: { page: this.pageNumber + 1 } }
      if (this.$route.query.q) link.query.q = this.$route.query.q
      if (this.$route.query.category)
        link.query.category = this.$route.query.category
      return link
    }
  },
  methods: {
    goPrevious() {
      this.$scrollTo('#projects', 0, { force: true })
      this.$router.push(this.previousLink)
    },
    goNext() {
      this.$scrollTo('#projects', 0, { force: true })
      this.$router.push(this.nextLink)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>