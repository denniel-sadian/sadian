<template>
  <div>
    <Projects/>
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue'

export default {
  transition: 'page',
  layout: 'portfolio',
  components: {
    Projects
  }
}
</script>

<style scoped>
</style>