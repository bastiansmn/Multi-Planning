<template>
   <div class="Day" :id="completeDate">
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour">
      </div>
   </div>
</template>

<script>

export default {
   name: "Day",
   props: {
      completeDate: {
         type: String,
         required: true
      }
   }
}
</script>

<style scoped>
span, h1 {
   color: #707070;

}

.Day {
   width: 15%;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.hour {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 75%;
   margin: auto;
}

.hour::before {
   content: "";
   position: absolute;
   width: 85%;
   height: 1px;
   opacity: 0.5;
   top: -1px;
   background-color: #6b6b6b;
}

.quarter {
   top: 20%;
   height: 15px;
   width: 120%;
   cursor: pointer;
}


</style>