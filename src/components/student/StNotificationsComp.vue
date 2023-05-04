<template>
    <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="text-none" stacked>
                <v-badge v-if="notifications.length > 0" :content="notifications.length" color="error">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
                <v-badge dot v-if="notifications.length == 0">
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
export default {
    name: 'StNotificationsComp',
    // get notifications from vuex store
    computed: {
        notifications() {
            console.log(this.$store.state.notifications);
            // get notifications from notifications module
            return this.$store.state.notifications.notifications;
        },

    },
    // fire the getNotifications action from notifications module
    created() {
        this.$store.dispatch('notifications/getNotifications');
    },
};

</script>