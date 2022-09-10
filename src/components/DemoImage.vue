<template>
  <div class="demoimage">
    <div class="demoimage-container">
      <div class="demoimage-container-img">
        <img
          class="responsive-image"
          src="../assets/images/Rectangle358.png"
          alt="banner image"
        />
      </div>
      <div class="three-dot-container">
        <div class="dot-1">
            <svg style="color:rgba(0, 134, 174, 0.18);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/></svg>
        </div>
        <div class="dot-2">
            <svg style="color:#0086AE;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/></svg>
        </div>
        <div class="dot-3">
            <svg style="color:rgba(0, 134, 174, 0.18);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.demoimage-container{
  display: flex;
  flex-direction: column;
  background-color: #f3fcff;
  padding: 10px 0;
}
.demoimage-container-img{
    display: flex;
  justify-content: center;
  padding: 10px 0;
}
.three-dot-container{
    display: flex;
  justify-content: center;
  padding: 10px 0;
}
.three-dot-container div{
    margin: 0 5px;
}
.responsive-image {
          
          width: 100%;
          height: auto;
      }
</style>
