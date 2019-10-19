<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <section v-html="$md.render(content)"></section>
  </div>
</template>

<script>
import contentful from '../../plugins/contentful'

export default {
  async asyncData ({ params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      const response = await contentful.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
      })

      return {post: response.items[0]}
    }
  },
  computed: {
    content () {
      return this.post.fields.content
    }
  },
  head () {
    return {
      title: this.post.fields.title
    }
  }
}
</script>