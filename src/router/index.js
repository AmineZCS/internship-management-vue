import { createRouter, createWebHistory } from "vue-router";
import api from "../api";
import welcomePage from "../components/welcomePage2.vue"
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
import SpApplications from "../components/supervisor/SpApplications.vue";
import SpFeedback from "../components/supervisor/SpFeedback.vue";
import SpAttendance from "../components/supervisor/SpAttendance.vue";
import SpEvaluations from "../components/supervisor/SpEvaluations.vue";
import AdStudents from "../components/admin/AdStudents.vue";
import AdCompanies from "../components/admin/AdCompanies.vue";
import SupervisorSignup from "../components/SignUpAmine.vue";
import StAppliedInternships from "../components/student/StAppliedInternships.vue";
import StEvaluation from "../components/student/StEvaluation.vue";
import checkCertificate from "../components/checkCertificate.vue";
import StAttendance from "../components/student/StAttendance.vue";
import StudentSignup from "../components/StudentSignup.vue"
import NotFound from "../components/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "welcomePage",
    component: welcomePage,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginComp,
        meta: {
          transitionName: "route",
        },
      }
      
    ],

  },
  // route to check the certificate token (passed in the params)
  {
    path: "/certificate/:token",
    name: "checkCertificate",
    component: checkCertificate,
  },
  {
    path: "/SupervisorSignup",
    name: "SupervisorSignup",
    component:SupervisorSignup,
  },
  {
    path: "/StudentSignup",
    name: "StudentSignup",
    component:StudentSignup,
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
      {
        path: "AppliedInternships",
        name: "StAppliedInternships",
        component: StAppliedInternships,
      },
      {
        path: "Evaluation",
        name: "StEvaluation",
        component: StEvaluation,
      },
      {
        path: "Attendance",
        name: "StAttendance",
        component: StAttendance,
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
      {
        path: "Applications",
        name: "SpApplications",
        component: SpApplications,
      },
      {
        path: "Attendance",
        name: "SpAttendance",
        component: SpAttendance
      },
      {
        path: "Evaluations",
        name: "SpEvaluations",
        component: SpEvaluations
      }
      
    ]
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
      {
        path: "Students",
        name: "AdStudents",
        component: AdStudents,
      },
      {
        path: "Companies",
        name: "AdCompanies",
        component: AdCompanies,
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
