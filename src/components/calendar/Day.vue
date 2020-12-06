<template>
   <div class="Day">
      <div class="hour">
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
      </div>
      <div class="hour"><div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div>
         <div class="quarter"></div></div>
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
   height: 100vh;
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
   width: 100%;
   height: 1px;
   top: -1px;
   background-color: #707070;
}

.quarter {
   top: 20%;
   height: 15px;
   width: 120%;
   cursor: pointer;
}


</style>