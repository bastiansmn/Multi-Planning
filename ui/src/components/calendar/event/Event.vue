<template>
   <div class="Event" :class="getGradientColor() + '-gradient'" :style="eventStyle">
      <div class="eventInfos" v-if="this.duration >= 60">
         <span>{{ this.name }}</span>
         <span>{{ String(this.hour).padStart(2, '0') }}:{{ String(this.minute).padStart(2, '0') }} -
            {{ String(this.hour + Math.trunc((this.duration / 60)) + (this.duration % 60 + this.minute > 60 ? 1 : 0)).padStart(2, '0') }}:{{ String((this.minute + (this.duration % 60)) % 60).padStart(2, '0') }}</span>
      </div>
      <div class="eventInfos" v-else-if="this.duration < 60 && this.duration >= 30">
         <span>{{ this.name }}</span>
      </div>
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
         type: Number,
         required: true
      },
      minute: {
         type: Number,
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
      },
   },
   data: function () {
      return {
         eventStyle: {
            height: this.duration-10 +'px',
            top: 4 + (this.hour * 60) + this.minute + 'px',
            borderRadius: Math.log(this.duration) * 1.7 + 'px' // Adjust the factor to round events angles
         }
      };
   },
}
</script>

<style scoped>
.Event {
   width: 85%;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
}

.Event:hover {
   transform: scale(1.03);
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

.eventInfos {
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   font-weight: 600;
}
</style>