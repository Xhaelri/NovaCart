import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCTS", id],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        return res.data;
      } catch (error) {
        console.log("api error", error);
        throw error;
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details. Please try again later.</div>;
  }

  return (
    <div className="container mx-4 sm:mx-[10%] p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white border border-gray rounded hover:opacity-80"
      >
        Back
      </button>
      {data ? (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-[#F5F5F5] p-4 flex justify-center items-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h1 className="text-3xl text-black font-bold mb-4">{data.title}</h1>
            <p className="text-2xl font-semibold text-red-700 mb-4">
              ${data.price}
            </p>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <button className="px-6 py-2 bg-black text-white rounded hover:opacity-80">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div>No product data found.</div>
      )}
    </div>
  );
};

export default ProductDetails;
