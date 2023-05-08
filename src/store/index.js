import { createStore } from "vuex";
import notifications from "./modules/notifications";
import user from "./modules/user";
import selectedInternship from "./modules/selectedInternship";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ["user"],
});
export default createStore({
  modules: {
    user,
    notifications,
    selectedInternship,
  },
  plugins: [dataState],
});
