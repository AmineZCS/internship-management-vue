<template>
  <div class="internships-container">
    <v-card class="mx-auto mt-5" min-height="350" theme="dark" variant="flat">
      <v-sheet color="#202225">
        <v-card-item>
          <template v-slot:prepend>
            <v-card-title>
              <v-icon icon="mdi-calendar" start></v-icon>

              1 Event
            </v-card-title>
          </template>

          <v-divider vertical class="mx-2"></v-divider>

          <v-btn class="text-none text-subtitle-1" color="#5865f2" size="small" variant="flat">
            Create Event
          </v-btn>

          <template v-slot:append>
            <v-btn icon="$close" size="large" variant="text"></v-btn>
          </template>
        </v-card-item>
      </v-sheet>
      <v-container>
        <v-row>
          <v-col v-for="(offer, index) in offers" :key="index" 
          cols="12" sm="12" md="6" lg="2">
            <StInternshipCardVue />
          </v-col>
        </v-row>
      </v-container>
    </v-card>

  </div>
</template>
<script>
import StInternshipCardVue from './StInternshipCard.vue'
export default {
  components: { StInternshipCardVue },
  data() {
    return {
      offers: [
        // Array of internship offer objects
        {
          title: 'Software Engineering Intern',
          startDate: 'May 2023',
          endDate: 'August 2023',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Open'
        },
        {
          title: 'Software Engineering Intern',
          startDate: 'May 2023',
          endDate: 'August 2023',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          status: 'Open'
        },
        // Add more offer objects as needed
      ]
    };
  }
}
</script>
<style>
.internships-container {
  margin-top: 100px;
}

.cards-container {
  display: grid;
}
</style>
