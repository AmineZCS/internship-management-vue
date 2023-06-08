<template>
  <div class="certificate-container" v-if="certificate">
    <div class="certificate-header">
      <h1>Internship Certificate</h1>
    </div>
    <div class="certificate-details">
      <div class="certificate-row">
        <div class="certificate-label">Student Name:</div>
        <div class="certificate-value">{{ certificate.student.fname }} {{ certificate.student.lname }}</div>
      </div>
      <div class="certificate-row">
        <div class="certificate-label">Supervisor Name:</div>
        <div class="certificate-value">{{ certificate.supervisor.fname }} {{ certificate.supervisor.lname }}</div>
      </div>
      <div class="certificate-row">
        <div class="certificate-label">Internship Title:</div>
        <div class="certificate-value">{{ certificate.internship.position }}</div>
      </div>
      <div class="certificate-row">
        <div class="certificate-label">Company Name:</div>
        <div class="certificate-value">{{ certificate.company.name }}</div>
      </div>
      <div class="certificate-row">
        <div class="certificate-label">Start Date:</div>
        <div class="certificate-value">{{ formatDate(certificate.internship.start_date) }}</div>
      </div>
      <div class="certificate-row">
        <div class="certificate-label">End Date:</div>
        <div class="certificate-value">{{ formatDate(certificate.internship.end_date) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
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
        const response = await api.get("/certificate", {
          params: {
            token: this.$route.params.token
          }
        });
        console.log(response.data);
        this.certificate = response.data;
      } catch (error) {
        console.log(error);
        this.error = error.response;
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },
  mounted() {
    this.checkCertificate();
  }
};
</script>

<style scoped>
.certificate-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
}

.certificate-header {
  text-align: center;
  margin-bottom: 20px;
}

.certificate-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.certificate-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.certificate-label {
  font-weight: bold;
  margin-right: 10px;
}

.certificate-value {
  flex: 1;
  text-align: right;
}

.certificate-footer {
  text-align: center;
  margin-top: 20px;
}
</style>