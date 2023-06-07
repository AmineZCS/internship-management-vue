<template>
    <v-card>
      <v-list>
        <v-list-item v-for="feedback in feedbacks" :key="feedback.id">
           <v-row elevation="2">
                <v-col cols="12" md="3">
                    <v-chip size="small" class="font-weight-bold" color="orange" 
                    >
                       <v-icon size="small">mdi-star</v-icon> {{ feedback.feedback_type }}
            </v-chip>
                </v-col>
                <v-col cols="12" md="9">
                    
          
          <v-list-item-content>
            <v-list-item-title>{{ feedback.message }}</v-list-item-title>
          </v-list-item-content>
                </v-col>
           </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      feedbacks: {
        type: Array,
        required: true
      }
    }
  }
  </script>