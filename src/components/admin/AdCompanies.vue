<script  lang="ts">
import backendUrl from "../../backendConfig.js";
import api from "../../api"
export default {
  data() {
    return {
      backendUrl,
      headers : [
  { text: "Id", align: "start", value: "id" },
  {
    text: "Company",
    sortable: false,
    value: "company",
  },
  { text: "Email", value: "email" },
    { text: "Phone N°", value: "phone_number" },
    { text: "location", value: "location" },
    
  { text: "", sortable: false, align: "right", value: "action" },
],
items :null
    };}
    ,
    methods:{
      

      
      async getCompanies(){
        const response = await api.get('/companies')
        console.log(response.data)
        this.items = response.data
        return response
      },
        
      },
      mounted() {
      this.getCompanies()
    
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
          <tr v-for="item in items" :key="item.id"  >
            <td class="font-weight-bold">
              #{{item.id}}
            </td>
            <td>
              <div 
              
              class="d-flex align-center py-2">
                <v-avatar 
                
                
          size="40" class="elevation-1 grey lighten-3">
                  <img :src="`${backendUrl}/companyPic/${item.id}`"
                  style="object-fit: contain; object-position: center; width: 100%; height: 100%;"
              />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.name }}</div>
                </div>
              </div>
            </td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <!-- 
            location
             -->
            <td>
                {{ item.address }}
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