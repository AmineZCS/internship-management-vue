<template>
  <div class="card">
    
      <v-card
        class="ma-5"
        max-width="700"
        color="#2f3136"
        rounded="lg"
        variant="flat"
      >
        <v-card-item>
        
          <v-card-title class="text-body-2 d-flex align-center">
           
          <div class="text-h6">Backend Dev</div>
            
            <v-spacer></v-spacer>

            <v-avatar
              src="https://cdn.vuetifyjs.com/images/john-smirk.png"
              size="x-large"
            ></v-avatar>
          </v-card-title>
          <v-card-subtitle>
           <v-icon
              color="#949cf7"
              icon="mdi-map-marker"
              start
            ></v-icon>

            <span class="text-medium-emphasis font-weight-bold">Constantine </span>
 </v-card-subtitle>

          <div class="py-2">
           
		
            <div class="font-weight-light text-medium-emphasis">
              Join the Vuetify team for a live Question and Answer session.
            </div>
          </div>
         <v-card-subtitle>
          <v-icon
              color="#949cf7"
              icon="mdi-calendar"
              start
            ></v-icon>

            <span class="text-medium-emphasis font-weight-bold">Fri 16 Dec </span>
 </v-card-subtitle>
        </v-card-item>

        <v-divider></v-divider>

        <div class="pa-4 d-flex align-center">
          <v-chip
              class="ms-2 text-medium-emphasis"
              color="green-darken-3"
              size="small"
              text="Open"
              variant="flat"
            ></v-chip>


          

          <v-spacer></v-spacer>

          <v-icon
            class="me-3"
            icon="mdi-dots-horizontal"
          ></v-icon>

          <v-btn
            class="me-2 text-none"
            color="#4f545c"
            prepend-icon="mdi-export-variant"
            variant="flat"
          >
            Share
          </v-btn>

          <v-btn
            border
            class="text-none"
            color="green"
            prepend-icon="mdi-check"
            variant="text"
          >
            Interested
          </v-btn>
        </div>
      </v-card>
  </div>
</template>
<script>
export default {
  name:"StInternshipCard",
}
</script>
<style scoped>
.card{
  margin-top: 50px;
}
</style>
