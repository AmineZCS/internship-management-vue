<script  lang="ts">
import backendUrl from "../../backendConfig.js";
import api from "../../api"
import SpEditEvaluation from "./SpEditEvaluation.vue";
import SpNewEvaluation from "./SpNewEvaluation.vue";
export default {
  data() {
    return {
      internship:{
        cardTop: 0,
      cardLeft: 0,
      },
      dialog: false,
      newDialog: false,
      cardTop: 0,
      cardLeft: 0,
      hoveredItem: null,
      backendUrl,
      headers : [
  { text: "Id", align: "start", value: "id" },
  {
    text: "User",
    sortable: false,
    value: "user",
  },
  { text: "Department", value: "department" },
  { text: "Certificate", value: "certificate" },
  { text: "Total Mark", value: "total_mark" },
  
],
items:null,
showFeedbackDialog: false,
selectedEvaluation: null,
      
    };}
    ,
    methods:{
      async edit(item){
        this.showFeedbackDialog = false
        this.dialog = true
        this.selectedEvaluation = item
        console.log(this.selectedEvaluation)
        this.showFeedbackDialog = true
      },
      deleteEvaluation(item){
        
      },

      async getEvaluations(){
        const response = await api.get('/evaluations')
        console.log(response.data)
        this.items = response.data
        return response
      },
      async getCertificate(student,supervisorID){
        // send a post  request to /downloadCV with the id of the student to download the pdf cv (ps: the response is a downloadable file)
        const response = await api.get('/generatePDF/',{
          params: {
            student_id: student.id,
            supervisor_id: supervisorID
          },
          responseType: 'blob'
        })
        console.log(response)
        // create a blob url from the response
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)
        // create a link element to download the file
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${student.fname}_${student.lname}_${student.id}_Certificate.pdf`)
        // append the link to the body
        document.body.appendChild(link)
        // dispatch a click event on the link to start the download
        link.click()
        // preview the file in a new tab
        window.open(url, '_blank')
        // remove the link from the body after 5 seconds
        setTimeout(() => {
          link.remove()
        }, 5000)

        
      },
      showCard(event, item) {
  this.hoveredItem = item;
  const avatarRect = event.target.getBoundingClientRect();
  const cardTop = avatarRect.top;
  const cardLeft = avatarRect.left;
  this.cardTop = cardTop + "px";
  this.cardLeft = cardLeft + "px";
},
    hideCard() {
      this.hoveredItem = null;
    },
    },
    async mounted() {
      this.getEvaluations()
    
    },
    components:{
      SpEditEvaluation,
      SpNewEvaluation
    }
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
  <div>
    <h6 class="text-h6 px-5 pt-5 d-flex align-center font-weight-bold">
      <span class="flex-fill font-weight-bold">Evaluations</span>
      <!-- button to create a new evalutaion -->
      <v-btn
        elevation="4"
        variant="outlined"
        color="primary"
        size="large"
        @click="newDialog = true"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="ml-1">New Evaluation</span>
      </v-btn>
    </h6>
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
            <td class="font-weight-bold">
              #{{item.id}}
            </td>
            <td>
              <div 
              
              class="d-flex align-center py-2">
                <v-avatar 
                @mouseover="showCard($event, item)"
                
          size="40" class="elevation-1 grey lighten-3">
                  <img :src="`${backendUrl}/profilePic/${item.student.id}`"
                  style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.student.fname }} {{ item.student.lname }}</div>
                  <div class="text-caption">
                    {{item.student.user.email}}
                  </div>
                </div>
              </div>
            </td>
            <!-- department -->
            <td>
              <div class="text-bold">
                {{item.student.department.abbreviation}}
              </div>
            </td>
            <!-- button to get student resume -->
          <td>
            <v-btn
              :disabled="item.total_mark < 10"
              elevation="4"
              variant="outlined"
              color="primary"
              size="small"
              @click="getCertificate(item.student,item.supervisor_id)"
            >
              <v-icon>mdi-file-document</v-icon>
              <span class="ml-1">Certificate</span>
          </v-btn>
          </td>
          <!-- Total Mark -->
          <td class="font-weight-bold">
            <div v-if="item.total_mark < 10" class="text-red">
              <v-icon size="small" color="red">mdi-close-circle</v-icon>
              <span>{{`   ${item.total_mark}/20`}}</span>
            </div>
            <div v-if="item.total_mark >= 10" class="text-green">
              <v-icon size="small" color="green">mdi-check-decagram</v-icon>
              <span>{{`   ${item.total_mark}/20`}}</span>
            </div>
          </td>
          

            <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="success"
              size="small"
              @click="edit(item)"
            >
              <v-icon>mdi-pen</v-icon>
              <span class="ml-1">Edit</span>
          </v-btn>
          </td>
          <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="red"
              size="small"
              @click="deleteEvaluation(item)"
            >
              <v-icon>mdi-trash-can</v-icon>
              <span class="ml-1">Delete</span>
          </v-btn>
            
          </td>
          </tr>
        </tbody>
      </v-table>
      <v-dialog
            :key="selectedEvaluation"
      v-model="dialog"
      persistent
      width="1024"
      close-on-back
    >

      <SpEditEvaluation :evaluation="selectedEvaluation" @close="dialog=false" @evaluationEdited="getEvaluations()"/>
    </v-dialog>
    <v-dialog
           
      v-model="newDialog"
      persistent
      width="1024"
      close-on-back
    >
      <SpNewEvaluation @close="newDialog=false" @evaluationCreated="getEvaluations()"/>
    </v-dialog>
    </perfect-scrollbar>
     <!-- Student Profile  v-card to display on hover -->
     <v-card v-if="hoveredItem" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseleave="hideCard"
     >
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/profilePic/${hoveredItem.student.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredItem.student.fname }} {{ hoveredItem.student.lname }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Student
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredItem.student.bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredItem.student.location }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.student.user.email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.student.phone_number }}</span>
          </div>
        </v-card>


       

            
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