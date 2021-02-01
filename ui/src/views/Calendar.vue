<template>
   <div class="Calendar">
      <div class="menuBar">
         <div class="leftSideMenuBar">
            <ul>
               <li v-if="isNavBarShown" @mousedown="switchNavBar"><img src="../../public/assets/back-arrow.png" alt="Back arrow" class="switchNavbar"></li>
               <li v-else @mousedown="switchNavBar"><img src="../../public/assets/burger-button.png" alt="Burger button" class="switchNavbar"></li>
               <li @mousedown="previousWeek"><img src="../../public/assets/left-arrow.png" alt="Left Arrow"></li>
               <li @mousedown="nextWeek"><img src="../../public/assets/right-arrow.png" alt="Right Arrow"></li>
               <li style="min-width: 220px; justify-content: start; padding-left: 14px; letter-spacing: 1px; font-weight: 600;">{{ getMonth }} {{ getYear }}</li>
            </ul>
         </div>
         <div class="rightSideMenuBar">
            <label>
               <input v-if="showResearch" type="text" placeholder="Rechercher un évenement" class="researchInput">
            </label>
            <img @mousedown="swapReasearch" src="../../public/assets/search.png" alt="Search button" class="rideSideMenuBar">
         </div>
      </div>
      <div class="calendarContent">
         <!-- TODO : Add a router-view and router-links to able to load any personnal calendar in the component -->
         <WidgetGrid/>
         <Week />
      </div>
   </div>
</template>

<script>
import WidgetGrid from "@/components/calendar/WidgetGrid";
import { mapGetters, mapActions } from "vuex";
import Week from "@/components/calendar/Week";

export default {
   name: "Calendar",
   components: {
      Week,
      WidgetGrid
   },
   data: function () {
      return {
         showResearch: false
      };
   },
   methods: {
      switchNavBar() {
         const nav = document.getElementById("nav");
         const divContent = document.querySelectorAll("#nav div a div");

         if (this.isNavBarShown) {
            nav.style.width = "50px"
            nav.style.minWidth = "50px";
            for (let i = 0; i < divContent.length; i++) {
               divContent[i].style.justifyContent = "center";
            }
         } else {
            nav.style.minWidth = "300px";
            nav.style.width = "300px";
            for (let i = 0; i < divContent.length; i++) {
               divContent[i].style.justifyContent = "space-between";
            }
         }

         this.$store.dispatch("switchNavState");
      },
      swapReasearch() {
         this.showResearch = !this.showResearch;
      },
      ...mapActions(['previousWeek', 'nextWeek'])
   },
   computed: {
      ...mapGetters(['isNavBarShown', 'getMonth', 'getYear']),
   },
   beforeCreate() {
      this.$store.dispatch('initWeek');
   }
}

</script>

<style scoped>
.Calendar {
   display: flex;
   flex-direction: column;
   width: 100%;
}

img {
   cursor: pointer;
   height: 30px;
   width: 30px;
}

img:hover {
   transform: scale(1.2);
}

img:active {
   animation: 1s ease-in-out scaleUp;
}

.menuBar {
   background-color: #707070;
   z-index: 10;
   color: white;
   height: 45px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-weight: 800;
   animation: .8s ease-in-out menuBarComing;
}

.menuBar div {
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.leftSideMenuBar ul {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   list-style: none;
   width: 380px;
   margin-left: 5px;
}

li {
   height: 30px;
   width: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
}

.rideSideMenuBar {
   margin-right: 15px;
   height: 30px;
}

.calendarContent {
   display: flex;
   position: absolute;
   z-index: 2;
   right: 0;
   margin-top: 45px;
   height: calc(100% - 45px);
   width: calc(100% - 50px);
}

.switchNavbar {
   animation: ease-in-out 0.8s opacityC;
}

.researchInput {
   border: none;
   outline: none;
   height: 28px;
   margin-right: 20px;
   background-color: white;
   width: 200px;
   color: #707070;
   border-radius: 20px;
   padding-left: 10px;
   font-weight: 600;
   animation: 0.5s ease-in-out widthUp;
}

.researchInput::placeholder {
   color: #707070;
}

@keyframes scaleUp {
   0% {
      transform: scale(1.2);
   }
   50% {
      transform: scale(1.4);
   }
   100% {
      transform: scale(1.2);
   }
}

@keyframes menuBarComing {
   from {
      transform: translateY(-100%);
      opacity: 0;
   }
   to {
      transform: translateY(0);
      opacity: 1;
   }
}

@keyframes widthUp {
   from {
      width: 0;
   }
   to {
      width: 200px;
   }
}
</style>