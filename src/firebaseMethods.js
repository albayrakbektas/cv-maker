import { auth, database } from "./main";
import { ref, set, get, onValue } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import store from "@/store";

export const register = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      store.state.user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const getUser = async () => {
  let userId = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return (userId = user.uid);
    }
  });
  return userId;
};

export const writeUserData = async (userId, cvId, cv) => {
  await set(ref(database, userId + "/" + cvId), cv).catch((error) => {
    console.log(error);
  });
};

export const writeSectionCard = (userId, cvId, section, card) => {
  set(
    ref(database, userId + "/" + cvId + "/" + section + "/cards/" + card.id),
    card
  ).catch((error) => {
    console.log(error);
  });
};

export const writePersonalInformation = (userId, cvId, section, card) => {
  set(ref(database, userId + "/" + cvId + "/" + section), card).catch(
    (error) => {
      console.log(error);
    }
  );
};

export const deleteSectionCard = (userId, cvId, section, cardId) => {
  set(
    ref(database, userId + "/" + cvId + "/" + section + "/cards/" + cardId),
    null
  ).catch((error) => {
    console.log(error);
  });
};
export const deleteCv = (userId, cvId) => {
  set(ref(database, userId + "/" + cvId), null).catch((error) => {
    console.log(error);
  });
};

export const signout = async () => {
  await signOut(auth).catch((error) => {
    console.log(error);
  });
};

export const getCvList = async (userId) => {
  const cvREf = ref(database, userId);
  let snapshot = get(cvREf);
  return (await snapshot).val();
};

export const getCv = async (userId, cvId) => {
  return new Promise((resolve) => {
    const cvRef = ref(database, userId + "/" + cvId);
    onValue(cvRef, async (snapshot) => {
      store.commit("updateCvData", await snapshot.val());
      resolve(await snapshot.val());
    });
  });
};
