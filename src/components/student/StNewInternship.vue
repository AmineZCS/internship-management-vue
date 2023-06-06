<template>
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
                <h1 class="headings">Supervisor Inforamations <v-avatar
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
                            
                            v-model="supervisor.fname" 
                            color="#f7ab3e"
                            label="First Name"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="supervisor.lname" 
                            color="#f7ab3e"
                            label="Last Name"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="supervisor.phoneNumber" 
                            color="#f7ab3e"
                            label="Phone Number"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="supervisor.bio" 
                            color="#f7ab3e"
                            label="Biography"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="supervisor.email"
                            color="#f7ab3e"
                            label="Email"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="supervisor.location"
                            color="#f7ab3e"
                            label="Location"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
      </v-window-item>

      <v-window-item :value="2">
        <v-card
                  class="mb-12 text-center"
                  
                  elevation="0"
                  
                >
                <h1 class="headings">Company Inforamations <v-avatar
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
                            v-model="company.name"
                            color="#f7ab3e"
                            label="Name"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="company.email"
                            color="#f7ab3e"
                            label="Email"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="company.phoneNumber"
                            color="#f7ab3e"
                            label="Phone Number"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="company.address"
                            color="#f7ab3e"
                            label="Address"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field
                            v-model="company.bio"
                            color="#f7ab3e"
                            label="Biographie"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>

            </v-card>
      </v-window-item>
      <v-window-item :value="3">
        <v-card
                  class="mb-12 text-center"
                  
                  elevation="0"
                  
                >
                <h1 class="headings">Internship Inforamations <v-avatar
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
                            v-model="internship.position"
                            color="#f7ab3e"
                            label="Title"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="internship.description"
                            color="#f7ab3e"
                            label="Description"
                            id="id"
                        ></v-text-field>
                    </v-col>
                    
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="internship.location"
                            color="#f7ab3e"
                            label="Location"
                            id="id"
                        ></v-text-field>
                    </v-col>

                  <v-col cols="12" md="6">
                      <v-autocomplete
                      required
                        v-model="selectedDepartments"
                        :items="departments"
                        :item-title="item => item.abbreviation"
                        :item-text="item => item.abbreviation"
                        :item-value="item => item.id"
                        outlined
                        label="Departments"
                        multiple
                        chips
                        clearable
                      ></v-autocomplete>
                    </v-col>
  
                    </v-row>
                    <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="internship.startDate"
                            type="date"
                            color="#f7ab3e"
                            label="Start Date"
                            id="id"
                        ></v-text-field>
                    </v-col>
               

                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="internship.endDate"
                            type="date"
                            color="#f7ab3e"
                            label="End Date"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>

            </v-card>
      </v-window-item>
      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <img
            class="mb-4"
            contain
            height="128"
            src="../../assets/IA.png"
          />
          <h3 class="text-h6 font-weight-light mb-2">
            Internship Created Successfully
          </h3>
          <span class="text-caption text-grey">Thank You</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        v-if="step > 1 && step != 4"
        variant="text"
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="step < 4 "
        color="rgb(61 5 41)"
        variant="flat"
        class="text-white"
        @click="next"
      >
        Next
      </v-btn>
      <v-btn
        v-if="step == 3"
        color="rgb(61 5 41)"
        variant="flat"
        class="text-white"
        @click="createInternship"
      >
        Finish
      </v-btn>
      <v-btn
        v-if="step == 4"
        color="rgb(61 5 41)"
        variant="flat"
        class="text-white"
        @click="goBack"
      >
        DASHBOARD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '../../api.js'
  export default {
    data: () => ({
      step: 1,
      departments: [],
      selectedDepartments: [],
      supervisor:{
        fname:'',
        lname:'',
        email:'',
        phoneNumber:'',
        location:'',
        bio:'',
      },
      company:{
        name:'',
        address:'',
        email:'',
        phoneNumber:'',
        bio:'',
      },
      internship:{
        position:'',
        description:'',
        location:'',
        startDate:'',
        endDate:'',
        selectedDepartments:[],
      }
    }),
    computed: {
      // one variable to chack if inputs are not empty for every step
      isStep1Valid () {
        return this.supervisor.fname !== '' &&
          this.supervisor.lname !== '' &&
          this.supervisor.email !== '' &&
          this.supervisor.phoneNumber !== '' &&
          this.supervisor.bio !== ''
      },
      isStep2Valid () {
        return this.company.name !== '' &&
          this.company.address !== '' &&
          this.company.email !== '' &&
          this.company.phoneNumber !== '' &&
          this.company.bio !== ''
      },
      isStep3Valid () {
        return this.internship.position !== '' &&
          this.internship.description !== '' &&
          this.internship.location !== '' &&
          this.internship.startDate !== '' &&
          this.internship.endDate !== ''
          
      },
    },
    methods:{
      goBack(){
        // emit close 
        this.$emit('close')
        // go to home page
        this.$router.push('/')
    },
      next () {
        if (this.step === 1) {
          if (this.isStep1Valid) {
            this.step++
          }
        } else if (this.step === 2) {
          if (this.isStep2Valid) {
            this.step++
          }
        } else if (this.step === 3) {
          if (this.isStep3Valid) {
            this.step++
          }
        } else if (this.step === 4) {
          this.submit()
        }
      },
      async getDepartments () {
        try {
          const response = await api.get('/departments')
          this.departments = response.data
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      
      },
      async createInternship(){
        if (this.isStep3Valid) {
          console.log(this.internship)
          try{
            const response = await api.post('/studentNewInternship',{
                supervisor_fname:this.supervisor.fname,
                supervisor_lname:this.supervisor.lname,
                supervisor_email:this.supervisor.email,
              supervisor_phone_number:this.supervisor.phoneNumber,
              supervisor_bio:this.supervisor.bio,
              supervisor_location: this.supervisor.location,
              company_name:this.company.name,
              company_address:this.company.address,
              company_email:this.company.email,
              company_phone_number:this.company.phoneNumber,
              company_bio:this.company.bio,
              internship_position:this.internship.position,
              internship_description:this.internship.description,
              internship_location:this.internship.location,
              internship_start_date:this.internship.startDate,
              internship_end_date:this.internship.endDate,
              departments: this.selectedDepartments,
        }
              )
              console.log(response.data)
            //   emit
            this.$emit('internshipCreated')
              this.step++
    }catch(error){
        console.log(error)
      }}}
  },

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