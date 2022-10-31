import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isChanging: false,
    cv: {
      personalInformation: {
        profilePicture: "",
        givenName: "",
        familyName: "",
        email: "",
        headline: "",
        phone: "",
        address: "",
        postCode: "",
        city: "",
        personalDetail: [
          { content: "", subtitle: ["", ""] },
          { content: "", subtitle: ["", ""] },
          { content: "", subtitle: ["", ""] },
        ],
      },
      education: {
        title: "",
        cards: [],
      },
      employment: {},
      skills: {},
      languages: {},
      reference: {},
    },
    cvData: {
      personalInformation: {},
      education: {
        title: "",
        cards: [],
      },
      employment: {},
      skills: {},
      languages: {},
      reference: {},
    },
  },
  getters: {
    getCv(state) {
      return state.cvData;
    },
    getCvId(state) {
      return state.cvData.id;
    },
    getPersonalInformation(state) {
      return state.cvData.personalInformation;
    },
    getEducation(state) {
      return state.cvData.education;
    },
    getEmployment(state) {
      return state.cvData.employment;
    },
    getReference(state) {
      return state.cvData.reference;
    },
    getLanguages(state) {
      return state.cvData.languages;
    },
    getSkills(state) {
      return state.cvData.skills;
    },
    getCardById: (state) => (section, cardId) => {
      return state.cvData[section]["cards"][cardId];
    },
  },
  mutations: {
    addCard: (state, payload) => {
      state.cvData[payload.section]["cards"][payload.card.id] = payload.card;
    },
  },
  actions: {
    addCard: ({ commit }, payload) => {
      commit("addCard", payload);
    },
  },
  modules: {},
});
