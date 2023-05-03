<template>
  <v-app >
    
    <StSidebar/>
    
    <v-content>
      <StInternshipCard
      picture-url="https://via.placeholder.com/50"
      title="Software Engineering Intern"
      location="San Francisco, CA"
      status="Open"
      start-date="June 1, 2023"
      end-date="August 31, 2023"
      status-color="green"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien ligula. In hac habitasse platea dictumst. Sed eget odio at justo consequat bibendum vel nec enim."
      :apply="apply"
      />
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import StSidebar from './StSidebar.vue';
import StInternshipCard from './StInternshipCard.vue';
export default {
  name: 'StDashboard',
  components: {
    StSidebar,
    StInternshipCard,
 
  },
  methods: {
    apply() {
      // handle apply button click
    }
    
}
}
</script>
<style >
body {
  padding-left: 78px;
}
</style>