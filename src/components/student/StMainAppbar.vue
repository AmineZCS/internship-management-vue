<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->

<script lang="ts">
import { mapActions } from "vuex";
import ToolbarNotifications from "../ToolbarNotifications.vue";
import ToolbarUser from "../ToolbarUser.vue";
export default {
  methods: {
    ...mapActions('user', ['logout']),
    toggleSidebar() {
      this.$store.commit('theme/TOGGLE_SIDEBAR');
    },
  },
  components:{
    ToolbarNotifications,
    ToolbarUser
  }
}
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!--App Bar -->
  <!-- ---------------------------------------------- -->
  <v-app-bar density="default" app>
    
    <div class="px-2 d-flex align-center justify-space-between w-100">
      <!-- ---------------------------------------------- -->
      <!-- NavIcon -->
      <!-- ---------------------------------------------- -->
      <v-app-bar-nav-icon
        @click="toggleSidebar"
      ></v-app-bar-nav-icon>
      

      <v-spacer></v-spacer>

      <div class="d-flex">
        
        <v-btn icon>
          <v-badge dot color="success">
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-badge>
        </v-btn>
        <ToolbarNotifications />
        
        <v-divider vertical thickness="2" inset class="ml-5 mr-1"></v-divider>

        <ToolbarUser /> 
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
