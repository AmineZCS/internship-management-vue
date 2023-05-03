<template>
  <v-app>
    <NavBar/>
    <v-content>
      <Welcome/>
      <AboutUs/>
      <test/>
      <contactUs/>
    </v-content>
    <router-view></router-view>
  </v-app>
</template>

<script>

import NavBar from '../components/NavBar.vue';
import Welcome from '../components/Welcome.vue';
import AboutUs from '../components/AboutUs.vue';

import test from '../components/test.vue';
import contactUs from '../components/contactUs.vue';

export default {
  name: 'HomeVue',
  components: { NavBar, Welcome , AboutUs  , test, contactUs},
  data: () => ({
    //
  }),
};
</script>
<style scoped>
body{
  padding: 0;
  }
</style>