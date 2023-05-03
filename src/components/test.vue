<template>
  <div class="home-page">
    <v-container>
      <h1 class="text-center">Welcome to My App</h1>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12">
            <v-img
              height="200"
            ></v-img>
            <v-card-title class="text-center">Admin</v-card-title>
            <v-card-text>
              <p>Log in as an admin to manage the system.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="login('admin')">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12">
            <v-img
              height="200"
            ></v-img>
            <v-card-title class="text-center">Supervisor</v-card-title>
            <v-card-text>
              <p>Log in as a supervisor to manage projects.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="login('supervisor')">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12">
            <v-img
              height="200"
            ></v-img>
            <v-card-title class="text-center">Student</v-card-title>
            <v-card-text>
              <p>Log in as a student to access course materials.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="login('student')">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    login(role) {
      // Handle login logic based on role
      console.log('Login as', role)
    }
  }
}
</script>

<style>
.home-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
