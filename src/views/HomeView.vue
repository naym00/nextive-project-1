<template>
  <div class="home">
    <NavBar></NavBar>
    <HomeAbout></HomeAbout>
    <CategoryList></CategoryList>
    <NewcoursePlan></NewcoursePlan>
    <FamouscoursePlan></FamouscoursePlan>
    <DemoImage></DemoImage>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HomeAbout from '@/components/HomeAbout.vue';
import CategoryList from '@/components/CategoryList.vue';
import NewcoursePlan from '@/components/NewcoursePlan.vue';
import FamouscoursePlan from '@/components/FamouscoursePlan.vue';
import DemoImage from '@/components/DemoImage.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeAbout,
    CategoryList,
    NewcoursePlan,
    FamouscoursePlan,
    DemoImage,
  }
}
</script>
