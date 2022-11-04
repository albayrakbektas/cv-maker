import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDRGR6S07dPOkvfsWSO6Q2Epo6x64yeLqQ",
  authDomain: "beko-cv.firebaseapp.com",
  projectId: "beko-cv",
  storageBucket: "beko-cv.appspot.com",
  messagingSenderId: "238419411710",
  appId: "1:238419411710:web:5a877f1c04b1e03649dbaf",
  measurementId: "G-P7P4YHNCF2",
  databaseURL:
    "https://beko-cv-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
export const analytics = getAnalytics(firebase);

let app = "";

auth.onAuthStateChanged((user) => {
  store.state.user = user;
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
