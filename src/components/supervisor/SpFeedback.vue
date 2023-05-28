<template>
    <v-container class="container">
      <v-row>
        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="selectedFeedback"
            :items="feedbacks"
            :item-title="item => item.message"
            :item-text="item => item.message"
            :item-value="item => item.id"
            label="Select feedback"
            outlined
            chips
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="newFeedback" label="Create new feedback" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-btn
              elevation="4"
              variant="outlined"
              color="red"
              @click="onRejectApplication"
            >
              <v-icon>mdi-close</v-icon>
              <span class="ml-1">Decline Application</span>
          </v-btn>
        </v-col>
        <v-col>
            <v-btn
                elevation="4"
                variant="outlined"
                color="primary"
                @click="onCreateFeedback"
            >
                <v-icon>mdi-plus</v-icon>
                <span class="ml-1">Create Feedback</span>
            </v-btn>
        </v-col>
        
      </v-row>
    </v-container>
  </template>
  
  <script>
  import api from '../../api'; // Import your API module here
  
  export default {
    props: {
      applicationId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        feedbacks: [],
        selectedFeedback: null,
        newFeedback: ''
      };
    },
    methods: {
        async fetchFeedbacks() {
        // Call an API endpoint to retrieve feedbacks from the database
        // and set the feedbacks data property
        try {
          const response = await api.get('/supervisorFeedbacks');
          this.feedbacks = response.data;
          console.log(response.data)
          return response
        } catch (error) {
          console.log(error)
        }
      },
      async createFeedback(text) {
        // Call an API endpoint to create a new feedback in the database
        // and return the ID of the new feedback
        try {
          const response = await api.post('/supervisorFeedbacks', {
            message: text,
            is_default: true
          })
          console.log(response.data)
          this.fetchFeedbacks();
          this.newFeedback = ''
          return response.data
        } catch (error) {
          console.log(error)
        }
      },
      async rejectApplication() {
          //  Call an API endpoint to reject the application with the selected feedback ID and application ID
          this.$emit('applicationRejected');
        await api.post('/supervisorRejectApplication', {
            application_id: this.applicationId,
          feedback_id: this.selectedFeedback
        })
          .then(response => {
            // Handle the response (e.g., show success message)
            console.log('Application rejected successfully');
            this.fetchFeedbacks();
            // update the applications list
          
          })
          .catch(error => {
            console.error(error);
            this.fetchFeedbacks();
          });
      },
      onCreateFeedback() {
        if (this.newFeedback) {
          this.createFeedback(this.newFeedback);
        }
      },
      onRejectApplication() {
        if (this.selectedFeedback) {
          this.rejectApplication();
        }
      }
    },

    mounted() {
      this.fetchFeedbacks();
    }
  };
  </script>
  <style scoped>
  /* the component should be centered in the middle and the background should blurred */
    
    </style>