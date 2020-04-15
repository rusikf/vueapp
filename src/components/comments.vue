<template>
  <div>
    <p>Total comments {{ count }}</p>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.attributes.content }}</li>
    </ul>
    <form v-on:submit.prevent="onSubmit($event)">
      <div class="form-group">
        <textarea v-model="content" class="form-control" id="content" rows="2" placeholder="Add comment"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
<script>
  import CommentsApi from '../api/comments';
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
        CommentsApi.add({
          id: this.id,
          content: this.content
        }).then(response => {
          this.$emit('add', response.data)
        })
      }
    }
  }
</script>
