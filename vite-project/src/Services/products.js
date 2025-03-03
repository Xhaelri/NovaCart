import axiosInstance from "../utils/axiosinstance";

const getProductById = async (id) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log("api error", error);
    throw error;
  }
};

const getAllProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

export { getProductById, getAllProducts };
