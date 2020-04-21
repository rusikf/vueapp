<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-group row">
      <div class='col-4'>
        <label for="title">Title</label>
        <input v-model="title" type="text" class="form-control" id="title" aria-describedby="title">
      </div>
    </div>
    <div class="form-group row ">
      <div class='col-4'>
        <label for="content">Content</label>
        <textarea v-model="content" class="form-control" id="content" rows="3"></textarea>
      </div>
    </div>

    <button type="submit" class="btn btn-primary ml-0">Submit</button>
  </form>
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
        let params = {
          data: {
            type: 'posts',
            attributes: { title: this.title, content: this.content }
          }
        }

        PostsApi.create(params)
          .then(() => { this.$router.push({ name: 'blogger_root' }) })
      }
    }
  }
</script>
