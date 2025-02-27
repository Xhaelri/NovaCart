import axiosInstance from "../utils/axiosinstance";

const handleProductId = async (id) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log("api error", error);
    throw error;
  }
};

const handleAllProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

export { handleProductId, handleAllProducts };
