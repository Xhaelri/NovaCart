import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../Services/products";

function useProductById(id) {
  console.log("Product ID in hook:", id);
  
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCTS", id],
    queryFn: () => getProductById(id),
  });
  
  return { product, isLoading, isError };
}

export default useProductById;