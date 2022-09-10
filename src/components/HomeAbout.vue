<template>
    <div class="homeabout">
      <div class="homeabout-container">
        <div class="inner-homeabout-container">
            <div class="inner-homeabout-container-left">
                <div class="first">
                    <div class="first-portion1"><p>বেসিক থেকে শুরু হোক</p></div>
                    <div class="first-portion2"><p>শেখার নতুন জার্নি</p></div>
                </div>
                <div class="second">
                    <p>নতুন কিছু শিখতে চান? বেসিক থেকে শুরু করুন এবং এডভান্সড<br>লেভেলের দক্ষতা অর্জন করুন, সফলতা আসবেই ইনশাল্লাহ।</p>
                </div>
                <div class="third">
                    <button class="download-button">
                        <span style="margin-right:10px; color:white;"><img style="background-color: white; border-radius: 50%;" height="40" width="40" src="@/assets/images/Ellipse51.png"> অ্যাপটি ডাউনলোড করো </span>
                    </button>
                    
                </div>
            </div>
            <div class="inner-homeabout-container-right">
                <img class="responsive-image" width="484" height="328" src="@/assets/images/73243-happy-students-studying1.png" alt="happy students studying">
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
    .homeabout-container{
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
    .inner-homeabout-container{
        display: flex;
        width: 90%;
    }
    .inner-homeabout-container-left{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
    .first{
        display: flex;
        flex-direction: column;
        padding: 1% 0%;
    }
    .first-portion1 p{
        font-size: 150%;
        color: #00A5D6;
    }
    .first-portion2 p{
        margin-top: 10px;
        font-size: 240%;
        color: #0086AE;
    }
    .second{
        margin-top: 30px;
        padding: 1% 0%;
    }
    .second p {
        color: #676767;
    }
    .third{
        margin-top: 70px;
        padding: 1% 0%;
    }
    .download-button{
        text-decoration:none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        background-color: #0086AE;
        border-radius: 25px;
        padding: 0.5% 0.5%;
    }
    .download-button img, .download-button span{
        vertical-align:middle;
    }
    .inner-homeabout-container-right{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 40%;
    }
    .responsive-image {
        
        width: 100%;
        height: auto;
    }
  </style>
  