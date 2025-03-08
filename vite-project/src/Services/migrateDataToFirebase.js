import { db } from "./UserAuthFirebase.js";
import { collection, addDoc } from "firebase/firestore";
import axiosInstance from "../utils/axiosinstance.js";

// Fetch data from your API
const fetchProductsFromAPI = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products from API:", error);
    throw error;
  }
};

// Upload data to Firebase Firestore
const uploadProductsToFirebase = async (products) => {
  try {
    const productsCollection = collection(db, "products");
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log("Product uploaded:", product);
    }
    console.log("All products uploaded to Firebase!");
  } catch (error) {
    console.error("Error uploading products to Firebase:", error);
    throw error;
  }
};

// Main function to migrate data
const migrateDataToFirebase = async () => {
  try {
    const products = await fetchProductsFromAPI();
    await uploadProductsToFirebase(products);
  } catch (error) {
    console.error("Migration failed:", error);
  }
};

// Run the migration
migrateDataToFirebase();