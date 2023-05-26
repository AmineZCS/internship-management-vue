<script lang="ts">
 import backendUrl from "../../backendConfig"
 import api from "../../api"
export default{
 
  data() {
      return{
        backendUrl,
        internships:null,
      }
  },
  methods:{
    async getInternships(){
      try {
        const response = await api.get('/studentInterns')
        this.internships = response.data
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
      <span>Card1</span>
    </v-toolbar-title>
  </v-toolbar>

  <v-sheet elevation="0" class="mx-auto landing-warpper" rounded>
    <v-sheet max-width="1600" class="mx-auto pa-5" elevation="0">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" v-for="item in internships" :key="item.id">
            <v-card max-width="400" class="mx-auto">
              <v-img cover :src="`${backendUrl}/internshipPic/${item.id}`" height="200px"></v-img>
             
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
              start
            ></v-icon>

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

                <v-btn text color="blue">
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
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Supervisor
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn
              class="px-5"
              color="success"
              elevation="1"
              variant="outlined"
              :disabled="item.status!=='open'"
            >
              Apply</v-btn
            >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
