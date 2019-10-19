<template>
  <article>
    <h1>{{ currentPost.fields.title }}</h1>
    <main v-html="$md.render(currentPost.fields.content)"></main>
  </article>
</template>

<script>
export default {
  computed: {
    currentPost() {
      return this.$store.state.posts.currentPost
    }
  },

  async fetch({store, params}) {
    try {
      await store.dispatch('posts/getPostBySlug', params.slug)
    } catch (error) {
      console.log(Error(error))
    }
  },

  head () {
    return {
      title: this.currentPost.fields.title,
      meta: [
        {
          hid: `description`,
          name: `description`,
          content: this.currentPost.fields.excerpt
        }
      ]
    }
  }
}
</script>