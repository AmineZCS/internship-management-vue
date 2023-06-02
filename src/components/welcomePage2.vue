<template>
    <v-app>
     
        <navBar style="z-index: 1 !important;" />
        <v-content>

      <!-- Accueil -->
      <div class="bg">
        
      <div class="navBarReg" id="home"></div>
      <section class="sec2" style="margin-top: 20px; background: transparent;">
      <div class="firstFather mb-8 mt-5">
        <v-layout row wrap class="firstPage" style="z-index: 1 !important;">
          <v-flex lg6 md6 sm12 xs12 style="margin-top: 65px;">
            <h1>Welcome to</h1>
            <h1 class="biggerh1"><span>Internship</span>Axis</h1>
            <p>Internship Axis: Streamlining internships for all. <br>
                Simplifying the process for students, department heads, <br> and supervisors.
                Efficient, user-friendly, and effective.</p>

            <v-layout row wrap class="mt-8" style="z-index: 1 !important;">
              <v-btn text rounded lg2 class="btn1 mr-6">Get started  <v-icon>mdi-arrow-right</v-icon></v-btn>
            </v-layout>
          </v-flex>
  
          <v-flex lg6 md6 sm12 xs12>
            <img src="../assets/Corporate-Intern.png" style="width: 100%;"/>
          </v-flex>
        </v-layout>
      </div>

      <div class="fourthFather mt-8" id="about">
        <h1 class="headings mt-6">About us</h1>
        <v-container class="d-flex justify-center" style="margin: auto 6% !important; width: 80% !important;">
        <v-row>
          <v-col cols="8" style="float: left !important;">
            <p>Internship Axis is a platform dedicated to connecting students, organizations, and educational 
              institutions for seamless internship experiences. <br><br> Our mission is to empower students 
              by providing them with a streamlined and user-friendly platform to discover, apply for, 
              and secure internships. We strive to bridge the gap between students and industry professionals, 
              enabling valuable learning opportunities and fostering future career growth. <br><br> With Internship Axis, 
              unlock your potential and embark on a transformative internship journey.
            </p>
          </v-col>
          <v-col cols="3" class="justify-end ml-6">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
              <img 
              fill
              src="../assets/IA.png"   style=" margin-top: 0px;">
          </v-col>
        </v-row>
      </v-container>
      </div>
      
      <!-- Contact -->
  
      <div class="fourthFather mt-8" id="contact">
        <h1 class="headings mt-6">Contact</h1>
        <div class="contact">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="elevation-0">
            <v-card-title class="text-center">
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  color="#f7ab3e"
                  required
                  rounded
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Email"
                  type="email"
                  color="#f7ab3e"
                  required
                  rounded
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Phone"
                  color="#f7ab3e"
                  required
                  rounded
                  outlined
                ></v-text-field>
                <v-textarea
                  label="Message"
                  color="#f7ab3e"
                  required
                  rounded
                  outlined
                  rows="5"
                ></v-textarea>
                <v-btn
                  color="#f7ab3e"
                  rounded
                  class="white--text"
                  @click="submitForm"
                >
                  Send Message
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center">
          <v-row class="justify-center my-4">
            <a href="https://www.facebook.com/" class="social-link">
            <v-icon size="42">mdi-facebook</v-icon>
          </a>
          <a href="https://www.twitter.com/" class="social-link">
            <v-icon size="42">mdi-twitter</v-icon>
          </a>
          <a href="https://www.instagram.com/" class="social-link">
            <v-icon size="42">mdi-instagram</v-icon>
          </a>
          <a href="https://www.linkedin.com/" class="social-link">
            <v-icon size="42">mdi-linkedin</v-icon>
          </a>
          </v-row>
      </v-row>
    </v-container>
</div>
      </div>
    </section>
  </div>
      <!-- Footer -->
  
      <v-footer dark padless class="footerr">
          <v-card-text class="white--text text-center" >
            {{ new Date().getFullYear() }} — <strong>InternshipAxis - &copy; all rights reserved</strong>
          </v-card-text>
      </v-footer>
    </v-content>
      <router-view style="z-index: 100;">
      </router-view>
    </v-app>
  </template>
  
  <script>
    import navBar from './navBar.vue';
    export default {
  
      components:{
        navBar,
      },
      data(){
        return{
        showLoginModal: false,
        items: [
          { icon: 'mdi-facebook', link: 'https://www.facebook.com/universiteconstantine2' },
          { icon: 'mdi-twitter', link: 'https://www.twitter.com' },
          { icon: 'mdi-web', link: 'https://elearning@univ-constantine2.dz' },
          { icon: 'mdi-email', link: 'mailto:elearning@univ-constantine2.dz' },
        ],
        
      }},
  
      methods: {
    },
  
    }
      
      
      
  
  </script>
  
  <style scoped>
  /* font is outifit */
  *{
    font-family: 'Outfit', sans-serif;
  }
  .bg .bgg{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -80px;
    opacity: 40%;
    right: 0;
    
  }
  .FirstTitle{
    position: absolute;
   margin-top: 120px;
    font-size: 120px;
    color: #120030;
    letter-spacing: 4px;
    font-family: elephant Regular;
  }
  .FirstTitle span{
    color: #120030;
    stroke: 2px #120030;
  }
  @media (max-width: 1200px) {
    .mainImg{
      max-height: 300px;
      width: 300px;
    }
  }
  /* FristPage "1/4" */
  .navBarReg{
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }
  .firstPage{
    margin: 0 80px 0 120px;
  }
  .firstPage h1 {
    font-family:'Outfit';
    font-size: 102px;
    font-weight: 600;
    line-height: 94%;
    color: #3a3849;
  }
  
  .firstPage h1 span{
    color: #f7ab3e;
  }
  .firstPage p{
    margin-top: 10px;
    font-size: 20px;
  }
  .firstPage p span{
    font-weight: 500;
  }
  .btn1{
    background-color: #f7ab3e;
    color: white;
  }
  .btn1:hover{
    color: #f7ab3e;
      background-color:#3a3849;
      transition: .5s;
  }
  .btn2:hover{
      border-color: #120030;
      transition: .5s;
  }
  .headings{
    margin-left: 100px;
    margin-bottom: 100px;
    font-family:'Outfit';
    font-size: 102px;
    font-weight: 600;
    line-height: 94%;
    color: #3a3849;
  }
  .logoStage{
    margin-left: 40%;
  }
  /* fourthPage "4/4" */
  .fourthFather h1{
    margin-bottom: 20px;
  }
  .fourthFather a{
    display: block;
    font-size: 1.33rem;
    font-weight: bold;
    color: #120030;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  .fourthFather a:hover{
    color: #63D693;
  }
  .sec2{
    
    position: relative;
    background-color: #fff;
  }
  .colors{
    color: #f7ab3e;
    color: #3a3849;
  }
  .fourthFather p{
  font-size: 20px;
}
.footerr{
  color:white;
  background-color: #161425;
}
.route-enter-active {
  transition: opacity 1s;
}

.route-leave-active {
  transition: opacity 1s;
}

.route-enter,
.route-leave-to {
  opacity: 0;
}
  </style>
  