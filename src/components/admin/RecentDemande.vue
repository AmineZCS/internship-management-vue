<template>
   <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Supervisor Demndes</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Student Name</td>
                                <td>Speciality</td>
                                <td>Companie</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status delivered">Accepted</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status delivered">Accepted</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status delivered">Accepted</span></td>
                            </tr>
                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Hamza Mohamed</td>
                                <td>TI</td>
                                <td>Djezzy</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- ================= New Customers ================ -->
               
            </div>
     
   
  
</template>
<script>
export default {
  name: 'RecentDemande',
  components: {
   
  },
  methods: {
    apply() {
      // handle apply button click
    },
   
  },
}
</script>
<style scoped>
/* =========== Google Fonts ============ */


/* =============== Globals ============== */
* {
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  position: relative;
  width: 100%;
}

/* =============== Navigation ================ */


/* ================== Order Details List ============== */
.details {
  position: relative;
  width: 100%;
  padding: 20px;
  
  /* margin-top: 10px; */
}

.details .recentOrders {
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.details .cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cardHeader h2 {
  font-weight: 600;
  color: var(--blue);
}
.cardHeader .btn {
  position: relative;
  padding: 5px 10px;
  background: var(--blue);
  text-decoration: none;
  color: var(--white);
  border-radius: 6px;
}

.details table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.details table thead td {
  font-weight: 600;
}
.details .recentOrders table tr {
  color: var(--black1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.details .recentOrders table tr:last-child {
  border-bottom: none;
}
.details .recentOrders table tbody tr:hover {
  background: var(--blue);
  color: var(--white);
}
.details .recentOrders table tr td {
  padding: 10px;
}
.details .recentOrders table tr td:last-child {
  text-align: end;
}
.details .recentOrders table tr td:nth-child(2) {
  text-align: end;
}
.details .recentOrders table tr td:nth-child(3) {
  text-align: center;
}
.status.delivered {
  padding: 2px 4px;
  background: #8de02c;
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
.status.pending {
  padding: 2px 4px;
  background: #e9b10a;
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
.status.return {
  padding: 2px 4px;
  background: #f00;
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
.status.inProgress {
  padding: 2px 4px;
  background: #1795ce;
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}


/* ====================== Responsive Design ========================== */


@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
  }
  .recentOrders {
    overflow-x: auto;
  }
  .status.inProgress {
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .cardBox {
    grid-template-columns: repeat(1, 1fr);
  }
  .cardHeader h2 {
    font-size: 20px;
  }
  .user {
    min-width: 40px;
  }
  .navigation {
    width: 100%;
    left: -100%;
    z-index: 1000;
  }
  .navigation.active {
    width: 100%;
    left: 0;
  }
  .toggle {
    z-index: 10001;
  }
  .main.active .toggle {
    color: #fff;
    position: fixed;
    right: 0;
    left: initial;
  }
}

</style>