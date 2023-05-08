<template>
  <v-app >
    
    <AdSidebar/>
    
    <v-content>
      
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import AdSidebar from './AdSidebar.vue';
export default {
  name: 'AdDashboard',
  components: {
    AdSidebar,
 
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