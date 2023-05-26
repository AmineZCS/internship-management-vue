<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import backendUrl from "../../backendConfig.js";
import api from "../../api"
export default {
  data() {
    name: "SpSettings";
    return {
      backendUrl,
      currentPassword:'',
currentPasswordShow:false,
newPassword:'',
newPasswordShow:false,
confirmPassword:'',
confirmPasswordShow:false,
editable:false,
image:null,
resume:null,
imageErrMsg:null,
errMsg:null,
    };
  },
  computed: {
    ...mapGetters('user', ['user']),
    
editInfoMode(){
    return !this.editable
  },
},
methods:{
  async uploadImage(){
    this.imageErrMsg = '';
    const profilePic = this.image[0]
    console.log(profilePic)
    // api.defaults.headers.common["Content-Type"]= 'multipart/form-data'
    try {
                const response = await api.post('/updateProfilePicture', {
                    image: profilePic,
                    
                },{
                  headers: {
      "Content-Type":"multipart/form-data"
    },
                })
              } catch (error) {
                console.log(error.response.data);
                this.imageErrMsg = error.response.data.message
            }
},
 // },
  // uploadResume(event){
  //   this.resume = event.target.files[0];
  //   console.log(this.resume)
  // }
 
    },
  

};
</script>
<template>
  <v-sheet elevation="0" class="mx-auto" color="transparent" max-width="1600">
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <div class="d-flex flex-column pa-90">
            <v-avatar size="120" class="mx-auto elevation-12" color="white">
                <img
                :src="`${backendUrl}/profilePic/${user.user_info.id}`"
                style="object-fit: cover; object-position: center; width: 100%; height: 100%;"
              />
            </v-avatar>

            <div class="text-center mt-5">
              <h3 class="text-h6 font-weight-bold">
                
                {{user.user_info.fname}} {{user.user_info.lname}}
                <v-chip size="small" class="font-weight-bold" color="blue">
                  Supervisor
                </v-chip>
              </h3>
              <p class="text-body-2">{{ user.user_info.bio  }}</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="py-5 px-10">
            <v-icon color="grey"> mdi-map-marker </v-icon>
            <span class="ml-4">{{ user.user_info.location  }}</span>
          </div>

          <v-divider></v-divider>
          <div class="py-5 px-10">
            <v-icon color="grey"> mdi-email-check-outline </v-icon>
            <span class="ml-4">{{ user.user_info.email  }}</span>
          </div>
          <v-divider></v-divider>

          <div class="py-5 px-10">
            <v-icon color="grey"> mdi-phone-outline </v-icon>
            <span class="ml-4">{{ user.user_info.phone_number  }}</span>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <!-- ---------------------------------------------- -->
        <!--   Basic Infomation -->
        <!-- ---------------------------------------------- -->
        <v-card class="mb-5">
          <v-card-title class="bg-white py-4 font-weight-bold">
            Basic Infomation
            <v-spacer></v-spacer>
            <v-switch v-model="editable" label="Edit mode" color="blue"></v-switch>
          
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-7">
            <v-row>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">First Name</v-label>
                <v-text-field
                  v-model="user.user_info.fname"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="First Name"
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Last Name</v-label>
                <v-text-field
                  v-model="user.user_info.lname"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="Last Name"
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Email</v-label>
                <v-text-field
                  v-model="user.user_info.email"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="example@email.com"
                  hide-details
              /></v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Location</v-label>
                <v-text-field
                  v-model="user.user_info.location"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="Location"
                  hide-details
              /></v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Phone Number</v-label>
                <v-text-field
                  v-model="user.user_info.phone_number"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="Location"
                  hide-details
              /></v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Bio</v-label>
                <v-text-field
                  v-model="user.user_info.bio"
                  :readonly=editInfoMode
                  :class="editInfoMode ? 'bg-blue-grey-lighten-5 text-grey' : ''"
                  color="blue"
                  variant="outlined"
                  density="compact"
                  type="text"
                  placeholder="Location"
                  hide-details
              /></v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">Update Profile Picture</v-label>
                  
                    <v-file-input
                    ref="imageinput"
                    accept="image/*"
                    @change="uploadImage"
                    v-model="image"
                    :class="editInfoMode ? 'bg-blue-grey-lighten-5 hidden ' : ''"
              color="blue"
              variant="outlined"
              
                  ></v-file-input>
                    
                </v-col>
                
              </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-5">
            <v-spacer></v-spacer>
            <v-btn
              class="px-5"
              color="success"
              elevation="1"
              variant="outlined"
              :disabled="editInfoMode"
            >
              Unpdate Basic Info</v-btn
            >
          </v-card-actions>
        </v-card>

        

        <!-- ---------------------------------------------- -->
        <!--   Change Password  -->
        <!-- ---------------------------------------------- -->
        <v-card class="mb-5">
          <v-card-title class="bg-white py-4 font-weight-bold">
            Change Password
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-7">
            <v-row>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2"
                  >Current Password</v-label
                >
                <v-text-field
                  v-model="currentPassword"
                  density="compact"
                  color="blue"
                  variant="outlined"
                  :type="currentPasswordShow ? 'text' : 'password'"
                  placeholder="Current Password"
                  hide-details
                  :append-inner-icon="
                    currentPasswordShow ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  @click:append-inner="
                    currentPasswordShow = !currentPasswordShow
                  "
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6"> </v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2">New Password</v-label>
                <v-text-field
                  v-model="newPassword"
                  density="compact"
                  color="blue"
                  variant="outlined"
                  :type="newPasswordShow ? 'text' : 'password'"
                  placeholder="new password"
                  hide-details
                  :append-inner-icon="
                    newPasswordShow ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  @click:append-inner="newPasswordShow = !newPasswordShow"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-label class="font-weight-medium mb-2"
                  >Confirm New Password</v-label
                >
                <v-text-field
                  v-model="confirmPassword"
                  density="compact"
                  color="blue"
                  variant="outlined"
                  :type="confirmPasswordShow ? 'text' : 'password'"
                  placeholder="confirm password"
                  hide-details
                  :append-inner-icon="
                    confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  @click:append-inner="
                    confirmPasswordShow = !confirmPasswordShow
                  "
                >
                </v-text-field
              ></v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-5">
            <v-spacer></v-spacer>
            <v-btn
              class="px-5"
              color="success"
              elevation="1"
              variant="outlined"
            >
              Unpdate Password</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
