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
export default {
  async fetch({store, params}) {
    await store.dispatch('posts/getPosts', params.slug)
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  head: {
    title: 'Home'
  }
}
</script>

<style>
.post {
  margin-bottom: 2.5em;
}
</style>
