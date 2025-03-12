import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../Services/products";
import { toast } from "react-toastify";

const useAddProduct = (onSuccessCallback) => {

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("Product added successfully");
      queryClient.refetchQueries(["PRODUCTS"]);
      if (onSuccessCallback) onSuccessCallback(); 
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isLoading: isCreating };
};

export default useAddProduct;
