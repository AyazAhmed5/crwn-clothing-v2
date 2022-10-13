import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDyOUtZnLTuNt3Dmv2LtZMbSGDSgP3X8Ag",
  authDomain: "crwn-clothing-db-26a43.firebaseapp.com",
  projectId: "crwn-clothing-db-26a43",
  storageBucket: "crwn-clothing-db-26a43.appspot.com",
  messagingSenderId: "675849384980",
  appId: "1:675849384980:web:4773efa29ba31cd4e2e301",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Authientication Tooling
const provider = new GoogleAuthProvider();

//Google specific funcitonality for Forcing user to select Account
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//FireStore Database Tooling
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done");
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

//creating user Document from the auth Object
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  //UserDocument
  const userDocRef = doc(db, "users", userAuth.uid);

  //User Snapshot that access whether the user exist or not
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("There was an error", error.message);
    }
  }
  return userDocRef;
};

//Creating user with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

//Signout user whenever this is called:)
export const signOutUser = async () => await signOut(auth);

//Event Listner whenever our Auth Changes..
export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
