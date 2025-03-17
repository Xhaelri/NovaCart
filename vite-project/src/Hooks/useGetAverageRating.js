import { useQuery } from "@tanstack/react-query";
import { getProductAverageRating } from "../Services/Rating";



const useGetAverageRating = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["productRating", id],
        queryFn: () => getProductAverageRating(id),
        enabled: !!id,
        retry: 1,
        onError: (error) => {
            console.error("Error fetching average rating:", error);
        }
    }); 

    return { data, isLoading, isError }
};

export default useGetAverageRating