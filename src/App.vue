<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <Navbar></Navbar>
          <div v-if="homepage">
            <List></List>
          </div>
          <div v-else>
            <PostForm></PostForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/list.vue'
import Navbar from './components/navbar.vue'
import PostForm from './components/postform.vue'

console.log('list', List)
export default {
  name: 'App',
  components: { List, Navbar, PostForm },
  computed: {
    homepage() {
      return window.location.pathname == '/'
    }
  }
}
</script>

