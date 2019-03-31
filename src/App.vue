<template>
  <div id="app">
    <b-navbar toggleable="lg">
      <b-container>
        <b-navbar-brand href="#">SeatPlan</b-navbar-brand>
      </b-container>
    </b-navbar>

    <div class="section-hero">
      <b-container>
        <h1>Add a photo</h1>
        <p>Add a photo from your seat</p>
      </b-container>
    </div>

    <b-container>
      <AddPhoto/>
    </b-container>
  </div>
</template>

<script>
import AddPhoto from './components/AddPhoto.vue'

export default {
  name: 'app',
  components: {
     AddPhoto
  }
}
</script>
