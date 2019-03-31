<template>
  <div v-show="actualNumber > 5">
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

        <span>{{ pageNumber + 1 }} of {{ max }}</span>

        <nuxt-link
          v-if="pageNumber + 1 != max"
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
      var m = this.actualNumber / 5
      if (!(m % 1 === 0)) m += 1
      return Math.floor(m)
    },
    id() {
      return this.$route.query.id
    },
    previousLink() {
      var link = { query: { page: this.pageNumber - 1, id: this.id } }
      return link
    },
    nextLink() {
      var link = { query: { page: this.pageNumber + 1, id: this.id } }
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