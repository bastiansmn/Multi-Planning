<template>
   <div class="Tasks">
      <div class="tasksList">
         <TaskContent />  <!-- Tache du lundi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du mardi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du mercredi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du jeudi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du vedredi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du samedi de la semaine de l'année à chercher dans la BDD -->
         <TaskContent />  <!-- Tache du dimanche de la semaine de l'année à chercher dans la BDD -->
      </div>
   </div>
</template>

<script>
import TaskContent from "@/components/calendar/TaskContent";
export default {
   name: "Tasks",
   components: {TaskContent},
   props: {

   },

}
</script>

<style scoped>
.Tasks {
   position: absolute;
   bottom: 0;
   padding-bottom: 5px;
   width: 87%;
   display: flex;
   height: 70px;
   background-color: white;
}

.tasksList {
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 95%;
   margin-left: 5%;
   margin-right: 9px;
}
</style>