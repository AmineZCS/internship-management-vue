<!--
* @Component: ToolbarNotifications
* @Maintainer: J.K. Yang
* @Description: 
-->
<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
import backendUrl from "../backendConfig.js";
const router = useRouter();
export default {

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
  
  data () {
    return {
      backendUrl,
      navs : [
  {
    title: "Profile Details",
    key: "menu.profileDetails",
    link: "Settings",
    icon: "mdi-account-box-outline",
  },
  {
    title: "Applications",
    key: "menu.applications",
    link: "Applications",
    icon: "mdi-file-document-outline",
  },
  {
    title: "Ask the Community",
    key: "menu.askCommunity",
    link: "/ask-the-community",
    icon: "mdi-help-circle-outline",
  },
]
}
  }}
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    location="bottom right"
    transition="slide-y-transition"
  >
    <!-- ---------------------------------------------- -->
    <!-- Activator Btn -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-btn class="mx-2" icon v-bind="props">
        <v-badge content="2" color="success" dot bordered>
          <v-avatar size="40">
            <img
                :src="`${backendUrl}/profilePic/${user.user_info.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
          </v-avatar>
        </v-badge>
      </v-btn>
    </template>
    <v-card max-width="300">
      <v-list lines="three" density="compact">
        <!-- ---------------------------------------------- -->
        <!-- Profile Area -->
        <!-- ---------------------------------------------- -->
        <v-list-item to="Settings">
          <template v-slot:prepend>
            <v-avatar size="40">
              <img
                :src="`${backendUrl}/profilePic/${user.user_info.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>
          </template>

          <v-list-item-title class="font-weight-bold text-blue">
            {{user.user_info.lname}} {{user.user_info.fname}}
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- {{ $store.state.user.email  }} -->
            {{user.user_info.email}}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- ---------------------------------------------- -->
      <!-- Menu Area -->
      <!-- ---------------------------------------------- -->

      <v-list variant="flat" elevation="0" :lines="false" density="compact">
        <v-list-item
          color="orange"
          v-for="(nav, i) in navs"
          :key="i"
          :to="nav.link"
          link
          density="compact"
        >
          <template v-slot:prepend>
            <v-avatar size="30">
              <v-icon>{{ nav.icon }}</v-icon>
            </v-avatar>
          </template>

          <div>
            <v-list-item-subtitle class="text-body-2">{{
              nav.title
            }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- ---------------------------------------------- -->
      <!-- Logout Area -->
      <!-- ---------------------------------------------- -->
      <v-list variant="flat" elevation="0" :lines="false" density="compact">
        <v-list-item color="primary" to="nav.link" link density="compact">
          <template v-slot:prepend>
            <v-avatar size="30">
              <v-icon>mdi-lifebuoy</v-icon>
            </v-avatar>
          </template>

          <div>
            <v-list-item-subtitle class="text-body-2">
              Help Center
            </v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item
          color="orange"
          link
          @click=""
          density="compact"
        >
          <template v-slot:prepend>
            <v-avatar size="30">
              <v-icon>mdi-logout</v-icon>
            </v-avatar>
          </template>

          <div>
            <v-list-item-subtitle class="text-body-2">
              Logout
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
