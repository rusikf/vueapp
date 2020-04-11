<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="">Vue blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" :to="{ name: 'root' }">Home</router-link>
        <router-link class="nav-item nav-link" to="/posts/new">New post</router-link>
        <router-link class="nav-item nav-link" :to="{ name: 'blogger_root' }">As blogger</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Navbar'
  }
</script>
