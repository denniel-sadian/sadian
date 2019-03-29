<template>
  <div>
    <div v-if="projects.length">
      <h3 class="w3-text-purple">
        Total of
        <span
          class="w3-tag w3-round-xxlarge w3-purple w3-animate-opacity w3-circle"
        >{{ projects.length }}</span>
      </h3>
      <div
        v-for="p in pagedProjects"
        :key="p.id"
        class="w3-animate-zoom w3-col l4 m6 w3-container w3-margin-top w3-margin-bottom"
      >
        <div
          class="container w3-hover-shadow w3-border w3-border-purple w3-round-xlarge"
          @click="
            $router.push({
              name: 'portfolio-detail',
              query: { id: p.id, category: p.category }
            })"
        >
          <img :src="p.image" :alt="p.name" class="w3-image proj-image">
          <div class="content">
            <h4>{{ p.name }}</h4>
            <p class="w3-small">{{ p.date_created }}</p>
          </div>
        </div>
      </div>
      <projects-paginator :actualNumber="projects.length" :pageNumber="page"/>
    </div>

    <div v-else class="w3-center w3-text-purple w3-padding w3-margin">
      <i class="w3-large fa fa-spinner w3-spin"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProjectsPaginator from '~/components/ProjectsPaginator.vue'

export default {
  components: {
    ProjectsPaginator
  },
  data() {
    return {
      projects: [],
      size: 12,
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
    pagedProjects() {
      var start = this.page * this.size
      var end = start + this.size
      return this.projects.slice(start, end)
    }
  },
  watch: {
    $route: function(r) {
      this.projects = []
      this.getProjects(r.query.category)
    }
  },
  methods: {
    getProjects(c) {
      var link
      if (c) link = 'https://denniel.herokuapp.com/api/projects/?category=' + c
      else link = 'https://denniel.herokuapp.com/api/projects/'
      axios.get(link).then(res => {
        this.projects = res.data
        this.pageCount = Math.ceil(this.projects.length / this.size)
      })
    }
  },
  created() {
    this.getProjects(this.$route.query.category)
  }
}
</script>

<style scoped>
.w3-spin {
  font-size: 80px !important;
}
.proj-image {
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
  overflow: hidden;
  transition: 0.3s;
  border-radius: 0px 0px 14px 14px;
}
.container .content h4 {
  white-space: nowrap;
}
</style>