<template>
   <div class="home-page">
    <v-container class="pt-15">
        <v-row>
            <v-col md="6">
                <h2 class ="intro-text">Welcome to our Internship App</h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus tenetur libero beatae explicabo la
                    boriosam adipisci earum, ducimus nemo id dolorem! Asperiores ratione aliquid modi, distinctio numquam ne
                    que sapiente? Optio.</p>
                 <v-btn color="success" class="white--text mr-10" rounded>Get Started</v-btn>

            </v-col>
            <v-col md="6">
                <img width = "100%" height="80%" src="./../assets/img3.jpg"> 
            </v-col>
        </v-row>
    </v-container>
</div>
    </template>
    
    <script>
    
    export default {
      name: "WelcomeVue",
    
      data(){
        return{
          
        }
      }
    };
    </script>
    <style  scoped >
    h2.intro-text {
        font-size:65px;
        font-weight: bold;
        color: #444;
    }
    p.description{
        font-size:19px;
        margin:32px 0px;
        color:#444444ba;
    }
    .home-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
    