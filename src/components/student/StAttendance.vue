<script  lang="ts">
import backendUrl from "../../backendConfig.js";
import api from "../../api"
export default {
  data() {
    return {
      backendUrl,
      internships: [],
        internship_id: null,
      headers : [
  { text: "Date", value: "date" },
    { text: "Present", value: "present" },
    
  { text: "", sortable: false, align: "right", value: "action" },
],
items :null
    };}
    ,
    methods:{
      

      
      async getAttendances(){
        const response = await api.get('/studentAttendance',{
          params:{
            internship_id:this.internship_id
          }
        })
        console.log(response.data)
        this.items = response.data
        return response
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
      this.getInternships()
    
    },
    }   



// mounted(() => {
//   setTimeout(() => {
//     loading.value = false;
//   }, 1000);
// });
</script>
<template>
  <!-- loading spinner -->
  <!-- <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  > -->
    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div> -->
  <div >
    <h6 class="text-h6 px-5 pt-5 d-flex align-center font-weight-bold">
      <span class="flex-fill font-weight-bold">Attendance</span>
    </h6>
    <v-row style="margin: 20px 0">
        <v-col cols="12" md="3" style="padding: 0; margin-left: 20px">
        <v-label class="font-weight-medium mb-2" style="padding: 0;">Select an Internship</v-label>
          <v-autocomplete
         
          style="padding: 0;"
            v-model="internship_id"
            :items="internships"
            hide-details
            :item-title="item => item.internship.position"
            :item-text="item => item.internship.position"
            :item-value="item => item.internship.id"
            outlined
            clearable
            @blur="getAttendances"
          ></v-autocomplete>
        </v-col>
        </v-row>
    <perfect-scrollbar style="height: 400px">
      <v-table class="pa-3">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.text">
              {{ header.text }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id"  >
            <td>{{ item.date }}</td>
            <!-- 
            present
             -->
             <td>
  <v-switch
    v-model="item.is_present"
    :value="1"
    :readonly="true"
    :color="item.is_present ? 'green' : 'red'"
  ></v-switch>
</td>
            
            
          
          </tr>
        </tbody>
      </v-table>
    </perfect-scrollbar>
    


        
    
  </div>
</template>
<style lang="scss" scoped>
.v-table {
  table {
    padding: 4px;
    padding-bottom: 8px;

    th {
      text-transform: uppercase;
      white-space: nowrap;
    }

    td {
      border-bottom: 0 !important;
    }

    tbody {
      tr {
        transition: box-shadow 0.2s, transform 0.2s;

        &:not(.v-data-table__selected):hover {
          box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }
      }
    }
  }
}
.profile-card {
  position: absolute;
  z-index: 1;
  // make the card appear slowly
  transition: top 1s, left 1s;
}
</style>