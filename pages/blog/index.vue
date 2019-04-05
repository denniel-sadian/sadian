<template>
  <div>
    <ArticleList :articles="articles"/>
  </div>
</template>

<script>
import axios from 'axios'
import ArticleList from '~/components/ArticleList.vue'

export default {
  layout: 'blog',
  components: { ArticleList },
  async asyncData() {
    const { data } = await axios.get(
      `https://denniel.herokuapp.com/blog/api/entries/`
    )
    return { articles: data }
  },
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