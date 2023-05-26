import api from "../../api";
import router from "../../router";
const user = {
  namespaced: true, // this is important when using modules
  state: {
    user: null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },

    async logout({ commit }) {
      try {
        const response = await api.post("/logout");
        console.log(response.data);
        localStorage.removeItem("token");
        commit("setUser", null);
        // redirect to login page
        router.push("/login")
      } catch (error) {
        console.log(error.response.data);
      }
    },

    // check if the user is authenticated
    async checkAuthentication({ commit }) {
      try {
        const response = await api.get("/user");
        console.log(response.data);
        if (response.data.role) {
          router.push({ path: response.data.role });
          commit("setUser", response.data);
        }
      } catch (error) {
        console.log(error.response.data);
        if (error.response.data.message === "Unauthenticated.") {
          console.log("user is not authenticated");
        }
      }
    },
  },
};
export default user;
