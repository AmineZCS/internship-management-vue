<template>
    <div class="Holder">
       <v-row class="my-0">
         <v-col cols="12" md="6" class="d-flex left-col pb-0" style="position: relative;">
             <img class="logo" src="../assets/IAWhite.png" alt="" @click="goBack">
             <p class="logoName">InternshipAxis.</p>
             <div class="left-text-holder">
                 <h1 class="left-header mb-5">Let's get started .</h1>
                 <h1 class="left-header mb-5">Sign up as an Intern </h1>
                 <p style="color: white; font-weight: 300;">Join us today and make a difference in the lives of interns <br> 
                     as they embark on their professional journeys. <br> Together, we can create a 
                     supportive and enriching <br> environment for the leaders of tomorrow.</p>
                 <v-btn class="gobackBtn" rounded color="white" @click="goBack">
                     <v-icon>mdi-arrow-left</v-icon>
                       go back
                 </v-btn>
             </div>
           </v-col>
           <v-col style="height: 100vh !important;" cols="12" md="6" class="d-flex justify-center align-center pb-0">
        
   <v-card
     width="80%"
     style="padding:20px !important;"
     elevation="10"              
   >
     
 
     <v-window v-model="step">
       <v-window-item :value="1">
         <v-card
                   class="mb-12 text-center"
                   height="390px"
                   elevation="0"
                   style="height: 100% !important;width:100% !important;"
                   
                 >
                 <h1 class="headings">Personal Inforamations <v-avatar
         color="#f7ab3e"
         size="24"
         v-text="step"
         class="text-black "
         style="font-size: 20px !important;"
       ></v-avatar></h1>
       <br/>
                 
                 
                 <v-row>
                     <v-col cols="12" md="6">
                         <v-text-field
                             
                             v-model="student.fname" 
                             color="#f7ab3e"
                             label="First Name"
                             id="id"
                         ></v-text-field>
                     </v-col>
                     <v-col cols="12" md="6">
                         <v-text-field
                             v-model="student.lname" 
                             color="#f7ab3e"
                             label="Last Name"
                             id="id"
                         ></v-text-field>
                     </v-col>
                 </v-row>
 
                 <v-row>
                     <v-col cols="12" md="6">
                        <v-autocomplete
                        required
                        v-model="student.departmentID"
                        :items="departments"
                        :item-title="item => item.abbreviation"
                        :item-text="item => item.abbreviation"
                        :item-value="item => item.id"
                        outlined
                        label="Departments"
                        chips
                        clearable
                      ></v-autocomplete>
                     </v-col>
                 </v-row>
 
                 <v-row>
                     <v-col cols="12" md="6">
                         <v-text-field
                         v-model.lazy="student.email"
                      color="#f7ab3e"
                      label="Email"
                      id="id"
                      placeholder="example@univ-constantine2.dz"
                      hint="Use your university email"
                      :rules="[emailRule]"
                    ></v-text-field>
                     </v-col>
                     <v-col cols="12" md="6">
                         <v-text-field
                             v-model="student.password"
                             color="#f7ab3e"
                             label="Paasword"
                             id="id"
                         ></v-text-field>
                     </v-col>
                 </v-row>
             </v-card>
       </v-window-item>
 
      
       <v-window-item :value="2">
         <div class="pa-4 text-center">
           <img
             class="mb-4"
             contain
             height="128"
             src="../assets/IA.png"
           />
           <h3 class="text-h6 font-weight-light mb-2">
             Welcome to <b>InternshipAxis.</b>
           </h3>
           <span class="text-caption text-grey">Thanks for signing up!</span>
         </div>
       </v-window-item>
     </v-window>
 
     <v-divider></v-divider>
 
     <v-card-actions>
       <v-btn
         v-if="step > 1 && step != 2"
         variant="text"
         @click="step--"
       >
         Back
       </v-btn>
       <v-spacer></v-spacer>
       <v-btn
         v-if="step == 1"
         :disabled="!isStep1Valid"
         color="rgb(61 5 41)"
         variant="flat"
         class="text-white"
         @click="createStudent"
       >
         Submit
       </v-btn>
       
       <v-btn
         v-if="step == 2"
         color="rgb(61 5 41)"
         variant="flat"
         class="text-white"
         @click="goBack"
       >
         GO HOME
       </v-btn>
     </v-card-actions>
   </v-card>
 </v-col>
 </v-row>
     </div>
 </template>
 <script>
 import api from '../api.js'
   export default {
     data: () => ({
       step: 1,
       departments: [],
       student:{
         fname:'',
         lname:'',
         email:'',
         password:'',
         departmentID:null,
       }
     }),
     computed: {
       // one variable to chack if inputs are not empty for every step
       isStep1Valid () {
         return this.student.fname !== '' &&
           this.student.lname !== '' &&
           this.student.email !== '' &&
           this.student.password !== '' &&
           this.student.departmentID !== ''
       },
    emailRule() {
      return (value) => {
        if (!value.endsWith('@univ-constantine2.dz')) {
          return 'Use your student email'
        }
        return true
      }
    }
     },
     methods:{
       goBack(){
         // delete all from local storage 
         
         localStorage.removeItem('token')
         localStorage.clear()
         // go to home page
         this.$router.push('/')
     },
       next () {
         if (this.step === 1) {
           if (this.isStep1Valid) {
             this.step++
           }
       }},
       async getDepartments () {
         try {
           const response = await api.get('/departments')
           this.departments = response.data
           console.log(response.data)
         } catch (error) {
           console.log(error)
         }
       
       },
       async createStudent(){
            if(this.isStep1Valid){
            try {
                const response = await api.post('/studentSignup',{
                    fname:this.student.fname,
                    lname:this.student.lname,
                    email:this.student.email,
                    password:this.student.password,
                    department_id:this.student.departmentID,
                })
                console.log(response.data)
                this.step++
            } catch (error) {
                console.log(error)
            }
        }
},},
 
   mounted(){
     this.getDepartments()
   }
 
     }
   
 </script>
 <style scoped>
     .Holder {
   width: 100%;
   height: 100vh;
 }
     .headings{
         font-family: Outfit;
         color: #3a3849;
     }
     .colors{
     color: #f7ab3e;
     color: #3a3849;
   }
   .left-header{
     color: white;
     font-family: Outfit;
     font-size: 60px;
   }
   .left-text-holder{
     margin-top:100px;
     margin-left: 60px;
   }
   .left-col{
 background-image: url(../assets/left.png);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center; 
   }
   .logo{
     width: 60px;
     height: 50px;
     position: absolute;
     top: 10px;
     left: 20px;
   }
   .logoName{
     position: absolute;
     font-family: outfit;
     font-size: 20px;
     color: white;
     font-weight: 500;
     top: 15px;
     right: 20px;
   }
   .gobackBtn{
     position: absolute;
     bottom: 30px;
   }
   .v-col{
     padding: 10px;
     margin: 10px !important;
   }
 </style>