<template>
  <div v-show="actualNumber > 12">
    <div class="w3-container w3-center w3-margin-bottom">
      <span class="step-links">
        <nuxt-link
          v-if="pageNumber != 0"
          :to="previousLink"
          class="w3-button w3-purple w3-hover-pink w3-round-xxlarge"
        >
          <i class="fa fa-chevron-left"></i>￼
        </nuxt-link>
        <span v-else class="w3-button w3-gray w3-hover-pink w3-round-xxlarge">
          <i class="fa fa-chevron-left"></i>￼
        </span>

        <span class="current">{{ pageNumber+1 }} of {{ max + 1 }}</span>

        <nuxt-link
          v-if="pageNumber != max"
          :to="nextLink"
          style="text-decoration:none"
          class="w3-button w3-purple w3-hover-pink w3-round-xxlarge"
        >
          <i class="fa fa-chevron-right"></i>
        </nuxt-link>
        <span v-else class="w3-button w3-gray w3-hover-pink w3-round-xxlarge">
          <i class="fa fa-chevron-right"></i>￼
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
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
  watch: {
    $route: function(r) {
      if (r.query.q) {
        this.q = r.query.q
      }
    }
  },
  computed: {
    max() {
      return Math.floor(this.actualNumber / 12)
    },
    previousLink() {
      var link = { query: { page: this.pageNumber - 1 } }
      if (this.q != 0) link.query.q = this.q
      return link
    },
    nextLink() {
      var link = { query: { page: this.pageNumber + 1 } }
      if (this.q != 0) link.query.q = this.q
      return link
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>