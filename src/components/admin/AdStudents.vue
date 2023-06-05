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
    text: "User",
    sortable: false,
    value: "user",
  },
  { text: "Email", value: "email" },
    { text: "Phone N°", value: "phone_number" },
    { text: "location", value: "location" },
    
  { text: "Resume", value: "resume" },
  { text: "", sortable: false, align: "right", value: "action" },
],
items :null
    };}
    ,
    methods:{
      

      
      async getStudents(){
        const response = await api.get('/students')
        console.log(response.data)
        this.items = response.data
        return response
      },
      deleteStudent(student){
        console.log(`delete student with id ${student.id}`)
      },
      async getResume(student){
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
    },
    mounted() {
      this.getStudents()
    
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
                  <img :src="`${backendUrl}/profilePic/${item.id}`"
                  style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
                </v-avatar>
                <div class="ml-1">
                  <div class="font-weight-bold">{{ item.fname }} {{ item.lname }}</div>
                  
                </div>
              </div>
            </td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <!-- 
            location
             -->
            <td>
                {{ item.location }}
            </td>
            
            <td>
            <v-btn
              elevation="4"
              :disabled="!item.cv_path"
              variant="outlined"
              color="#5E35B1"
              size="small"
              @click="getResume(item)"
            >
            <v-icon>mdi-file-document</v-icon>
              <span class="ml-1">Resume</span>
          </v-btn>
          </td>
          <td>
            <v-btn
              elevation="4"
              variant="outlined"
              color="error"
              size="small"
              @click="deleteStudent(item)"
            >
              <v-icon>mdi-trash-can</v-icon>
              <span class="ml-1">Delete</span>
          </v-btn>
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