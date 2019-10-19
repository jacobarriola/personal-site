<template>
  <article>
    <h1>{{ post.fields.title }}</h1>
    <main v-html="$md.render(post.fields.content)"></main>
  </article>
</template>

<script>
export default {
  async asyncData ({store, params, payload}) {
    if (payload) {
      return { post: payload }
    }
    
    await store.dispatch('posts/getPostBySlug', params.slug)
    
    return { post: store.state.posts.currentPost }
  },

  head () {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: `description`,
          name: `description`,
          content: this.post.fields.excerpt
        }
      ]
    }
  }
}
</script>