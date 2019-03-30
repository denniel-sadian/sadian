<template>
  <div>
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
              <li>
                <nuxt-link
                  :to="{name: 'blog-detail', query: {id: a[0]}}"
                  class="w3-hover-purple"
                  style="text-decoration:none"
                >
                  <span class="w3-large w3-opacity">({{ a[1] }})</span>
                  {{ a[2] }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else class="w3-center text-purple" style="font-size: 80px">
      <i class="fa fa-spinner w3-text-black w3-spin"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { lists: [] }
  },
  created() {
    axios.get('http://127.0.0.1:8000/blog/api/archive/').then(res => {
      this.lists = res.data
    })
  }
}
</script>