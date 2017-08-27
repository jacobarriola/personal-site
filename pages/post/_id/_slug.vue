<template>
  <div>
    <h1>{{ post.title }}</h1>
    <section v-html="content"></section>
  </div>
</template>

<script>
import axios from 'axios'
import Marked from 'marked'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://cdn.contentful.com/spaces/4pywjkutx049/entries/${params.id}`, {
      params: {
        access_token: 'a70d2276fb3f46ebc664b8aeab91d5cc7ee6ef7f9b6d2ce0aa8bdc56abb2d6b3'
      }
    })
    return { post: data.fields }
  },
  computed: {
    content () {
      return Marked(this.post.content)
    }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>