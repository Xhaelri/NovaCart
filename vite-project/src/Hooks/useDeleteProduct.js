import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../Services/products";
import { toast } from "react-toastify";

const useDeleteProduct = () => {

  const queryClient = useQueryClient();

   const {mutate}= useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.refetchQueries(["PRODUCTS"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate };
};

export default useDeleteProduct;