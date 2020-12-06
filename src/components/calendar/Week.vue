<template>
   <div class="Week">
      <!-- TODO : Add animations and fix CSS probs (animations when changing weeks, fix grid size when bigger/smaller etc) -->
      <DaysIndicators/>
      <DayGrid/>
      <Tasks/>
   </div>
</template>

<script>
import DayGrid from "@/components/calendar/DayGrid";
import DaysIndicators from "@/components/calendar/DaysIndicators";
import Tasks from "@/components/calendar/Tasks";

export default {
   name: "Week",
   components: {
      Tasks,
      DaysIndicators,
      DayGrid
   },
   props: {

   },
   computed: {

   }
}
</script>

<style scoped>
.Week {
   height: 100vh;
   width: 100%;
   margin: 10px 2px 0 0;
   animation: 0.8s ease-in-out arrives;
}

@keyframes arrives {
   from {
      opacity: 0;
      transform: translateY(-30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}
</style>