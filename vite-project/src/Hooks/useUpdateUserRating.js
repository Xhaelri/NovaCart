import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../Services/UserAuthFirebase";
import { rateProduct } from "../Services/Rating";

const useUpdateUserRating = (productId) => {
  const queryClient = useQueryClient();
  const user = getUser();


  const rateMutation = useMutation({
    // This should be a function that gets called when mutate is invoked
    mutationFn: (newRating) => rateProduct(
      user?.uid,
      productId,
      newRating,
      user?.displayName || user?.email
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productRating", productId] });
      queryClient.invalidateQueries({
        queryKey: ["userRating", productId, user?.uid],
      });
    },
    onError: (error) => {
      console.error("Rating submission failed:", error);
    },
  });

  return { rateMutation };
};

export default useUpdateUserRating;