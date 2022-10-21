// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);

// export default = { auth, database, analytics };
