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

      <Event v-for="event in weekEvents"
             :color="event.color"
             :duration="event.duration"
             :hour="event.hour"
             :minute="event.minute"
             :name="event.name"
             :key="event.id"/>
   </div>
</template>

<script>
import Event from "@/components/calendar/event/Event";
import api from "@/scripts/API";

export default {
   name: "Day",
   components: {
      Event,
   },
   props: {
      completeDate: {
         type: String,
         required: true
      },
   },
   data: function () {
      return {
         weekEvents: [] // Stores the JSON returned by each API call on the getEvents(String date) Java function
      }
   },
   beforeMount: function () {
      // Request API events
      api.getEvents(this.completeDate).then(response => {
         this.weekEvents = response.data;
      });
   }
}
</script>

<style scoped>
span, h1 {
   color: #707070;
}

.Day {
   position: relative;
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