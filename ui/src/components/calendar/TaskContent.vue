<template>
   <div class="TaskContent">
      <div v-if="task.length !== 0" class="task">
         ({{ task.length }})
      </div>
      <div v-else class="add">
         <img :src="image" alt="Add">
      </div>
   </div>
</template>

<script>
export default {
   name: "TaskContent",
   data: function () {
      return {
         task: [

         ],
         image: "/assets/add.png"
      };
   }
}
</script>

<style scoped>
.TaskContent {
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 12%;
   border-radius: 10px;
}

.task {
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 0.9em;
   font-weight: 600;
   border-radius: 7px;
   height: 42px;
   width: 90%;
   background-color: #202020;
   cursor: pointer;
}

.task:hover {
   background-color: #707070;
   transform: scale(1.1);
}

.add {
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   height: 37px;
   width: 37px;
}

.add:hover {
   animation: 0.6s ease-in-out rota;
}

@keyframes rota {
   from {
      transform: rotate(0);
   }
   to {
      transform: rotate(180deg);
   }
}
</style>