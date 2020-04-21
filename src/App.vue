<template>
  <mdb-container fluid>
    <Navbar></Navbar>
    <div class='mt-3'>
      <router-view></router-view>
    </div>
  </mdb-container>
</template>

<script>
import Navbar from './components/navbar.vue';
import { mdbContainer } from "mdbvue";
export default {
  name: "App",
  components: {
    mdbContainer,
    Navbar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>

