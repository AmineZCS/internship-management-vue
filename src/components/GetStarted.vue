<template>
   <div class="users">
    <h1 class="subheading grey--text">USERS</h1>
    <v-container class="pt-15">
      <v-layout md63 row wrap>
        <v-flex md4 xs4 lg4 sm4 v-for="user in users" :key="user.name">
          <v-card flat class="text-xs-center ma-3">hello
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ user.name }}</div>
              <div class="grey--text">{{ user.role }}</div>
            </v-card-text>
            <v-card-action>
              <v-btn flat color="grey">
                <v-icon small right>login</v-icon>
                
              </v-btn>
            </v-card-action>
          </v-card>

        </v-flex>
      </v-layout>
   
    </v-container>
  </div>
      
    </template>
    
    <script>
    
    export default {
      name: "GetStarted",
    
      data(){
        return{
          users:[
            {name:'Admin' , role : 'Espace Adminstrateur'},
            {name:'supervisor' , role : 'Espace supervisor'},
            {name:'student' , role : 'Espace student'}
          ]
          
        }
      }
    };
    </script>
    <style  scoped >

</style>
    