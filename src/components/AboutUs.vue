<template>
   <div class="aboutUs">
    <v-container class="pt-15">
        <v-row>
            <v-col md="6">
                <img width="100%"  src="./../assets/img4.jpg" alt="">
            </v-col>
            <v-col md="6">
                <v-subheader class="text-h4">About Us</v-subheader>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus, labore cumque molestiae fugiat velit c
                    onsectetur sit ratione iusto sequi ea aliquid eos modi earum id, iste odio tempore. Tenetur?</p>
                    <v-list>
                        <v-list-item>
                            <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                            <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipi</v-list-item-subtitle>
                           
                            
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                            <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipi</v-list-item-subtitle>
                           
                            
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
                            <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipi</v-list-item-subtitle>
                           
                            
                        </v-list-item>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quae quia temporibus beatae architecto voluptatibus nulla debitis quaera
                            t natus. Vero, dolores hic. Harum, eum consectetur impedit iusto fuga asperiores consequuntur.</p>
                    </v-list>
            </v-col>
        </v-row>
    </v-container>
</div>
    </template>
    
    <script>
    
    export default {
      name: "AboutView",
    
      data(){
        return{
          
        }
      }
    };
    </script>
  <style scoped>
      .aboutUs {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  </style>
    