<template>
   <div class="DayGrid">
      <Hours/>
      <div class="dayContent">
         <Day v-for="items in getWeek" :key="items.date.toISOString()" :complete-date="items.date.toISOString().substr(0, 10)"/>
      </div>
   </div>
</template>

<script>
import Day from "@/components/calendar/Day";
import Hours from "@/components/calendar/Hours";
import { mapGetters } from "vuex";

export default {
   name: "DayGrid",
   components: {
      Hours,
      Day,
   },
   props: {

   },
   computed: {
      ...mapGetters(['getWeek'])
   }
}

</script>

<style scoped>
.DayGrid {
   display: flex;
   flex-direction: row;
   height: 90%;
   margin-bottom: 100px;
   width: 100%;
   overflow-y: auto;
   overflow-x: hidden;
   margin-right: 5px;
}

.DayGrid::-webkit-scrollbar {
   width: 6px;
}


.DayGrid::-webkit-scrollbar-thumb {
   background: #707070;
   border-radius: 15px;
}

.dayContent {
   width: 95%;
   display: flex;
   height: 1440px;
   flex-direction: row;
   justify-content: space-around;
   transform: translateY(11px);
}

</style>