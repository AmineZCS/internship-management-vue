import { createRouter, createWebHistory } from "vue-router";
import api from "../api";
import HomeVue from "../views/HomeView.vue";
import LoginComp from "../components/LoginComp.vue";
import StDashboard from "../components/student/StDashboard.vue";
import SpDashboard from "../components/supervisor/SpDashboard.vue";
import AdDashboard from "../components/admin/AdDashboard.vue";
import StSettings from "../components/student/StSettings.vue";

import NotFound from "../components/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "HomeVue",
    component: HomeVue,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginComp,
      },
      {
        path: "contact-us",
        name: "contact-us",
      },
    ],
  },
  {
    path: "/Student",
    name: "StDashboard",
    component: StDashboard,
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => checkRole(to, from, next, "student"),
    children: [
      {
        path: "Settings",
        name: "StSettings",
        component: StSettings,
      },
    ],
  },
  {
    path: "/Supervisor",
    name: "SpDashboard",
    component: SpDashboard,
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => checkRole(to, from, next, "supervisor"),
  },
  {
    path: "/Admin",
    name: "AdDashboard",
    component: AdDashboard,
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => checkRole(to, from, next, "admin"),
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

async function checkRole(to, from, next, role) {
  let user = null;
  try {
    const response = await api.get("/user");
    console.log(response.data);
    user = response.data;
  } catch (error) {
    console.log(error.response.data);
    if (error.response.data.message === "Unauthenticated.") {
      console.log("user is not authenticated");
    }
  }
  if (!user || user.role !== role) {
    next("/login");
  } else {
    next();
  }
}

// Add navigation guard to check if the user is authenticated
// router.beforeEach(async (to, from, next) => {
//   let isAuthenticated = false;
//   // check if the user is authenticated

//   try {
//     const response = await api.get("/user");
//     console.log(response.data);
//     isAuthenticated = true;
//   } catch (error) {
//     console.log(error.response.data);
//     if (error.response.data.message === "Unauthenticated.") {
//       isAuthenticated = false;
//       console.log("user is not authenticated");
//     }
//   }

//   // Replace with your authentication check
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
