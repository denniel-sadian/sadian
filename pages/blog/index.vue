<template>
  <div>
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'

export default { layout: 'blog', components: { ArticleList } }
</script>

<style scoped>
</style>