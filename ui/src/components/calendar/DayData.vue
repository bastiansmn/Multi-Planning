<template>
   <div class="DayData">
      <span>{{ getDayNumber }}</span>
      <h1 style="font-size: 1.4em;">{{ getStringDay.toUpperCase() }}</h1>
   </div>
</template>

<script>
export default {
   name: "DayData",
   props: {
      completeDate: {
         type: String,
         required: true
      },
      day: {
         type: String,
         required: true
      }
   },
   methods: {},
   computed: {
      getDayNumber() {
         return this.completeDate.substring(8, 10);
      },
      getStringDay() {
         return this.day;
      }
   }
}
</script>

<style scoped>
.DayData {
   display: flex;
   flex-direction: column;
   height: 70px;
   width: 15%;
   align-items: center;
   justify-content: space-between;
}

span {
   animation: textArriving ease-in-out 0.5s;
}

@keyframes textArriving {
   from {
      color: white;
   }
   to {
      color: #6b6b6b;
   }
}
</style>