<template>
   <div class="DaysIndicators">
      <div class="dayDataContent">
         <DayData v-for="item in getWeek" :complete-date="item.date.toString()" :day="item.day" :key="item.day"/>
      </div>
   </div>
</template>

<script>
import DayData from "@/components/calendar/DayData";
import {mapGetters} from "vuex";

export default {
   name: "DaysIndicators",
   components: {DayData},
   props: {},
   computed: {
      ...mapGetters(['getYear', 'getWeek'])
   }
}
</script>

<style scoped>
.DaysIndicators {
   height: 10%;
   max-height: 300px;
   display: flex;
   width: 100%;
}

.dayDataContent {
   width: 95%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   margin-right: 6px;
   margin-left: max(5%, 70px);
}

div {
   color: #707070;
}
</style>