import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../Services/products";

function useProductById(id) {
  
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCTS", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    retry: 2
  });
  
  return { product, isLoading, isError };
}

export default useProductById;