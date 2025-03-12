import { useQueryClient , useMutation } from "@tanstack/react-query";
import { updateProduct } from "../Services/products";
import { toast } from "react-toastify";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const { mutate: update } = useMutation({
    mutationFn: ({ id, product }) => updateProduct(id, product),
        onSuccess: () => {
          toast.success("Product Edited successfully");
          queryClient.refetchQueries(["PRODUCTS"]);
        },
        onError: (error) => {
          toast.error(error.message);
        },
  });

  return { update };
};

export default useUpdateProduct;