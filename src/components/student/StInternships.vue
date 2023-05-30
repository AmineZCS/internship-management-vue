<script lang="ts">
 import backendUrl from "../../backendConfig"
 import api from "../../api"
export default{
 
  data() {
      return{
        cardTop: 0,
      cardLeft: 0,
        backendUrl,
        internships:null,
        hoveredItem:null,
        hoveredCompany:null
      }
  },
  methods:{
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
    async getInternships(){
      try {
        const response = await api.get('/studentInterns')
        this.internships = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error.response)
      }
    },
    async apply(id){
      try {
        const response = await api.post('apply',{
          internship_id: id
        })
        console.log(response.data)
      } catch (error) {
        console.log(error.response)
      }
    }
  },
  async mounted(){
    this.getInternships()

  }
}
</script>

<template>
  <v-toolbar height="60">
    <v-toolbar-title class="text-h6 font-weight-bold">
      <span>Internships</span>
    </v-toolbar-title>
  </v-toolbar>

  <v-sheet elevation="0" class="mx-auto landing-warpper" rounded>
    <v-sheet max-width="1600" class="mx-auto pa-5" elevation="0">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="4" v-for="item in internships" :key="item.id">
            <v-card max-width="400" class="mx-auto">
              <v-img contain :src="`${backendUrl}/internshipPic/${item.id}`" height="200px"></v-img>
             
              <v-card-title class="text-h6 font-weight-bold">
                {{ item.position }}   
              </v-card-title>
              <v-card-item v-if="item.status=='open'">
                <v-chip size="small" class="font-weight-bold" color="green">
                  Open
                </v-chip>
              </v-card-item>
              <v-card-item v-if="item.status=='closed'">
                <v-chip size="small" class="font-weight-bold" color="red">
                  Closed
                </v-chip>
              </v-card-item>
              <v-card-item v-if="item.status=='filled'">
                <v-chip size="small" class="font-weight-bold" color="orange">
                  Filled
                </v-chip>
              </v-card-item>
              
                
              
              <v-card-subtitle>
               
                <v-icon
              color="blue"
              icon="mdi-map-marker"
              start></v-icon>

              <span class="text-medium-emphasis font-weight-bold">{{ item.location }}</span>
              
               
              </v-card-subtitle>
              
              <v-card-text>
                {{ item.description }}
              </v-card-text>
              <v-card-actions>
              <v-card-text>End Date <v-btn color="red" variant="text">
                  <v-icon >mdi-calendar</v-icon>
                  {{ item.end_date }}
                </v-btn></v-card-text>
              <v-card-text>Start Date 
              <v-btn color="green" variant="text">
                  <v-icon >mdi-calendar</v-icon>
                  {{ item.start_date }}
                </v-btn></v-card-text>
              </v-card-actions>

              <v-card-actions>

                <v-btn text color="blue" @click="showCompanyCard($event, item)">
                  <!-- <v-icon class="mr-2">mdi-account</v-icon> -->
                  <v-avatar size="30" class="mx-auto" color="white">
                <img
                :src="`${backendUrl}/companyPic/1`"
                style="object-fit: contain; object-position: center; width: 100%; height: 100%;"
              />
              </v-avatar>
                  {{ `  ${item.company_name}` }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-chip size="small" class="font-weight-bold" color="blue" @click="showCard($event, item)">
                  Supervisor
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn
              class="px-5"
              color="success"
              elevation="1"
              variant="outlined"
              :disabled="item.status!=='open'"
              @click="apply(item.id)">
              Apply</v-btn>
              </v-card-actions>
            </v-card>
            
          </v-col>
        </v-row>
<!--Profile  v-card to display on hover -->
<v-card v-if="hoveredItem" class="profile-card elevation-10" :style="{ top: cardTop, left: cardLeft}" @mouseleave="hideCard"
     >
      
          <div class="d-flex flex-column pa-6">
            <v-avatar size="90" class="mx-auto elevation-12" color="white">
              <img
                :src="`${backendUrl}/profilePic/${hoveredItem.supervisor_id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                {{ hoveredItem.supervisor_fname }} {{ hoveredItem.supervisor_lname }}
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
            <span class="ml-1">{{ hoveredItem.supervisor_phone_number }}</span>
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
      </v-container>
    </v-sheet>
  </v-sheet>
  <!-- empty space  -->
  <v-spacer></v-spacer>
  <v-spacer></v-spacer>
  <v-spacer></v-spacer>
</template>

<style scoped lang="scss">
.profile-card {
  position: absolute;
  z-index: 1;
  // make the card appear slowly
  transition: top 1s, left 1s;
}</style>
