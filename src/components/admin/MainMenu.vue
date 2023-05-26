<script setup lang="ts">
name: "MainMenu"
const props = defineProps({
  // Data
  menu: {
    type: Array<any>,
    default: () => [],
  },
});
</script>
<template>
  <v-list class="menu-list" nav dense color="black">
    <template v-for="menuArea in props.menu" >
      <div
        
        class="pa-1 mt-2 text-overline"
      >
        {{ menuArea.text }}
      </div>
      <template v-if="menuArea.items">
        <template v-for="menuItem in menuArea.items" >
          <!-- menu level 1 -->
          <v-list-item
            v-if="!menuItem.items"
            :to="menuItem.link"
            :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
            active-class="active-nav-grey"
            density="compact"
          >
            <v-list-item-title
              v-text="menuItem.text"
            ></v-list-item-title>
          </v-list-item>
          <v-list-group v-else :value="menuItem.items">
            <!-- subMenu activator -->
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
                :title="menuItem.text"
              >
              </v-list-item>
            </template>
            <!-- menu level 2 -->
            <v-list-item
              v-for="subMenuItem in menuItem.items"
              
              :prepend-icon="subMenuItem.icon || 'mdi-circle-medium'"
              :title="subMenuItem.text"
              :to="subMenuItem.link"
              density="compact"
            ></v-list-item>
          </v-list-group>
        </template>
      </template>
    </template>
  </v-list>
</template>

<style scoped>
.v-list-group .v-list-item {
  padding-left: 8px !important;
}

.active-nav-grey {
  border-left: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #3374c9, #a4abbb);
  background-color: #e1ebf3;
} 

</style>
