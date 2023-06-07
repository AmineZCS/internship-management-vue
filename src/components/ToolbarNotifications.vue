<!--
* @Component: ToolbarNotifications
* @Maintainer: J.K. Yang
* @Description: 
-->
<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
export default {
 
computed: {
    ...mapGetters('notifications', ['notifications','countUnreadNotifications']),
  },
  methods: {
    ...mapActions('notifications', ['getNotifications','readNotifications']),
  },

  mounted() {
    // call the getNotifications action from the notifications module
    this.getNotifications()
  },
}
</script>

<template>
  <v-menu location="bottom right" transition="slide-y-transition">
    <!-- ---------------------------------------------- -->
    <!-- Activator Btn -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props" class="text-none" @click="readNotifications">
        <v-badge v-if="countUnreadNotifications > 0" :content="countUnreadNotifications" color="red">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
                <v-badge dot v-if="countUnreadNotifications == 0">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
      </v-btn>
    </template>
    <v-list elevation="1" lines="three" density="compact" max-width="400">
      <v-list-subheader>Notifications</v-list-subheader>
      <v-list-item v-for="(message, i) in notifications" :key="i" @click="">
        <!-- ---------------------------------------------- -->
        <!-- Prepend-->
        <!-- ---------------------------------------------- -->
        <template v-slot:prepend>
          <!-- icon avatar for notifications -->
         <!--  <v-avatar size="40" :color="message.color">
            <v-icon color="white">{{ message.icon }}</v-icon>
          </v-avatar> -->
        </template>
        <!-- ---------------------------------------------- -->
        <!-- Append-->
        <!-- ---------------------------------------------- -->
        <!-- <template v-slot:append>
          <div class="full-h d-flex align-center">
            <span class="text-body-2 text-grey"> {{ message.time }}</span>
          </div>
        </template> -->
        <!-- ---------------------------------------------- -->
        <!-- Main Content-->
        <!-- ---------------------------------------------- -->
        <div>
          <v-list-item-title class="font-weight-bold text-orange">{{
            message.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ message.message }}</v-list-item-subtitle>
        </div>
      </v-list-item>
      <!-- ---------------------------------------------- -->
      <!-- See all Btn-->
      <!-- ---------------------------------------------- -->
      
    </v-list>
  </v-menu>
</template>

