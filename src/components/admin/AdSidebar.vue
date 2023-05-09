<template>
  <v-app-bar app
>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Notifications component -->
    <notificationsComp/>
    <v-chip link>
              <v-badge dot bottom color="green" offset-y="10" offset-x="10">
                <v-avatar size="40">
                  <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-avatar>
              </v-badge>
              <span class="ml-3">Jane Smith</span>
            </v-chip>
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
import notificationsComp from '../notificationsComp.vue';
export default {
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    notificationsComp,
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