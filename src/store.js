import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import PostsApi from './api/posts';
import CommentsApi from './api/comments';

export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },

    setComments(state, payload) {
      state.comments = payload
    },

    addComment(state, payload) {
      state.comments.push(payload)
    }
  },
  actions: {
    fetchPosts( { commit }) {
      PostsApi.index()
        .then(response => {
          let posts = response.data.data
          let comments = response.data.included ? response.data.included : []
          commit('setPosts', posts)
          commit('setComments', comments)
        })
    },

    addComment( { commit }, opts ) {
      let { id, content } = opts
      CommentsApi.add({
        id,
        content
      }).then(response => {
        commit('addComment', response.data.data)
      })
    }

  }
})

