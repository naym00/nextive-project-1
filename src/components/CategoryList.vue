<template>
    <div class="categorylist">
      <div class="categorylist-container">
        <div class="inner-categorylist-container">
            <div class="inner-categorylist-container-up"><p>বেছে নিন আপনার পছন্দের ক্যাটাগরি<br>আর শুরু  করুন আত্মবিশ্বাসের সাথে</p></div>
            <div class="inner-categorylist-container-down">
                <div class="inner-categorylist-container-down-80">
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/briefcase2.png"> চাকরি প্রস্তুতি </span>
                        </button>
                    </div>
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/test2.png"> এক্সাম ব্যাচ </span>
                        </button>
                    </div>
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/contract2.png"> এডমিশন টেস্ট </span>
                        </button>
                    </div>
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/graduate2.png"> একাডেমিক কোর্সসমূহ </span>
                        </button>
                    </div>
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/eng2.png"> ইংলিশ ল্যাঙ্গুয়েজ </span>
                        </button>
                    </div>
                    <div>
                        <button class="download-button">
                            <span><img width="50" height="50.09" src="@/assets/images/solution1.png"> স্কিল ডেভেলপমেন্ট </span>
                        </button>
                    </div>
                </div>
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
    .categorylist-container{
        display: flex;
        justify-content: center;
        margin-top: 35px;
        background-color: rgba(186, 239, 255, 0.4);
    }
    .inner-categorylist-container{
        display: flex;
        flex-direction: column;
        width: 90%;
        padding:2% 0%;
        
    }
    .inner-categorylist-container-up{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2% 0;
    }
    .inner-categorylist-container-up p {
        font-family: 'Hind Siliguri';
        font-size: 36px;
        font-weight: 600;
        color: #303030;
    }
    .inner-categorylist-container-down{
        display: flex;
        justify-content: center;
    }
    .inner-categorylist-container-down-80{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
    }
    .inner-categorylist-container-down-80 div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 71px;
        margin: 10px 25px;
        border-radius: 10px;
        background-color:aliceblue;

    }
    .download-button{
        text-decoration:none;
        border: none;
        cursor: pointer;
        background-color: white;
    }
    .download-button img, .download-button span{
        vertical-align:middle;
    }
  </style>
  