import { createRouter, createWebHistory } from "vue-router";
import api from "../api";
import HomeVue from "../views/HomeView.vue";
import LoginComp from "../components/LoginComp.vue";
import StDashboard from "../components/student/StDashboard.vue";
import SpDashboard from "../components/supervisor/SpDashboard.vue";
import AdDashboard from "../components/admin/AdDashboard.vue";
import StSettings from "../components/student/StSettings.vue";
import AdSettings from "../components/admin/AdSettings.vue";
import SpSettings from "../components/supervisor/SpSettings.vue";
import StInternships from "../components/student/StInternships.vue";
import AdSupervisors from "../components/admin/AdSupervisors.vue";
import AdApplications from "../components/admin/AdApplications.vue";
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
        meta: {
          transitionName: "route",
        },
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
    beforeEnter: (to, from, next) => checkRole(to, from, next, "student"),
    redirect: "/Student/Internships",
    children: [
      {
        path: "Settings",
        name: "StSettings",
        component: StSettings,
      },
      {
        path: "Internships",
        name: "StInternships",
        component: StInternships,
      },
    ],
  },
  {
    path: "/Supervisor",
    name: "SpDashboard",
    component: SpDashboard,
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => checkRole(to, from, next, "supervisor"),
    children: [
      {
        path: "Settings",
        name: "SpSettings",
        component: SpSettings,
      },
    ],
  },
  {
    path: "/Admin",
    name: "AdDashboard",
    component: AdDashboard,
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => checkRole(to, from, next, "admin"),
    children: [
      {
        path: "Settings",
        name: "AdSettings",
        component: AdSettings,
      },
      {
        path: "Supervisors",
        name: "AdSupervisors",
        component: AdSupervisors,
      },
      {
        path: "Applications",
        name: "AdApplications",
        component: AdApplications,
      },
    ],
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

// check for the role of the loggged in user:
//    - proceed if the role matches the visited page
//    - redirect to login if it doesn't match or user is not loggedin
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
