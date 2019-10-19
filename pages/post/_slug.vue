<template>
  <article>
    <h1>{{ post.fields.title }}</h1>
    <main v-html="$md.render(post.fields.content)"></main>
  </article>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  async asyncData ({store, params, payload}) {
    if (payload) {
      return { post: payload }
    }

    try {
      await store.dispatch('posts/getPostBySlug', params.slug)

      return { post: store.state.posts.currentPost }
    } catch (error) {
      console.log(Error(error))
    }
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