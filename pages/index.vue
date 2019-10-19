<template>
  <div>
    <article v-for="{ sys, fields } in posts" v-bind:key="sys.id" class="post">
      <h2 class="home-header">
        <nuxt-link :to="{ name: 'post-slug', params: { slug: fields.slug } }">{{ fields.title }}</nuxt-link>
      </h2>
      <p>{{fields.excerpt}}</p>
    </article>
  </div>
</template>

<script>
import contentful from '../plugins/contentful'

export default {
  async asyncData () {
      const { items } = await contentful.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
      })

      return {posts: items}
  },
  head: {
    title: 'Home page'
  }
}
</script>

<style>
.post {
  margin-bottom: 2.5em;
}
</style>
