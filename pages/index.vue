<template>
  <div>
    <article v-for="{ sys, fields } in posts" v-bind:key="sys.id" class="post">
      <h2 class="home-header">
        <nuxt-link :to="{ name: 'post-id-slug', params: { slug: fields.slug, id: sys.id } }">{{ fields.title }}</nuxt-link>
      </h2>
      <p>{{fields.excerpt}}</p>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    let { data } = await axios.get(`https://cdn.contentful.com/spaces/4pywjkutx049/entries/`, {
      params: {
        access_token: 'a70d2276fb3f46ebc664b8aeab91d5cc7ee6ef7f9b6d2ce0aa8bdc56abb2d6b3'
      }
    })
    return { posts: data.items }
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
