<template>
  <div>
    <Projects/>
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue'

export default {
  layout: 'portfolio',
  components: {
    Projects
  },
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
}
</script>

<style scoped>
</style>