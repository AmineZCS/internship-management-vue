const theme = {
    namespaced: true,
    state: {
        miniSidebar: false,
    darkTheme: false,
    primaryColor: {
      colorId: 2,
      colorName: "grey",
      colorValue: "#1d9bf0",
    },
    localCode: "en",
    mainSidebar: true
    },
    getters: {
        miniSidebar: state => state.miniSidebar,
        darkTheme: state => state.darkTheme,
        primaryColor: state => state.primaryColor,
        localCode: state => state.localCode,
        mainSidebar: state => state.mainSidebar
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.miniSidebar = !state.miniSidebar;
            state.mainSidebar = !state.mainSidebar;
        },
        OPEN_SIDEBAR(state) {
            state.miniSidebar = false;
            state.mainSidebar = true;
        },
        CLOSE_SIDEBAR(state) {
            state.miniSidebar = true;
            state.mainSidebar = false;
        },
        TOGGLE_DARK_THEME(state) {
            state.darkTheme = !state.darkTheme;
        }}
    }
export default theme;
            