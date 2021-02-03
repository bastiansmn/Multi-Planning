<template>
   <div class="DayGrid">
      <div class="scrollDayGrid">
         <Hours/>
         <div class="dayContent">
            <Day v-for="items in getWeek" :key="items.date.toLocaleDateString()" :complete-date="items.date.toLocaleDateString()"/>
         </div>
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
   computed: {
      ...mapGetters(['getWeek'])
   },
   mounted() {
      document.querySelector(".DayGrid").scroll({
         top: 410,
         behavior: 'smooth',
      });
   }
}

</script>

<style scoped>
.DayGrid {
   display: flex;
   flex-direction: row;
   height: 80%;
   width: 100%;
   overflow-y: auto;
   overflow-x: hidden;
   margin-right: 5px;
}

.scrollDayGrid {
   overflow-y: hidden;
   overflow-x: hidden;
   width: 100%;
   height: max(100vh, 1462px);
   display: flex;
   flex-direction: row;
}

.DayGrid::-webkit-scrollbar {
   width: 6px;
}


.DayGrid::-webkit-scrollbar-thumb {
   background: #707070;
   border-radius: 15px;
}

.dayContent {
   padding-top: 11px;
   padding-bottom: 11px;
   max-height: 1440px;
   width: 95%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

</style>