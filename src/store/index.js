import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isChanging: false,
    isZoomed: false,
    cv: {
      previewSrc: "",
      style: {
        fontFamily: { key: "Poppins", value: "Poppins" },
        fontSize: { key: "M", value: "1rem" },
        color: { key: "", value: "#000000" },
        lineHeight: { key: "1", value: "1" },
      },
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
        personalDetail: {
          Website: {
            content: "",
            subtitle: ["", ""],
          },
          Linkedin: {
            content: "",
            subtitle: ["", ""],
          },
          Github: {
            content: "",
            subtitle: ["", ""],
          },
        },
      },
      education: {
        title: "",
        cards: [],
      },
      employment: {
        title: "",
        cards: [],
      },
      skills: {},
      languages: {},
      reference: {
        title: "",
        cards: [],
      },
    },
    cvData: {
      previewSrc: "",
      style: {
        fontFamily: { key: "Poppins", value: "Poppins" },
        fontSize: { key: "M", value: "1rem" },
        color: { key: "", value: "#000000" },
        lineHeight: { key: "1", value: "1" },
      },
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
        personalDetail: {
          Website: {
            content: "",
            subtitle: ["", ""],
          },
          Linkedin: {
            content: "",
            subtitle: ["", ""],
          },
          Github: {
            content: "",
            subtitle: ["", ""],
          },
        },
      },
      education: {
        title: "",
        cards: [],
      },
      employment: {
        title: "",
        cards: [],
      },
      skills: {},
      languages: {},
      reference: {
        title: "",
        cards: [],
      },
    },
  },
  getters: {
    getIsZoomed(state) {
      return state.isZoomed;
    },
    getUser(state) {
      return state.user;
    },
    getCv(state) {
      return state.cv;
    },
    getCvData(state) {
      return state.cvData;
    },
    getCvId(state) {
      return state.cvData.id;
    },
    getPreviewSrc(state) {
      return state.cvData.previewSrc;
    },
    getCvStyle(state) {
      return state.cvData.style;
    },
    getCvStyleProperty: (state) => (property) => {
      return state.cvData.style[property];
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
    setIsZoomed: (state, payload) => {
      state.isZoomed = payload;
    },
    updateCvData: (state, payload) => {
      state.cvData = payload;
    },
    setPreviewSrc: (state, payload) => {
      state.cvData.previewSrc = payload;
    },
    addCard: (state, payload) => {
      state.cvData[payload.section]["cards"][payload.card.id] = payload.card;
    },
    setStyleProperties: (state, payload) => {
      state.cvData.style[payload.type] = payload.value;
      console.log(state.cvData.style);
    },
    setPersonalInformationProperties: (state, payload) => {
      state.cvData.personalInformation[payload.property] =
        payload.value.toLowerCase();
    },
    setPersonalDetails: (state, payload) => {
      state.cvData.personalInformation.personalDetail[payload.title] = {
        content: payload.value,
        subtitle: [payload.title, ""],
      };
    },
  },
  actions: {
    setIsZoomed: ({ commit }, payload) => {
      commit("setIsZoomed", payload);
    },
    updateCvData: ({ commit }, payload) => {
      commit("updateCvData", payload);
    },
    setPreviewSrc: ({ commit }, payload) => {
      commit("setPreviewSrc", payload);
    },
    addCard: ({ commit }, payload) => {
      commit("addCard", payload);
    },
    setStyleProperties: ({ commit }, payload) => {
      commit("setPersonalDetails", payload);
    },
    setPersonalInformationProperties: ({ commit }, payload) => {
      commit("setStyleProperties", payload);
    },
    setPersonalDetails: ({ commit }, payload) => {
      commit("setPersonalDetails", payload);
    },
  },
  modules: {},
});
