import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Set firestore DB
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Google Authentication FirebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAbzWVV_mImgEpqAFSS4VI2Dg9Omz5PA0o",
  authDomain: "crwn-clothing-db-c11e8.firebaseapp.com",
  projectId: "crwn-clothing-db-c11e8",
  storageBucket: "crwn-clothing-db-c11e8.appspot.com",
  messagingSenderId: "604715522742",
  appId: "1:604715522742:web:13a0a14c46652913866417",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
