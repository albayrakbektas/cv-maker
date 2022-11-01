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
        personalDetail: [],
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
    getPersonalInformationProperties: (state) => (property) => {
      return state.cvData.personalInformation[property];
    },
    getAllPersonalDetail: (state) => {
      return state.cvData.personalInformation.personalDetail;
    },
    getPersonalInformationPersonalDetail: (state) => (title) => {
      let list = Object.keys(state.cvData.personalInformation.personalDetail);
      for (let i = 0; i < list.length; i++) {
        if (list[i] === title) {
          return state.cvData.personalInformation.personalDetail[title].content;
        }
      }
    },
    getEducation(state) {
      return state.cvData.education;
    },
    getEmployment(state) {
      return state.cvData.employment;
    },
    getSection: (state) => (section) => {
      return state.cvData[section];
    },
    getSectionCards: (state) => (section) => {
      return state.cvData[section]["cards"];
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
    setPersonalInformationProperties: (state, payload) => {
      state.cvData.personalInformation[payload.property] = payload.value;
    },
    setPersonalDetails: (state, payload) => {
      // for (
      //   let i = 0;
      //   i < state.cvData.personalInformation.personalDetail.length;
      //   i++
      // ) {
      //   if (
      //     state.cvData.personalInformation.personalDetail[i].subtitle[0] ===
      //     payload.title
      //   ) {
      //     state.cvData.personalInformation.personalDetail[i].content =
      //       payload.value;
      //     count++;
      //   }

      state.cvData.personalInformation.personalDetail[payload.title] = {
        content: payload.value,
        subtitle: [payload.title, ""],
      };
      console.log(state.cvData.personalInformation.personalDetail);
    },
  },
  actions: {
    addCard: ({ commit }, payload) => {
      commit("addCard", payload);
    },
    setPersonalInformationProperties: ({ commit }, payload) => {
      commit("setPersonalInformationProperties", payload);
    },
    setPersonalDetails: ({ commit }, payload) => {
      commit("setPersonalDetails", payload);
    },
  },
  modules: {},
});
