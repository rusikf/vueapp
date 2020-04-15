<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Comments</th>
          <th scope="col" v-if="blogger">Published</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filtered" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ attrs(item).title }}</td>
          <td>{{ attrs(item).content }}</td>
          <td>
            <Comments
              :count="33"
              :comments="fullComments(item)"
              :id="+item.id"
              @add="addComment"
              >
            </Comments>
          </td>
          <td v-if="blogger">
            <form>
              <div class="form-check">
                <input type="checkbox" v-bind:checked="attrs(item).published" v-on:change="publishDraft(item.id, $event)" class="form-check-input" id="published">
              </div>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/* eslint-disable no-debugger */
import Comments from './comments.vue';
import PostsApi from '../api/posts';
export default {
  name: 'List',
  components: { Comments },
  computed: {
    blogger() {
      return this.$route.path == '/as_blogger'
    },

    filtered() {
      return this.blogger ? this.posts : this.posts.filter((post) => this.attrs(post).published)
    }
  },

  methods: {
    fullComments(post) {
      return this.comments.filter((comment) => comment.attributes['post-id'].toString() == post.id )
    },
    attrs(post) {
      return post.attributes
    },
    publishDraft(postId, event) {
      console.log('postId', postId)
      let published = event.currentTarget.checked
      PostsApi.update({ postId: postId, published: published })
    },
    addComment(newComment) {
      this.comments.push(newComment.data)
    },
    fetchPosts() {
      PostsApi.index()
        .then(response => {
          this.posts = response.data.data
          this.comments = response.data.included ? response.data.included : []
        })
    }
  },
  created() {
    this.fetchPosts()
  },
  watch: {
    '$route': 'fetchPosts'
  },
  data() {
    return ({
      message: 'I am list message',
      posts: [],
      comments: []
    })
  }
}
</script>
