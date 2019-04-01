<template>
  <div>
    <transition-group
      name="archive"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <nav
        v-show="show"
        key="archive"
        id="archive"
        class="w3-sidebar w3-bar-block w3-display-topright w3-text-white"
      >
        <button class="w3-button w3-right w3-large" @click="$emit('hide-archive')">
          <i class="fa fa-close"></i>
        </button>
        <h3 class="w3-bar-item w3-border-purple w3-bottombar">
          <i class="fa fa-archive"></i> Blog Archive
        </h3>
        <ul v-if="lists.length != 0" class="w3-ul">
          <li v-for="(obj, year) in lists" :key="year">
            <span class="w3-large" style="padding:2px">{{ year }}</span>
            <ul class="w3-ul w3-border-purple w3-leftbar">
              <li v-for="(obj1, month) in obj" :key="month">
                <span class="w3-large" style="padding:2px">{{ month }}</span>
                <ul
                  v-for="a in obj1"
                  :key="a[0]"
                  class="w3-ul w3-border-purple w3-leftbar list_for_March_2019"
                >
                  <li
                    @click="goTo(a[0])"
                    class="w3-hover-purple w3-large"
                    :class="{'w3-text-yellow': $route.params.id == a[0]}"
                  >
                    <span class="w3-opacity">({{ a[1] }})</span>
                    {{ a[2] }}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div v-else class="w3-center text-purple" style="font-size: 80px">
          <i class="fa fa-spinner w3-text-purple w3-spin"></i>
        </div>
      </nav>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['show'],
  data() {
    return { lists: [] }
  },
  methods: {
    goTo(id) {
      this.$emit('hide-archive')
      this.$router.push({ path: '/blog/article/' + id, query: { reload: 0 } })
    }
  },
  created() {
    axios.get('https://denniel.herokuapp.com/blog/api/archive/').then(res => {
      this.lists = res.data
    })
  }
}
</script>

<style scoped>
nav {
  background: linear-gradient(#111111, #9c27b0);
}
nav {
  width: 80%;
}
@media (min-width: 768px) {
  nav {
    width: 40%;
  }
}
@media (max-width: 425px) {
  nav {
    width: 100%;
  }
}
</style>