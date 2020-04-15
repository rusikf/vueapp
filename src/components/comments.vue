<template>
  <div>
    <p>Total comments {{ count }}</p>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.attributes.content }}</li>
    </ul>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <textarea v-model="content" class="form-control" id="content" rows="2" placeholder="Add comment"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Comments',
    props: {
      comments: Array,
      count: Number,
      id: Number
    },
    data: function() {
      return({
        content: null
      })
    },
    methods: {
      onSubmit() {
        let id = this.id
        let content = this.content
        this.addComment({
          id,
          content
        })
      },
      ...mapActions([
        'addComment'
      ])
    }
  }
</script>
