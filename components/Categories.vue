<template>
  <div>
    <div v-if="categories.length != 0">
      <div class="w3-container w3-margin-bottom">
        <div id="large-category" class="w3-bar w3-hide-small w3-large">
          <nuxt-link
            to="/portfolio"
            class="w3-bar-item w3-button"
            :class="{'w3-light-gray': category, 'w3-purple': !category}"
          >All</nuxt-link>
          <nuxt-link
            v-for="cat in categories"
            :key="cat"
            :to="{'name': 'portfolio', query: {'category': cat}}"
            class="w3-bar-item w3-button w3-purple"
            :class="{'w3-light-gray': cat != category, 'w3-purple': cat == category}"
          >{{ cat }}</nuxt-link>
        </div>
        <div class="w3-large w3-dropdown-hover w3-margin-bottom w3-hide-medium w3-hide-large">
          <button class="w3-button w3-purple w3-round-xxlarge">
            <i class="fa fa-caret-down"></i>
            <span v-if="$route.name != 'portfolio'">Categories</span>
            <span v-else-if="!$route.query.category && $route.name == 'portfolio'">All</span>
            <span v-else>{{ category }}</span>
          </button>
          <div
            class="w3-dropdown-content w3-center w3-bar-block w3-border w3-card-4 w3-round-xxlarge"
          >
            <nuxt-link
              v-for="cat in categories"
              :key="cat"
              v-show="cat != category"
              :to="{'name': 'portfolio', query: {'category': cat}}"
              class="w3-bar-item w3-button w3-light-gray w3-round-xxlarge"
            >{{ cat }}</nuxt-link>
            <nuxt-link
              to="/portfolio"
              v-if="category"
              class="w3-bar-item w3-button w3-light-gray w3-round-xxlarge"
            >All</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <i v-else class="w3-margin w3-padding w3-large fa fa-spinner w3-spin"></i>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      projects: {}
    }
  },
  computed: {
    categories() {
      var cats = []
      for (var i in this.projects) {
        var p = this.projects[i]
        if (!cats.includes(p.category)) cats.push(p.category)
      }
      return cats
    },
    category() {
      return this.$route.query.category
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/projects/').then(res => {
      this.projects = res.data
    })
  }
}
</script>

<style scoped>
#large-category a:first-child {
  border-radius: 32px 0px 0px 32px;
}
#large-category a:last-child {
  border-radius: 0px 32px 32px 0px;
}
a,
span {
  text-transform: capitalize;
}
</style>