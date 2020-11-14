import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQqKPGZKQEDBEf05o-lwVyp1AlrBxd3KQ",
  authDomain: "crwn-db-ff76e.firebaseapp.com",
  databaseURL: "https://crwn-db-ff76e.firebaseio.com",
  projectId: "crwn-db-ff76e",
  storageBucket: "crwn-db-ff76e.appspot.com",
  messagingSenderId: "79915369050",
  appId: "1:79915369050:web:5bcf529802086412998e63",
  measurementId: "G-JB8VTC58BD",
};

export const createUserProfileDocument = async (userAuth, additionaldata) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
