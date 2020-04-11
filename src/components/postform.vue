<template>
  <div class="container">
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="text" class="form-control" id="title" aria-describedby="title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model="content" class="form-control" id="content" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import PostsApi from '../api/posts';

  export default {
    name: 'PostForm',
    data() {
      return({
        title: null,
        content: null
      })
    },
    methods: {
      onSubmit() {
        let params = { title: this.title, content: this.content }
        PostsApi.create(params)
          .then(() => { this.$router.push({ name: 'blogger_root' }) })
      }
    }
  }
</script>
