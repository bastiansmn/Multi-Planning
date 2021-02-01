<template>
   <div class="Tasks">
      <TaskContent/>  <!-- Tache du lundi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du mardi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du mercredi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du jeudi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du vendredi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du samedi de la semaine de l'année à chercher dans la BDD -->
      <TaskContent/>  <!-- Tache du dimanche de la semaine de l'année à chercher dans la BDD -->
   </div>
</template>

<script>
import TaskContent from "@/components/calendar/TaskContent";

export default {
   name: "Tasks",
   components: {TaskContent},
   props: {},

}
</script>

<style scoped>
.Tasks {
   padding-left: max(5%, 70px);
   padding-right: 6px;
   height: 10%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
}
</style>