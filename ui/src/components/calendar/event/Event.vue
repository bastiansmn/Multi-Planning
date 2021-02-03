<template>
   <div class="Event" :class="getGradientColor() + '-gradient'">
      <!-- TODO : Show main event infos -->
   </div>
</template>

<script>
export default {
   name: "Event",
   props: {
      name: {
         type: String,
         required: true,
      },
      hour: {
         type: String,
         required: true
      },
      color: {
         type: String,
         required: true,
         default: "#00ffff"
      },
      duration: {
         type: Number,
         required: true,
         default: 120
      }
   },
   methods: {
      getGradientColor() {
         switch (this.color) {
            case "#00ffff":
               return "cyan";
            case "#ff0000":
               return "red";
            case "#0000ff":
               return "blue";
            case "#ffff00":
               return "yellow";
         }
      }
   },
   data: function () {
      return {

      };
   },
   mounted: function () {

      /*
      const translateY = (this.hour - 1) * 60 + this.minute;

      let endHour = (this.hour + (Math.ceil(this.duration / 60) - 1) + (this.minute + (this.duration % 60) >= 60 ? 1 : 0)) + ":" + (((this.minute + (this.duration % 60)) % 60) < 10 ? "0" + (this.minute + (this.duration % 60)) % 60 : (this.minute + (this.duration % 60)) % 60);

      day.innerHTML += ("<div class="component' style='background: " + grad + "; transform: translateY(" + translateY + "px); height: " + height + "px'>" + this.name + "<br>" + this.hour + ":" + (this.minute < 10 ? "0" + this.minute : this.minute) + " - " + endHour + "</div>");
       */
   }
}
</script>

<style scoped>
.Event {
   position: absolute;
   height: 110px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   font-weight: 500;
}

.red-gradient {
   background: linear-gradient(117deg, rgba(245,67,84,1) 0%, rgba(176,0,130,1) 100%);
}

.cyan-gradient {
   background: linear-gradient(117deg, rgba(0,233,236,1) 0%, rgba(3,200,113,1) 100%);
}

.yellow-gradient {
   background: linear-gradient(117deg, rgba(255,238,0,1) 0%, rgba(255,181,0,1) 100%);
}

.blue-gradient {
   background: linear-gradient(117deg, rgba(208,1,254,1) 0%, rgba(34,12,228,1) 100%);
}
</style>