<script  lang="ts">
import backendUrl from "../../backendConfig.js";
import api from "../../api"
export default {
  data() {
    return {
      cardTop: 0,
      cardLeft: 0,
      hoveredItem: null,
      hoveredCompany: null,
      backendUrl,
      dataItemsWithDateOnly: [],
      headers : [
  { text: "Id", align: "start", value: "id" },
  {
    text: "User",
    sortable: false,
    value: "user",
  },
  { text: "Date", value: "date" },
  { text: "Company", value: "company_name" },
  { text: "Status", value: "status" },
  { text: "", sortable: false, align: "right", value: "action" },
],
items :[]
    };}
    ,
    methods:{
      async accept(item){
        try {
          const response = await api.post('/adminAcceptSupervisor',{
            supervisor_id: item.id
          })
          console.log(response.data)
          this.getSupervisors()
        } catch (error) {
          console.log(error.response)
        }
      },

      async reject(item){
        try {
          const response = await api.post('/adminRejectSupervisor',{
            supervisor_id: item.id
          })
          console.log(response.data)
          this.getSupervisors()
        } catch (error) {
          console.log(error.response)
        }
      },
      async getSupervisors(){
        const response = await api.get('/supervisors')
        console.log(response.data)
        this.items = response.data
        return response
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
    },
    
    },
    created() {
      this.getSupervisors();
    
    },
    computed: {
    itemsWithDateOnly() {
      return this.items.map(item => {
        const dateOnly = item.created_at.substring(0, 10);
        return { ...item, dateOnly };
      });
    }
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
  <div >
    <h6 class="text-h6 px-5 pt-5 d-flex align-center font-weight-bold">
      <span class="flex-fill font-weight-bold">Table</span>
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
          <tr v-for="item in itemsWithDateOnly" :key="item.id"  >
            <td class="font-weight-bold">
              #{{item.id}}
            </td>
            <td>
              <div 
              
              class="d-flex align-center py-2">
                <v-avatar 
                @mouseover="showCard($event, item)"
                
          size="40" class="elevation-1 grey lighten-3">
                  <img :src="`${backendUrl}/profilePic/${item.id}`"
                  style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.fname }} {{ item.lname }}</div>
                  <div class="text-caption">
                    {{item.supervisor_email}}
                  </div>
                </div>
              </div>
            </td>
            <td>{{ item.dateOnly }}</td>
            <td @mouseover="showCompanyCard($event, item)"
           
            >{{ item.company_name }}</td>
            <td class="font-weight-bold">
            <div v-if="item.status === 'rejected'" class="text-red">
              <v-icon size="small" color="red">mdi-circle-medium</v-icon>
              <span>Rejected</span>
            </div>
            <div v-if="item.status === 'accepted'" class="text-green">
              <v-icon size="small" color="green">mdi-circle-medium</v-icon>
              <span>Accepted</span>
            </div>
            <div v-if="item.status === 'pending'" class="text-orange">
              <v-icon size="small" color="orange">mdi-circle-medium</v-icon>
              <span>Pending</span>
            </div>
          </td>
            <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="green"
              size="small"
              @click="accept(item)"
            >
              <v-icon>mdi-check</v-icon>
              <span class="ml-1">Accept</span>
          </v-btn>
          </td>
          <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="red"
              size="small"
              @click="reject(item)"
            >
              <v-icon>mdi-close</v-icon>
              <span class="ml-1">Decline</span>
          </v-btn>
          </td>
          </tr>
        </tbody>
      </v-table>
    </perfect-scrollbar>
     <!--Profile  v-card to display on hover -->
     <v-card v-if="hoveredItem" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseleave="hideCard"
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/profilePic/${hoveredItem.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredItem.fname }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Supervisor
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredItem.bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredItem.location }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.supervisor_email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredItem.phone_number }}</span>
          </div>
        </v-card>


        <!-- Company v-card to display on hover -->
     <v-card v-if="hoveredCompany" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseleave="hideCompanyCard"
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/companyPic/${hoveredCompany.company_id}`"
                style="object-fit: contain; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredCompany.company_name }}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Company
                </v-chip>
              </h3>
              <p class="text-body-1">{{ hoveredCompany.company_bio }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-1">{{ hoveredCompany.address }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-1">{{ hoveredCompany.company_email }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-3">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-1">{{ hoveredCompany.company_phone_number }}</span>
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