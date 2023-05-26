<template>
  <v-app >
    
    <SpSidebar/>
    <SpMainAppbar/>
    <v-main
    class="main-container"
    v-touch="{
      left: () => (left()),
      right: () => (right()),
    }"
  >
    <!-- <GlobalLoading /> -->
    <ToolBox />
    <div class="flex-fill">
      <router-view/>
    </div>
  </v-main>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import SpSidebar from './SpSidebar.vue';
import SpMainAppbar from './SpMainAppbar.vue';
export default {
  name: 'SpDashboard',
  components: {
    SpSidebar,
    SpMainAppbar
  },
  methods: {
    apply() {
      // handle apply button click
    },
    left(){
      this.$store.commit('theme/CLOSE_SIDEBAR');
    },
    right(){
      this.$store.commit('theme/OPEN_SIDEBAR');
    },
    ...mapActions('user', ['checkAuthentication']),
  },
}
</script>
<style scoped>
.scrollnav {
  height: calc(100vh - 326px);
}
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>