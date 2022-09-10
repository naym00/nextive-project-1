<template>
  <div class="newcourseplan-">

    <div class="newcourseplan">
        <div class="course-heading">
            <p>নতুন কোর্সসমূহ</p>
        </div>
        <div class="course-topic">
            <NewCourses :newCoursesInformation="newCoursesInformation"></NewCourses>
        </div>
        <div class="course-details">
            <a class="details-a" href = "#">সবগুলো নতুন কোর্স দেখুন</a>
        </div>
    </div>

  </div>
</template>

<script>
    import NewCourses from './NewCourses.vue'
    import courses from "@/assets/jsonFiles/newCourses/newcourses.json";
export default {
    name: 'NewcoursePlan',
  components: {
    NewCourses,
  },
  data(){
    return {
        newCoursesInformation: JSON.parse(JSON.stringify(courses)),
    }
  }
};
</script>

<style scoped>
.newcourseplan {
  display: flex;
  flex-direction: column;
  background-color: #F3FCFF;
  padding: 10px 0;
}
.course-heading{
    display: flex;
    justify-content: center;
    margin: 10px 0;
}
.course-heading p{
    font-family: Hind Siliguri;
    font-size: 32px;
    font-weight: 600;
    line-height: 52px;
    letter-spacing: 0em;
    text-align: left;

}
.course-topic{
    margin: 10px 0;
}
.course-details{
    display: flex;
    justify-content: center;
    margin: 10px 0;

}
.details-a{
    display: flex;
    justify-content: center;
    align-items: center;
        padding: 5px 25px;
        color: white;
        text-decoration:none;
        border: none;
        height: 45px;
        border-radius: 5px;
        background-color: #006696;
        cursor: pointer;
    }
</style>
