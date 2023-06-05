<script>
import api from "../api";
// when mounted, call the api and pass the token from the route params to get the response
export default {
  name: "checkCertificate",
  data() {
    return {
      certificate: null,
      error: null
    };
  },
methods: {
    async checkCertificate() {
        try {
            const response = await api.get('/certificate', {
                params: {
                    token: this.$route.params.token,
                }
            });
            console.log(response.data);
            this.certificate = response.data;
        } catch (error) {
            console.log(error);
            this.error = error.response.data;
        }
    }
},

      
  mounted() {
    this.checkCertificate();
  }
};
</script>
<template>
    <div>
        <h1>Check Certificate</h1>
        <div v-if="certificate">
            <h2>Certificate Details</h2>
            <p>Student Name: {{ certificate.student.fname }} {{ certificate.student.lname }}</p>
            <p>Internship Title: {{ certificate.internship.position }}</p>
            <!-- <p>Completion Date: {{ certificate.completionDate }}</p> -->
        </div>
        <div v-if="error">
            <h2>Error</h2>
            <p>{{ error }}</p>
        </div>
    </div>
</template>