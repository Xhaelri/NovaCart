import ProductCard from "../components/ProductCard/ProductCard";

import useGetAllProducts from "../Hooks/useGetAllProducts";

const ProductsPage = () => {
  const { products, isLoading, error } = useGetAllProducts();

  return (
    <div className="mx-4 sm:mx-[10%] mt-10 mb-15">
      <div>
        {isLoading && (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-screen">
            Error fetching products. Please try again later.
          </div>
        )}
        <div className="flex flex-col mt-5 mb-[60px]">
          <div className="flex space-x-2.5 items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
            <span className="text-red-700 text-sm">All Time</span>
          </div>
          <div className="flex space-x-2.5 justify-between items-center mt-5">
            <h1 className="text-3xl font-semibold text-black">All Products</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}  initialRating={3}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
