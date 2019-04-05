<template>
  <div>
    <Projects :projects="projects"/>
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue'
import axios from 'axios'

export default {
  layout: 'portfolio',
  components: {
    Projects
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://denniel.herokuapp.com/api/projects/`
    )
    return { projects: data }
  }
}
</script>

<style scoped>
</style>