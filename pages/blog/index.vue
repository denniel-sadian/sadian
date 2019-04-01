<template>
  <div>
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'

export default {
  layout: 'blog',
  components: { ArticleList },
  head() {
    return {
      title: 'Code Philosophy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to the blog of Denniel Luis Sadian!'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>