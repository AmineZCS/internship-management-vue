<template>
    <div class="internships">
    <v-card>
      <v-row align="center">
        <v-col cols="2">
          <v-avatar size="50">
            <img :src="pictureUrl" alt="Internship Picture">
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle>{{ location }}</v-card-subtitle>
          <v-chip :color="statusColor">{{ status }}</v-chip>
          <v-card-text>
            <v-icon left>mdi-calendar</v-icon>{{ startDate }} - {{ endDate }}
          </v-card-text>
        </v-col>
        <v-col cols="2">
          <v-btn color="purple" icon @click="detailsExpanded = !detailsExpanded">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
          <v-btn color="green" @click="apply">Apply</v-btn>
        </v-col>
      </v-row>
      <v-expand-transition>
        <v-card-text v-show="detailsExpanded">
          <p>{{ details }}</p>
        </v-card-text>
      </v-expand-transition>
    </v-card>
</div>
  </template>
  
  <script>
  export default {
    name: 'StInternshipCard',
    props: {
      pictureUrl: String,
      title: String,
      location: String,
      status: String,
      startDate: String,
      endDate: String,
      statusColor: {
        type: String,
        default: 'orange'
      },
      details: String,
      apply: Function
    },
    data() {
      return {
        detailsExpanded: false
      }
    }
  }
  </script>
  <style scoped>
      .internships {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>