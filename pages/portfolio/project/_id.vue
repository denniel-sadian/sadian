<template>
  <div>
    <div v-if="project.name">
      <h2 class="w3-center">{{ project.name }}</h2>

      <div class="w3-row">
        <div class="w3-margin-top w3-col m6 w3-padding">
          <div class="w3-center">
            <img :src="project.image" class="w3-image">
          </div>
        </div>
        <div
          class="w3-col m6 w3-padding w3-container w3-margin-top w3-white w3-border-purple w3-leftbar w3-round"
        >
          <dl>
            <dt class="w3-large w3-text-purple">Date created:</dt>
            <dd class="w3-margin-bottom">{{ project.date_created }}</dd>
            <dt class="w3-large w3-text-purple">Programming language/s:</dt>
            <dd class="w3-margin-bottom">{{ project.language_used }}</dd>
            <dt class="w3-large w3-text-purple">Type:</dt>
            <dd class="w3-margin-bottom">{{ project.category }}</dd>
            <dt class="w3-large w3-text-purple">Description:</dt>
            <dd class="w3-margin-bottom">{{ project.description }}</dd>
            <dt class="w3-large w3-text-purple">Source code:</dt>
            <dd v-if="project.link">
              You can find the source code
              <a
                :href="project.link"
                class="w3-text-red w3-hover-blue w3-large"
              >here</a>.
            </dd>
            <dd v-else>
              Source code not available. Please
              contact him if you want to have the source code. Denniel is very lazy.
              You could just visit him on github, maybe he has
              pushed the source code there.
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div v-else class="w3-center w3-text-purple w3-padding w3-margin">
      <i class="w3-large fa fa-spinner w3-spin"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'portfolio',
  data() {
    return { project: {} }
  },
  watch: {
    $route: function(r) {
      this.getProject(r.params.id)
    }
  },
  methods: {
    getProject(id) {
      axios
        .get('https://denniel.herokuapp.com/api/projects/' + id)
        .then(res => {
          this.project = res.data
        })
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://denniel.herokuapp.com/api/projects/${params.id}`
    )
    return { project: data }
  },
  head() {
    return {
      title: this.project.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: this.project.name
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: this.project.description
        },
        {
          hid: 'preview_img',
          property: 'og:image',
          content: this.project.image
        },
        {
          hid: 'twitter-preview_img',
          name: 'twitter:image',
          content: this.project.image
        }
      ]
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>
.w3-spin {
  font-size: 80px !important;
}
</style>