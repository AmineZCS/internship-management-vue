<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          
          <v-list-item prepend-icon="mdi-account" title="Profile" value="Profile"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'Profile', icon: 'mdi-account' },
        { title: 'Settings', icon: 'mdi-cog' },
        { title: 'Logout', icon: 'mdi-logout' },
      ],
    };
  },
};
</script>
<style scoped>
v-list-item__content {
  display: flex;
  flex-direction: row;
}
</style>