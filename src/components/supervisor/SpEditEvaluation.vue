<template>
   
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Evaluation</span>
        </v-card-title>
        <v-card-text>
      <v-row>
        <!-- Label and text input for 5 evaluations and a global appraciation -->
        <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">General discipline and human relations</v-label>
                <v-text-field
                v-model="evaluation.general"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="number"
                  placeholder="/4"
                  max="4"
                  min="0"
                  :rules="[value => value <= 4 || 'Value cannot be more than 4', value => value >= 0 || 'Value cannot be less than 0']"
  />
              </v-col>


              <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">Work skills and handling</v-label>
                <v-text-field
                v-model="evaluation.skills"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="number"
                  placeholder="/4"
                  max="4"
                  min="0"
                  :rules="[value => value <= 4 || 'Value cannot be more than 4', value => value >= 0 || 'Value cannot be less than 0']"
  />
              </v-col>


              <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">Initiative/Entrepreneurship</v-label>
                <v-text-field
                v-model="evaluation.initiative"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="number"
                  placeholder="/4"
                  max="4"
                  min="0"
                  :rules="[value => value <= 4 || 'Value cannot be more than 4', value => value >= 0 || 'Value cannot be less than 0']"
  />
              </v-col>

              <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">Imagination skills and innovation</v-label>
                <v-text-field
                v-model="evaluation.imagination"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  hint="Mark must be between 0 and 4"
                  variant="outlined"
                  density="compact"
                  type="number"
                  placeholder="/4"
                  max="4"
                  min="0"
                  :rules="[value => value <= 4 || 'Value cannot be more than 4', value => value >= 0 || 'Value cannot be less than 0']"
  />
              </v-col>

              <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">Knowledge acquired on the internship site</v-label>
                <v-text-field
                v-model="evaluation.knowledge"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="number"
                  placeholder="/4"
                  max="4"
                  min="0"
                  :rules="[value => value <= 4 || 'Value cannot be more than 4', value => value >= 0 || 'Value cannot be less than 0']"
  />
              </v-col>
        

              <v-col cols="12" md="6">
          <v-label class="font-weight-medium mb-2">Global Appreciation</v-label>
                <v-text-field
                v-model="evaluation.global_appreciation"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="Global Appreciation"
                />
              </v-col>
        
        

        
        
      </v-row>
        </v-card-text>
        <v-card-actions>
          
      <v-row>
        <v-col>
            <v-btn
              elevation="4"
              variant="outlined"
              color="orange"
              :disabled="!isFormValid"
              @click="editEvaluation"
            >
              <v-icon>mdi-pen</v-icon>
              <span class="ml-1">Edit Evaluation</span>
          </v-btn>
        </v-col>
           
        <v-spacer></v-spacer>
        <v-col>
            
        <v-btn
            color="green-darken-1"
            variant="text"
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
        </v-col>
        
      </v-row>
        </v-card-actions>
      </v-card>
  </template>
  
  <script>
  import api from '../../api'; // Import your API module here
  
  export default {
    props: {
      evaluation: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
       
      };
    },
    computed: {
    isFormValid() {
     return (
        this.evaluation.general >= 0 &&
        this.evaluation.general <= 4 &&
        this.evaluation.skills >= 0 &&
        this.evaluation.skills <= 4 &&
        this.evaluation.initiative >= 0 &&
        this.evaluation.initiative <= 4 &&
        this.evaluation.imagination >= 0 &&
        this.evaluation.imagination <= 4 &&
        this.evaluation.knowledge >= 0 &&
        this.evaluation.knowledge <= 4
      );
    }
  },
    methods: {
        
      
      async editEvaluation() {
    
         await api.post('/editEvaluation', {
            evaluation_id: this.evaluation.id,
            general: this.evaluation.general,
            skills: this.evaluation.skills,
            initiative: this.evaluation.initiative,
            imagination: this.evaluation.imagination,
            knowledge: this.evaluation.knowledge,
            global_appreciation: this.evaluation.global_appreciation,
        })
          .then(response => {
            // Handle the response (e.g., show success message)
            console.log(response);
            // update the evaluations list
            this.$emit('evaluationEdited');
          this.$emit('close');
          })
          .catch(error => {
            console.error(error);
          });
      },
    },

    mounted() {
      console.log(this.evaluation.id)
    }
  };
  </script>
  <style scoped>
  /* the component should be centered in the middle and the background should blurred */
    
    </style>