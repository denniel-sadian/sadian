<template>
  <div id="projects">
    <div v-if="moddedProjects.length">
      <h3 class="w3-text-purple">
        Total of
        <span
          class="w3-tag w3-round-xxlarge w3-purple w3-circle"
        >{{ moddedProjects.length }}</span>
      </h3>
      <div
        v-for="p in pagedProjects"
        :key="p.id"
        class="animated fadeIn w3-col l4 m6 w3-container w3-margin-top w3-margin-bottom"
      >
        <div
          class="container w3-hover-shadow w3-border w3-border-purple w3-round-xlarge"
          @click="
            $router.push({path: '/portfolio/project/'+p.id, query: {category:p.category}})"
        >
          <img :src="p.image" :alt="p.name" class="w3-image proj-image">
          <div class="content">
            <h4>{{ p.name }}</h4>
            <p class="w3-small">{{ new Date(p.date_created).toDateString() }}</p>
          </div>
        </div>
      </div>
      <projects-paginator :actualNumber="moddedProjects.length" :pageNumber="page"/>
    </div>

    <div v-else class="w3-center w3-text-red w3-padding w3-margin animated bounceIn">
      <h1>
        <i class="fa fa-exclamation-triangle"></i>
        <br>Sorry, I found none.
      </h1>
    </div>
  </div>
</template>

<script>
import ProjectsPaginator from '~/components/ProjectsPaginator.vue'

export default {
  transition: 'page',
  components: {
    ProjectsPaginator
  },
  props: ['projects'],
  data() {
    return {
      moddedProjects: [],
      size: 12,
      pageCount: 0,
      foundNone: false
    }
  },
  computed: {
    title() {
      if (this.$route.query.category) {
        return (
          this.$route.query.category.toUpperCase() + 'S of Denniel Luis Sadian'
        )
      } else {
        return 'Portfolio of Denniel Luis Sadian'
      }
    },
    description() {
      if (this.$route.query.category) {
        return (
          this.moddedProjects.length +
          ' ' +
          this.$route.query.category +
          's of Denniel Luis Sadian'
        )
      } else {
        return "Welcome to Denniel's Portfolio!"
      }
    },
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
      return this.moddedProjects.slice(start, end)
    }
  },
  watch: {
    $route: function(r) {
      this.moddedProjects = []
      this.getProjects(r.query.category, r.query.q)
    }
  },
  methods: {
    getProjects(c, q) {
      var link = 'https://denniel.herokuapp.com/api/projects/'
      if (q) {
        this.moddedProjects = this.projects.filter(function(p) {
          return p.name.toLowerCase().includes(q.toLowerCase())
        })
        if (this.moddedProjects.length == 1) {
          this.$router.push({
            path: '/portfolio/project/' + this.moddedProjects[0].id,
            query: { category: this.moddedProjects[0].category }
          })
        } else this.foundNone = true
      } else if (c) {
        this.moddedProjects = this.projects.filter(function(p) {
          return p.category == c
        })
      } else this.moddedProjects = this.projects
    }
  },
  mounted() {
    this.getProjects(this.$route.query.category, this.$route.query.q)
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>

<style scoped>
.w3-spin,
.fa-exclamation-triangle {
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