
<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import notificationsComp from '../notificationsComp.vue';
import MainMenu from "./MainMenu.vue";
import backendUrl from "../../backendConfig.js";


export default {
  data() {
    return {
      drawer: true,
      backendUrl,
      menu :[
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.dashboard",
          text: "Dashboard",
          link: "/Student",
          icon: "mdi-view-dashboard-outline",
        },
      ],
    },
    // applied internships
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.appliedInternships",
          text: "Applied Internships",
          link: "/Student/Applications",
          icon: "mdi-briefcase-search-outline",
        },
      ],
    },
    // evaluations
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.evaluation",
          text: "Evaluation",
          link: "/Student/Evaluation",
          icon: "mdi-file-document-edit-outline",
        },
      ],
    },
    // attendance
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.attendance",
          text: "Attendance",
          link: "/Student/Attendance",
          icon: "mdi-calendar-check-outline",
        },
      ],
    },
    {
      text: "",
      key: "",
      items: [
        {
        icon: "mdi-cog-outline",
        key: "menu.settings",
        text: "Settings",
        link: "/Student/Settings",
      },
    ],
    },
  ]
      
    };
  },
  components: {
    notificationsComp,
    MainMenu,
  },
  methods: {
    ...mapActions('user', ['logout']),
    toggleSidebar() {
      this.$store.commit('theme/TOGGLE_SIDEBAR');
    },
  },
  computed: {
    ...mapGetters('theme', ['miniSidebar','mainSidebar']),
    ...mapGetters('user', ['user']),
  },
};
</script>
<template>
  
  <v-navigation-drawer
    border="none"
    elevation="1"
    v-model="mainSidebar"
    id="mainMenu"
  >
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!miniSidebar" v-slot:prepend>
      <v-card
        style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px"
        height="100"
        class="d-flex align-center justify-center"
      >
      <!-- the image will redirect to  the / page -->
        
      <img
          width="80"
          src="../../assets/IA.png"
          alt=""
          @click="$router.push('/')"
          
        />
      </v-card>
    </template>

    <!-- ---------------------------------------------- -->
    <!---Nav List -->
    <!-- ---------------------------------------------- -->

    <MainMenu :menu="this.menu"></MainMenu>

    <!-- ---------------------------------------------- -->
    <!---Bottom Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!miniSidebar" v-slot:append>
      <v-card
        theme="dark"
        
        class="pa-3"
        variant="text"
        style="box-shadow: rgba(0, 0, 0, 0.05) 0px -25px 15px -20px"
      >
        <v-card
          class="d-flex flex-column gradient pa-2"
          
          
        >
          <v-card-title>
            
            <v-avatar size="50">
              <img
                :src="`${backendUrl}/profilePic/${user.user_info.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
</v-avatar>
              
            
            <!--get the user name  fromm thee  store-->
            {{user.user_info.fname}} {{user.user_info.lname}}
          </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
          
          <v-card-actions>
            <v-btn
              color="white"
              block
              prepend-icon="mdi-logout"
              variant="elevated"
              @click="logout"
            >
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </template>
  </v-navigation-drawer>
</template>




<style scoped>
v-list-item__content {
  display: flex;
  flex-direction: row;
}
</style>