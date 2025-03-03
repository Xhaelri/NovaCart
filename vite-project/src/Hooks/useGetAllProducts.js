import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../Services/products";

const useGetAllProducts = () => {
  const { data:products, isError, isLoading } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: getAllProducts,
  });
  return { products, isError, isLoading };
};

export default useGetAllProducts;
