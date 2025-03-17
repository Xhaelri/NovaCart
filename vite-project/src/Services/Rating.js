import { db } from "../Services/UserAuthFirebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  doc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";

// Get all ratings for a specific product
const getProductRatings = async (productId) => {
  try {
    if (!productId) {
      throw new Error("Product ID is required");
    }
    
    const ratingsCollection = collection(db, "ratings");
    const q = query(ratingsCollection, where("productId", "==", productId));
    const snapshot = await getDocs(q);
    
    const ratings = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    
    return ratings;
  } catch (error) {
    console.error("Error fetching product ratings:", error);
    throw error;
  }
};

// Get the average rating for a product
const getProductAverageRating = async (productId) => {
  try {
    if (!productId) {
      return { average: 0, count: 0 };
    }
    
    const ratings = await getProductRatings(productId);
    
    if (ratings.length === 0) {
      return { average: 0, count: 0 };
    }
    
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const average = sum / ratings.length;
    
    return {
      average: parseFloat(average.toFixed(1)),
      count: ratings.length
    };
  } catch (error) {
    console.error("Error calculating average rating:", error);
    throw error;
  }
};

// Get a user's rating for a specific product
const getUserRating = async (userId, productId) => {
  try {
    if (!userId || !productId) {
      return null;
    }
    
    const ratingsCollection = collection(db, "ratings");
    const q = query(
      ratingsCollection, 
      where("userId", "==", userId),
      where("productId", "==", productId)
    );
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }
    
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  } catch (error) {
    console.error("Error fetching user rating:", error);
    throw error;
  }
};

// Add or update a user's rating for a product
const rateProduct = async (userId, productId, rating, userName) => {
  try {
    if (!userId || !productId) {
      throw new Error("User ID and Product ID are required");
    }
    
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    
    // Check if the user has already rated this product
    const existingRating = await getUserRating(userId, productId);
    
    if (existingRating) {
      // Update existing rating
      const ratingDoc = doc(db, "ratings", existingRating.id);
      await updateDoc(ratingDoc, {
        rating,
        updatedAt: serverTimestamp()
      });
      return { id: existingRating.id, rating };
    } else {
      // Add new rating
      const ratingsCollection = collection(db, "ratings");
      const newRating = {
        userId,
        userName: userName || "Anonymous",
        productId,
        rating,
        createdAt: serverTimestamp(),
      };
      const docRef = await addDoc(ratingsCollection, newRating);
      return { id: docRef.id, ...newRating };
    }
  } catch (error) {
    console.error("Error rating product:", error);
    throw error;
  }
};

// Delete a user's rating
const deleteRating = async (ratingId) => {
  try {
    if (!ratingId) {
      throw new Error("Rating ID is required");
    }
    
    const ratingDoc = doc(db, "ratings", ratingId);
    await deleteDoc(ratingDoc);
    return ratingId;
  } catch (error) {
    console.error("Error deleting rating:", error);
    throw error;
  }
};

export {
  getProductRatings,
  getProductAverageRating,
  getUserRating,
  rateProduct,
  deleteRating,
};