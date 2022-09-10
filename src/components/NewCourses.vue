<template>
  <div class="newcourses">
    <div class="container">
      <div class="inner-container">
        <div
          class="card-container"
          v-for="singleCourseInformation in newCoursesInformation"
          :key="singleCourseInformation.id"
        >
          <SingleCard :singleInformation="singleCourseInformation"></SingleCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";
export default {
  name: "NewCourses",
  props: ["newCoursesInformation"],
  components: {
    SingleCard,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.inner-container {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.card-container {
  display: flex;
  flex-direction: column;
  width: 32%;
  border: 1px solid black;
  border-radius: 20px;
}
</style>
