<template>
    <v-menu transition="slide-y-transition" @click="getNotifications">
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" class="text-none" stacked @click="readNotifications">
                <v-badge v-if="countUnreadNotifications > 0" :content="countUnreadNotifications" color="red">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
                <v-badge dot v-if="countUnreadNotifications == 0">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>

            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, i) in notifications" :key="i">
                <v-list-item-title>{{ item.message }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'notificationsComp',

  // map getters and actions from the notifications module
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
