<template>
   <div class="TaskContent">
      <div class="add">
         <img :src="image" alt="Add">
      </div>
      <div v-if="task.length !== 0" class="task">
         <!-- <ul style="list-style: none">
            <li v-for="items in tasks" :key="items.title">{{ items.title }}</li>
         </ul> -->
         ({{ task.length }})
      </div>
   </div>
</template>

<script>
export default {
   name: "TaskContent",
   data: function () {
      return {
         task: [
            {
               nom: "qldqbdqd"
            },
            {
               nom: "qldqbdqd"
            },
            {
               nom: "qldqbdqd"
            },
            {
               nom: "qldqbdqd"
            },
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
   width: 11%;
   border-radius: 10px;
   height: 43px;
}

.task {
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 0.9em;
   border-radius: 35px;
   height: 37px;
   width: 37px;
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