/* import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosinstance";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products");
      return res.data;
    },
  });

  return (
    <ProductsContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductsContext.Provider>
  );
};
//creates custom hook to use the context
export const useProducts = () => useContext(ProductsContext);
 */