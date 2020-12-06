<template>
   <div class="WidgetGrid">
      <Widget/>
   </div>
</template>

<script>
import Widget from "@/components/Widget";

export default {
   name: "WidgetGrid",
   components: {Widget}
}
</script>

<style scoped>
.WidgetGrid {
   width: 15%;
   height: 100%;
}
</style>