import contentful from '../plugins/contentful'

export const state = () => ({
  posts: [],
  currentPost: {}
})

export const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  },

  SET_CURRENT_POST (state, payload) {
    state.currentPost = payload
  }
}

export const actions = {
  async getPosts ({commit}) {
    try {
      const { items } = await contentful.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      })

      if (items.length > 0) {
        commit('SET_POSTS', items)
      }
    } catch (error) {
      console.log(Error(error))
    }
  },

  async getPostBySlug ({commit}, slug) {
    try {
      const {items} = await contentful.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug
      })
      commit('SET_CURRENT_POST', items[0])
    } catch (error) {
      console.log(Error(error))
    }
  }
}
