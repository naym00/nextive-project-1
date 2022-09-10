<template>
  <div class="home">
    <NavBar></NavBar>
    <HomeAbout></HomeAbout>
    <CategoryList></CategoryList>
    <NewCourses></NewCourses>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import CategoryList from '@/components/CategoryList.vue'
import NewCourses from '@/components/NewCourses.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeAbout,
    CategoryList,
    NewCourses,
  }
}
</script>
