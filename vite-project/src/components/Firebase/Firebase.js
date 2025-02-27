import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZmnX_yKGW42sJJZhDj4dgfG_F0D9fOEU",
  authDomain: "exclusive-4beba.firebaseapp.com",
  projectId: "exclusive-4beba",
  storageBucket: "exclusive-4beba.firebasestorage.app",
  messagingSenderId: "457548636641",
  appId: "1:457548636641:web:58632706703c65313eb2a0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { signup, login, logout, auth, db };
