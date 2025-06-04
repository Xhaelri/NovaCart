import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore"; // Added doc and setDoc

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

// Function to get user data from Firestore, including their role
const getUserDataFromFirestore = async (uid) => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data from Firestore:", error);
    return null;
  }
};

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Use setDoc with user.uid as the document ID
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      role: "user", // Default role for new users
    });

    // Retrieve the full user data including the role to store in local storage
    const userData = await getUserDataFromFirestore(user.uid);
    localStorage.setItem("user", JSON.stringify(userData));

    return userData; // Return complete user object with role
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Retrieve the full user data including the role to store in local storage
    const userData = await getUserDataFromFirestore(user.uid);
    localStorage.setItem("user", JSON.stringify(userData));

    return userData; // Return complete user object with role
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Function to check if a user has a specific role
export const hasRole = (user, requiredRole) => {
  return user && user.role === requiredRole;
};

export { signup, login, logout, auth, db };
