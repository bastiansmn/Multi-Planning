<template>
   <div id="app">
      <div class="root">
         <div id="nav" style="width: 45px; min-width: 45px;">
            <div class="topNav">
               <router-link to="/home">
                  <div><span v-show="isNavBarShown">ACCUEIL</span><img src="../public/assets/home.png" alt="Home icon"
                                                                       class="navBarImages"></div>
               </router-link>
               <router-link to="/my-calendar" @load="initWeek">
                  <div><span v-show="isNavBarShown">CALENDRIERS</span><img src="../public/assets/calendar.png"
                                                                           alt="Calendar" class="navBarImages">
                  </div>
               </router-link>
            </div>
            <div class="bottomNav">
               <router-link to="/settings">
                  <div><span v-show="isNavBarShown">PARAMETRES</span><img src="../public/assets/settings.png"
                                                                          alt="Settings" class="navBarImages"></div>
               </router-link>
            </div>
         </div>
         <router-view/>
      </div>
   </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
   computed: {
      ...mapGetters(['isNavBarShown']),
   },
   methods: {
      ...mapActions(['initWeek'])
   }
}


</script>

<style scoped>
.root {
   display: flex;
}

#nav {
   min-width: 50px;
   max-width: 300px;
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: space-between;
   height: 100vh;
   background-color: #202020;
   box-shadow: #6b6b6b 2px 0 15px;
   z-index: 50;
}

#nav div a {
   display: flex;
   transition: all 0.42s ease;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 90px;
   text-decoration: none;
   font-size: 22px;
   font-weight: 800;
   color: white;
   background: linear-gradient(to right, white, white 50%, #ff00e9 55%, #3423ff);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-size: 200% 100%;
   background-position: 0;
}

#nav div a div {
   display: flex;
   align-items: center;
   justify-content: center;
   width: 240px;
   height: 50px;
}

#nav a:hover {
   background-position: -100%;
}

.bottomNav:hover img {
   animation: 10s cubic-bezier(.11, 0, .09, 1) settingsRoll;
}

.navBarImages {
   width: 37px;
   height: 37px;
}

@keyframes settingsRoll {
   0% {
      transform: rotate(0);
   }
   85% {
      transform: rotate(2164deg);
   }
   93% {
      transform: rotate(2158deg);
   }
   100% {
      transform: rotate(2160deg);
   }
}
</style>
