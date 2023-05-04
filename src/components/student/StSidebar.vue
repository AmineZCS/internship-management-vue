<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Notifications component -->
    <StNotificationsComp/>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app
      >
        <v-list
          density="compact"
          nav
        >
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          
          <v-list-item prepend-icon="mdi-account" title="Profile" value="Profile"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout" @click="logout"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'
import StNotificationsComp from './StNotificationsComp.vue';
export default {
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    StNotificationsComp,
  },
  methods: {
    ...mapActions('user', ['logout']),
  },
  

};
</script>



<style scoped>
v-list-item__content {
  display: flex;
  flex-direction: row;
}
</style>