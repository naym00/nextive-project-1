<template>
  <div class="home">
    <NavBar></NavBar>
    <HomeAbout></HomeAbout>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HomeAbout from '@/components/HomeAbout.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeAbout,
  }
}
</script>
