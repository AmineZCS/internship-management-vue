<template>
   
    <v-card>
      <v-card-title>
        <span class="text-h5">Evaluation</span>
      </v-card-title>
      <v-card-text>
        <v-row>

      <v-col cols="12" md="6">
        <v-label class="font-weight-medium mb-2">Students</v-label>
         
          <v-autocomplete
          required
            v-model="selectedStudents"
            :items="students"
            :item-title="item => item.fname + ' ' + item.lname"
            :item-text="item => item.fname + ' ' + item.lname"
            :item-value="item => item.id"
            outlined
            multiple
            chips
            clearable
          ></v-autocomplete>
        </v-col>
        </v-row>
    <v-row>
      <!-- Label and text input for 5 evaluations and a global appraciation -->
      <v-col cols="12" md="6">
        <v-label class="font-weight-medium mb-2">Date</v-label>
              <v-text-field
              v-model="date"
                :readonly=editInfoMode
                :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                color="blue"
                variant="outlined"
                density="compact"
                type="date"
/>
            </v-col>


            <v-col cols="12" md="6">
        <v-label class="font-weight-medium mb-2">Is Present</v-label>
              <!-- switch with boolean value -->
              <v-switch
    v-model="is_present"
    hide-details
    true-value="1"
    false-value="0"
  ></v-switch>
            </v-col>

      

      
      

      
      
    </v-row>
      </v-card-text>
      <v-card-actions>
        
    <v-row>
      <v-col>
          <v-btn
            elevation="4"
            variant="outlined"
            color="green"
            :disabled="!isFormValid"
            @click="newAttendance"
          > 
            <v-icon>mdi-plus</v-icon>
            <span class="ml-1">Save Attendance</span>
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
  data() {
    return {
        
        students: [],
        selectedStudents: null,
        date:null,
        is_present:0,
    };
  },
  computed: {
  isFormValid() {
   return (
      this.is_present != null &&
      this.date != null &&
      this.selectedStudents != null 
    );
  }
},
  methods: {
      async getStudents() {
        try{
            const response = await api.get('/supervisorStudents')
            console.log(response.data);
            this.students = response.data;
        }catch(error ) {
          console.log(error);
        };
      },
    
    async newAttendance() {
        console.log(this.selectedStudents)
       await api.post('/markAttendance', {
            student_ids: this.selectedStudents,
            date: this.date,
            is_present: this.is_present,
      })
        .then(response => {
          // Handle the response (e.g., show success message)
          console.log(response);
          // update the evaluations list
          this.$emit('attendanceCreated');
        this.$emit('close');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },

  mounted() {
    this.getStudents();
    
  }
};
</script>
<style scoped>
/* the component should be centered in the middle and the background should blurred */
  
  </style>