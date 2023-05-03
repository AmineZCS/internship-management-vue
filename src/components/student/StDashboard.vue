<template>
  <v-app>
   
    <StSidebar/>
    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import StSidebar from './StSidebar.vue';

export default {
  name: 'StDashboard',
  components: {
    StSidebar,
 
  },
  methods: {
    
    
}
}
</script>
<style scoped>

</style>