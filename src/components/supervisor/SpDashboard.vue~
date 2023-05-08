<template>
  <v-app >
    
    <SpSidebar/>
    
    <v-content>
      
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import SpSidebar from './SpSidebar.vue';
export default {
  name: 'SpDashboard',
  components: {
    SpSidebar,
 
  },
  methods: {
    apply() {
      // handle apply button click
    },
    ...mapActions('user', ['checkAuthentication']),
  },
}
</script>
<style >
body {
  padding-left: 78px;
}
</style>