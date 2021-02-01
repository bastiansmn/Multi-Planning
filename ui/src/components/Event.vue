<template>
   <div class="Event">
      <span>{{ name }}</span>
      <span>{{ hour }}</span>
   </div>
</template>

<script>
export default {
   name: "Event",
   props: {
      name: {
         type: String,
         required: true,
         default: "Your event"
      },
      hour: {
         type: String,
         required: true
      },
      color: {
         type: String,
         required: true,
      }
   }
}
</script>

<style scoped>
.Event {
   width: 90%;
   height: 110px;
   background-color: aqua;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   font-weight: 500;
}
</style>