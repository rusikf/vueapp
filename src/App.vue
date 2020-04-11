<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <Navbar></Navbar>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

