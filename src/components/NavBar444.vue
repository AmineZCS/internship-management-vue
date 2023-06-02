<template>
    <v-app-bar
          style="padding:0px 90px"
          app
          color="white"
          light
          elevate-on-scroll
          elevation="6"
        >
          
        <v-toolbar-title >
          Internship
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-list class="d-flex align-center">
          <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
            <v-list-item-title>{{menu.title}}</v-list-item-title>
            
          </v-list-item>
          <v-btn outlined color="success">
            Get Started
          </v-btn>
        </v-list>
          
        </v-app-bar>
    
      
    </template>
    
    <script>
    
    export default {
      name: "NavBar",
    
      data(){
        return{
          menus:[
            {title:'Home',route:'home'},
            {title:'About us',route:'about-us'},
            {title:'Contact us',route:'contact-us'},
            {title:'Login',route:'login'},
            
            
          ]
        }
      }
    };
    </script>
    