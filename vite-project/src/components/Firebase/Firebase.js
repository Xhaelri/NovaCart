import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZmnX_yKGW42sJJZhDj4dgfG_F0D9fOEU",
  authDomain: "exclusive-4beba.firebaseapp.com",
  projectId: "exclusive-4beba",
  storageBucket: "exclusive-4beba.firebasestorage.app",
  messagingSenderId: "457548636641",
  appId: "1:457548636641:web:58632706703c65313eb2a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    // Create user with email and password
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user data to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    // Return user data
    return { uid: user.uid, name, email };
  } catch (error) {
    console.error("Signup error:", error);
    throw error; // Throw the error for the calling code to handle
  }
};

// Login function
const login = async (email, password) => {
  try {
    // Sign in with email and password
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Return user data
    return { uid: user.uid, email: user.email };
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Throw the error for the calling code to handle
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    throw error; // Throw the error for the calling code to handle
  }
};

// Export Firebase functions and instances
export { signup, login, logout, auth, db };