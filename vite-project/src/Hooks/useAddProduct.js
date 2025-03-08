/* import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../Services/products";
import { toast } from "react-toastify";

const useAddProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("Product added successfully");
      queryClient.invalidateQueries(["PRODUCTS"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isLoading };
};

export default useAddProduct;
 */