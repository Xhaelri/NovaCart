import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../Services/products";

const useUpdateProduct = () => {
  return useMutation({
    mutationFn: ({ id, product }) => updateProduct(id, product),
  });
};

export default useUpdateProduct;