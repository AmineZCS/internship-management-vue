<template>
    <div class="contact">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="elevation-12">
            <v-card-title class="text-center">
              <h2>Contact Us</h2>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Email"
                  type="email"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Phone"
                  required
                  outlined
                ></v-text-field>
                <v-textarea
                  label="Message"
                  required
                  outlined
                  rows="5"
                ></v-textarea>
                <v-btn
                  color="primary"
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
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h3 class="mb-4">Connect with us:</h3>
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
        </v-col>
      </v-row>
    </v-container>
</div>
  </template>
  
  <script>
  export default {
    name: 'contactUs',

    methods: {
      submitForm() {
        // Handle form submission here
      },
    },
  };
  </script>
  
  <style scoped>
    .contact {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    .elevation-12 {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    }
    .social-link {
      display: inline-block;
      margin-right: 16px;
      margin-top: 16px;
      color: #333;
      transition: all 0.2s ease-in-out;
    }
    .social-link:hover {
      color: #3f51b5;
    }
  </style>
  