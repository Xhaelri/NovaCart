/* import axiosInstance from "../utils/axiosinstance";
 */
import { db } from "../Services/UserAuthFirebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
const getProductById = async (id) => {
  try {


    const productDoc = doc(db, "products", id);
    const snapshot = await getDoc(productDoc);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data(), createAt: snapshot.data()?snapshot.data().createAt.toDate().toISOString():null }; // Return with correct ID
    } else {
      console.error("Product not found with ID:", id);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, orderBy("createAt", "desc"));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data(), createAt: doc.data()?doc.data().createAt.toDate().toISOString():null };
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const addProduct = async (product) => {
  try {
    const productsCollection = collection(db, "products");
    const docRef = await addDoc(productsCollection,{ ...product, createAt: serverTimestamp(),price: Number(product.price)},);
    return { id: docRef.id, ...product };
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {

    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, { ...product, createAt: serverTimestamp()});
    return { id, ...product };
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    return id;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
