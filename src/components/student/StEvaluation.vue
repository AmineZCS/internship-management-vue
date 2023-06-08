<template>
   
    <v-card 
    style="padding: 10px; margin: 10px;"
    elevation="10"
    >
      <v-card-title>
        <span class="text-h5">Evaluation</span>
      </v-card-title>
      <v-card-text>
      <v-row style="margin: 20px 0">
        <v-col cols="12" md="3" style="padding: 0; margin-left: 20px">
        <v-label class="font-weight-medium mb-2" style="padding: 0;">Select an Internship</v-label>
          <v-autocomplete
         
          style="padding: 0;"
            v-model="supervisor_id"
            :items="internships"
            hide-details
            :item-title="item => item.internship.position"
            :item-text="item => item.internship.position"
            :item-value="item => item.internship.supervisor_id"
            outlined
            clearable
            @blur="getEvaluation"
          ></v-autocomplete>
        </v-col>
        </v-row>
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
                disabled="true"/>
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
                disabled="true"/>
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
                disabled="true"/>
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
                disabled="true"/>
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
                disabled="true"/>
            </v-col>
      
            <v-col cols="12" md="6">
        <v-label class="font-weight-medium mb-2">Total Mark /20</v-label>
              <v-text-field
              v-model="evaluation.total_mark"
                :readonly=editInfoMode
                :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                color="blue"
                variant="outlined"
                density="compact"
                type="text"
                disabled="true"
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
                disabled="true"
              />
            </v-col>
      
      

      
      
    </v-row>
      </v-card-text>
    </v-card>
</template>

<script>
import api from '../../api'; // Import your API module here

export default {
  data() {
    return {
        internships: [],
        supervisor_id: null,
        evaluation: {
            general: null,
            skills:null,
            initiative:null,
            imagination:null,
            knowledge:null,
            global_appreciation:null,
        },
    };
  },
  methods: {
      async getEvaluation() {
        try{
            const response = await api.get('/studentEvaluation', {
                params: {
                    supervisor_id: this.supervisor_id
                }
            })
            console.log(response.data);
            this.evaluation = response.data;
        }catch(error ) {
          console.log(error);
        };
      },
      async getInternships() {
        try{
            const response = await api.get('/acceptedApplications')
            console.log(response.data);
            this.internships = response.data;
        }catch(error ) {
          console.log(error);
        };
  },
},

  mounted() {
    this.getInternships();
    console.log(this.evaluation)
  }
};
</script>
<style scoped>
/* the component should be centered in the middle and the background should blurred */
  
  </style>