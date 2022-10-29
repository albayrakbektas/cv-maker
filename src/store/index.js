import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isChanging: false,
    cvData: {},
    personalInformation: {
      profilePicture: "",
      givenName: "",
      familyName: "Albayrak",
      email: "albayrakbektas44@gmail.com",
      headline: "Jr. Frontend Developer",
      phone: "+905050070844",
      address: "Bornova",
      postCode: "35080",
      city: "Izmir",
      personalDetail: [
        {
          subtitle: ["Website"],
          content: "https://www.bektasalbayrak.com/",
        },
        {
          subtitle: ["LinkedIn"],
          content:
            "https://www.linkedin.com/in/bekta%C5%9F-albayrak-ab6aa71b2/",
        },
        {
          subtitle: ["Github"],
          content: "https://github.com/albayrakbektas",
        },
      ],
    },
    education: {
      title: "Education",
      cards: [
        {
          title: "Mathematics",
          dateStart: "2017",
          dateEnd: "Present",
          rowCard: {
            subtitle: ["Dokuz Eylul University", "Izmir"],
            content: "",
          },
        },
        {
          title: "Web Design and Codding",
          dateStart: "2020",
          dateEnd: "Present",
          rowCard: {
            subtitle: ["Anadolu University", "Eskisehir"],
            content: "",
          },
        },
        {
          title: "Machine Engineering",
          dateStart: "2015",
          dateEnd: "2017",
          rowCard: {
            subtitle: ["Mersin University", "Mersin"],
            content: "",
          },
        },
        {
          title: "High School",
          dateStart: "2011",
          dateEnd: "2015",
          rowCard: {
            subtitle: ["Icel Anadolu Liseli", "Mersin"],
            content: "",
          },
        },
      ],
    },
    employment: {
      title: "Experiences",
      cards: [
        {
          title: "Frontend Developer",
          dateStart: "January 2017",
          dateEnd: "March 2017",
          rowCard: {
            subtitle: ["DiaTic", "Mersin"],
            content: "Vue.js, Node.js, AWS",
          },
        },
        {
          title: "Unit Test Developer",
          dateStart: "March 2022",
          dateEnd: "June 2022",
          rowCard: {
            subtitle: ["base64.ai", "New York"],
            content: "Jest, Puppeteer",
          },
        },
        {
          title: "Frontend Developer",
          dateStart: "September 2022",
          dateEnd: "October 2022",
          rowCard: {
            subtitle: ["Signess", "Izmir"],
            content: "Vue.js, Node.js, Express.js, Firebase",
          },
        },
        {
          title: "Frontend Developer",
          dateStart: "October 2022",
          dateEnd: "Present",
          rowCard: {
            subtitle: ["ArtAiPhoto", "Izmir"],
            content: "Vue.js, Node.js, Express.js, Firebase",
          },
        },
      ],
    },
    reference: {
      title: "References",
      cards: {
        card: {
          title: "Alperen Sahin",
          dateStart: "",
          dateEnd: "",
          rowCard: {
            subtitle: ["base64.ai", "New York"],
            content: "alperen@base64.ai",
          },
        },
      },
    },
    skills: [
      {
        subtitle: ["HTML"],
        content: "5",
      },
      {
        subtitle: ["CSS"],
        content: "3",
      },
      {
        subtitle: ["JavaScript"],
        content: "2",
      },
      {
        subtitle: ["Vue.js"],
        content: "1",
      },
    ],
    languages: [
      {
        subtitle: ["Turkish"],
        content: "2",
      },
      {
        subtitle: ["English"],
        content: "3",
      },
    ],
  },
  getters: {
    getCards(state) {
      return state.education.cards;
    },
  },
  mutations: {
    setBodyCard(state, payload) {
      state.education.cards[0] = payload;
    },
  },
  actions: {
    changeBodyCards({ commit }, payload) {
      commit("setBodyCard", payload);
    },
  },
  modules: {},
});
