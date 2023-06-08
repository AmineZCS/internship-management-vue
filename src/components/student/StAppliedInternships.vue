<script  lang="ts">
import backendUrl from "../../backendConfig.js";
import StFeedbacks from "./StFeedbacks.vue";
import api from "../../api"
export default {
  components: {
    StFeedbacks
  },
  data() {
    return {
      internship:{
        cardTop: 0,
      cardLeft: 0,
      },
      dialog: false,
      cardTop: 0,
      cardLeft: 0,
      hoveredItem: null,
      hoveredCompany: null,
      hoveredInternship: null,
      hoveredSupervisor: null,
      isMouseOverInternshipCard: false,
      backendUrl,
      headers : [
  { text: "Id", align: "start", value: "id" },
  {
    text: "Supervisor",
    sortable: false,
    value: "supervisor",
  },
  { text: "Internship", value: "internship" },
  { text: "Admin Status", value: "admin_status" },
  { text: "Supervisor Status", value: "supervisor_status" },
  { text: "Details", value: "details" },
  { text: "", sortable: false, align: "right", value: "action" },
],
items:null,
showFeedbackDialog: false,
selectedApplicationId: null,
selectedApplication: null,
    };}
    ,
    methods:{
      async accept(item){
        console.log(item)
        try{
          const response = await api.post('/adminApprove',{
            application_id: item.application.id
          })
          console.log(response)
          this.getApplications()
        }catch(e){
          console.log(e)
        }



      },
      async deleteApplication(item){
        console.log(item)
        try{
          const response = await api.post('/deleteApplication',{
            application_id: item.id
          })
          console.log(response)
          this.getApplications()
        }catch(e){
          console.log(e)
        }
      },
     

      async getApplications(){
        const response = await api.get('/applications')
        console.log(response.data)
        this.items = response.data
        return response
      },
      async getFeedbacks(student){
        // send a get request to /downloadCV with the id of the student to download the pdf cv (ps: the response is a downloadable file)
        const response = await api.get('/downloadCV/',{
          params: {
            id: student.id
          },
          responseType: 'blob'
        })
        console.log(response)
        console.log(response.headers)
        // create a blob url from the response
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)
        // create a link element to download the file
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${student.fname}_${student.lname}_${student.id}_CV.pdf`)
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
    showInternshipCard(event, item) {
  this.hoveredInternship = item;
  const avatarRect = event.target.getBoundingClientRect();
  const cardTop = avatarRect.top;
  const cardLeft = avatarRect.left;
  this.internship.cardTop = cardTop + "px";
  this.internship.cardLeft = cardLeft + "px";
},
    hideInternshipCard() {
      setTimeout(() => {
        if (!this.isMouseOverInternshipCard) {
          this.hoveredInternship = null;
        }
      }, 200);
    },
    showCompanyCard(event, item) {
  this.hoveredCompany = item;
  const avatarRect = event.target.getBoundingClientRect();
  const cardTop = avatarRect.top;
  const cardLeft = avatarRect.left;
  this.cardTop = cardTop + "px";
  this.cardLeft = cardLeft + "px";
},
    hideCompanyCard() {
      this.hoveredCompany = null;
      this.isMouseOverInternshipCard = false;
    },
    showSupervisorCard(event, item) {
  this.hoveredSupervisor = item;
  const avatarRect = event.target.getBoundingClientRect();
  const cardTop = avatarRect.top;
  const cardLeft = avatarRect.left;
  this.cardTop = cardTop + "px";
  this.cardLeft = cardLeft + "px";
},
    hideSupervisorCard() {
      this.hoveredSupervisor = null;
      this.isMouseOverInternshipCard = false;
    },
    },
    async mounted() {
      this.getApplications()
    
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
  <div @mouseenter="isMouseOverInternshipCard=false">
    <h6 class="text-h6 px-5 pt-5 d-flex align-center font-weight-bold">
      <span class="flex-fill font-weight-bold">Applications</span>
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
                  <img :src="`${backendUrl}/profilePic/${item.internship.supervisor.id}`"
                  style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.internship.supervisor.fname }} {{ item.internship.supervisor.lname }}</div>
                  <div class="text-caption">
                    {{item.internship.supervisor.email}}
                  </div>
                </div>
              </div>
            </td>
            <td @mouseenter="showInternshipCard($event, item)"
           
            >{{ item.internship.position }}</td>
            <!-- Admin status -->
            <td class="font-weight-bold">
            <div v-if="item.admin_status === 'rejected'" class="text-red">
              <v-icon size="small" color="red">mdi-close-circle</v-icon>
              <span>  Rejected</span>
            </div>
            <div v-if="item.admin_status === 'approved'" class="text-green">
              <v-icon size="small" color="green">mdi-check-decagram</v-icon>
              <span>  Accepted</span>
            </div>
            <div v-if="item.admin_status === 'pending'" class="text-orange">
              <v-icon size="small" color="orange">mdi-clock-time-five</v-icon>
              <span>  Pending</span>
            </div>
          </td>
          <!-- Supervisor Status -->
          <td class="font-weight-bold">
            <div v-if="item.supervisor_status === 'rejected'" class="text-red">
              <v-icon size="small" color="red">mdi-close-circle</v-icon>
              <span> Rejected</span>
            </div>
            <div v-if="item.supervisor_status === 'approved'" class="text-green">
              <v-icon size="small" color="green">mdi-check-decagram</v-icon>
              
              <span> Accepted</span>
            </div>
            <div v-if="item.supervisor_status === 'pending'" class="text-orange">
              <v-icon size="small" color="orange">mdi-clock-time-five</v-icon>
              <span> Pending</span>
            </div>
          </td>
          <!-- button to get student resume -->
          <td>
            <v-btn
              elevation="4"
                :disabled="item.feedbacks.length === 0 || !item.feedbacks"
              variant="outlined"
              color="primary"
              size="small"
              @click="dialog = true; selectedApplication = item"
            >
              <v-icon>mdi-file-document</v-icon>
              <span class="ml-1">Feedbacks</span>
          </v-btn>
          </td>
          <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="error"
              size="small"
              @click="deleteApplication(item)"
            >
              <v-icon>mdi-close</v-icon>
              <span class="ml-1">Delete</span>
          </v-btn>
          </td>
          </tr>
        </tbody>
      </v-table>
      <v-dialog
            :key="selectedApplicationId"
      v-model="dialog"
      width="600"
      close-on-back
    >
    <StFeedbacks :feedbacks="selectedApplication.feedbacks" />
     </v-dialog>
    </perfect-scrollbar>
     <!-- Student Profile  v-card to display on hover -->
     <v-card v-if="hoveredItem" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseleave="hideCard"
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/profilePic/${hoveredItem.internship.supervisor.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredItem.internship.supervisor.fname }} {{ hoveredItem.internship.supervisor.lname }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  supervisor
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredItem.internship.supervisor.bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredItem.internship.supervisor.location }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.internship.supervisor.user.email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.internship.supervisor.phone_number }}</span>
          </div>
        </v-card>


       <!-- Internship v-card to display on hover -->
     
      
     <v-card  v-if="hoveredInternship" max-width="400" class="profile-card elevation-10 mx-auto" :style="{ top: internship.cardTop, left: internship.cardLeft}" @mouseover="isMouseOverInternshipCard = true" @mouseleave.stop="isMouseOverInternshipCard = false" @mouseleave="hideInternshipCard" >
              <v-img cover :src="`${backendUrl}/internshipPic/${hoveredInternship.internship.id}`" height="200px"></v-img>
              <v-card-title class="text-h6 font-weight-bold">
                {{ hoveredInternship.internship.position }}   
              </v-card-title>
              <v-card-item v-if="hoveredInternship.internship.status=='open'">
                <v-chip size="small" class="font-weight-bold" color="green">
                  Open
                </v-chip>
              </v-card-item>
              <v-card-item v-if="hoveredInternship.internship.status=='closed'">
                <v-chip size="small" class="font-weight-bold" color="red">
                  Closed
                </v-chip>
              </v-card-item>
              <v-card-item v-if="hoveredInternship.internship.status=='filled'">
                <v-chip size="small" class="font-weight-bold" color="orange">
                  Filled
                </v-chip>
              </v-card-item>
              
                
              
              <v-card-subtitle>
               
                <v-icon
              color="blue"
              icon="mdi-map-marker"
              start></v-icon>

              <span class="text-medium-emphasis font-weight-bold">{{ hoveredInternship.internship.location }}</span>
              
               
              </v-card-subtitle>
              
              <v-card-text>
                {{ hoveredInternship.internship.description }}
              </v-card-text>
              <v-card-actions>
              <v-card-text>End Date <v-btn color="red" variant="text">
                  <v-icon >mdi-calendar</v-icon>
                  {{ hoveredInternship.internship.end_date }}
                </v-btn></v-card-text>
              <v-card-text>Start Date 
              <v-btn color="green" variant="text">
                  <v-icon >mdi-calendar</v-icon>
                  {{ hoveredInternship.internship.start_date }}
                </v-btn></v-card-text>
              </v-card-actions>

              <v-card-actions>

                <v-btn text color="blue" @click="showCompanyCard($event, hoveredInternship)">
                  <!-- <v-icon class="mr-2">mdi-account</v-icon> -->
                  <v-avatar size="30" class="mx-auto" color="white">
                <img
                :src="`${backendUrl}/companyPic/${hoveredInternship.internship.company.id}`"
                style="object-fit: contain; object-position: center; width: 100%; height: 100%;"
              />
              </v-avatar>
                  {{ `  ${hoveredInternship.internship.company.name}` }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-chip size="small" class="font-weight-bold" color="blue" @click="showSupervisorCard($event, hoveredInternship)">
                  Supervisor
                </v-chip>
              </v-card-actions>
             
            </v-card>

             <!-- Company v-card to display on hover -->
     <v-card v-if="hoveredCompany" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}"  @mouseover="isMouseOverInternshipCard = true"  @mouseleave="hideCompanyCard"
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/companyPic/${hoveredCompany.internship.company.id}`"
                style="object-fit: contain; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredCompany.internship.company.name }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Company
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredCompany.internship.company.bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredCompany.internship.company.location }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredCompany.internship.company.email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredCompany.internship.company.phone_number }}</span>
          </div>
        </v-card>
    <!-- Supervisor Profile  v-card to display on click -->
    <v-card v-if="hoveredSupervisor" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseover="isMouseOverInternshipCard = true"   @mouseleave="hideSupervisorCard" @mouseleave.stop
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/profilePic/${hoveredSupervisor.internship.supervisor.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredSupervisor.internship.supervisor.fname }} {{ hoveredSupervisor.internship.supervisor.lname }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Supervisor
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredSupervisor.internship.supervisor.bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredSupervisor.internship.supervisor.location }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredSupervisor.internship.supervisor.user.email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredSupervisor.internship.supervisor.phone_number }}</span>
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