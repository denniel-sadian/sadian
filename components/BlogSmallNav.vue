<template>
  <div>
    <transition-group
      name="small-nav"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
    >
      <nav
        id="small-nav"
        v-show="show"
        key="smallNav"
        class="w3-sidebar w3-bar-block w3-card-4 w3-hide-large w3-large w3-text-white"
      >
        <button class="w3-button w3-hide-large w3-large" @click="$emit('hide-small-nav')">
          <i class="fa fa-close"></i>
        </button>
        <form
          @submit.prevent="search(); $emit('hide-small-nav')"
          class="w3-bar-item w3-container w3-border-purple w3-bottombar"
        >
          <input
            v-model="q"
            type="text"
            class="w3-input w3-hover-light-gray w3-light-white w3-col s10"
            placeholder="Search article..."
            style="border:0px; border-radius:32px 0px 0px 32px"
            required
          >
          <button
            type="submit"
            class="w3-button w3-purple w3-hover-light-purple w3-col s2"
            style="border-radius:0px 32px 32px 0px"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
        <nuxt-link to="/" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-home"></i> Home
          </b>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-coffee"></i> Portfolio
          </b>
        </nuxt-link>
        <button class="w3-bar-item w3-button" @click="$emit('show-contact')">
          <b>
            <i class="fa fa-send"></i> Contact
          </b>
        </button>
        <nuxt-link :to="{name: 'portfolio-about'}" class="w3-bar-item w3-button">
          <b>
            <i class="fa fa-info-circle"></i> About Me
          </b>
        </nuxt-link>
      </nav>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return { q: '' }
  },
  methods: {
    search() {
      this.$router.push({ name: 'blog', query: { q: this.q } })
    }
  }
}
</script>

<style scoped>
nav {
  width: 70%;
  background: linear-gradient(#111111, #9c27b0);
}
@media (max-width: 425px) {
  nav {
    width: 100%;
  }
}
</style>