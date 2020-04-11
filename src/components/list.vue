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
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>
            <Comments
              :count="item.comments.length"
              :comments="item.comments"
              :id="item.id"
              @add="addComment"
              >
            </Comments>
          </td>
          <td v-if="blogger">
            <form>
              <div class="form-check">
                <input type="checkbox" v-bind:checked="item.published" v-on:change="publishDraft(item.id, $event)" class="form-check-input" id="published">
              </div>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
      return this.blogger ? this.posts : this.posts.filter((post) => post.published)
    }
  },

  methods: {
    publishDraft(postId, event) {
      let published = event.currentTarget.checked
      PostsApi.update({ postId: postId, published: published })
    },
    addComment(newComment) {
      var post = this.posts.find((post) => { return post.id == newComment.post_id })
      var indexOfPost = this.posts.indexOf(post)
      var editedPost = {...post }
      editedPost.comments.push(newComment)

      this.$root.$set(this.posts, indexOfPost, editedPost)
    },
    fetchPosts() {
      PostsApi.index()
        .then(response => {
          this.posts = response.data
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
      posts: []
    })
  }
}
</script>
