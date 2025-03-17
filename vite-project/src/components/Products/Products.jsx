import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

import useGetAllProducts from "../../Hooks/useGetAllProducts";
const Products = () => {
  const { products } = useGetAllProducts();

  return (
    <div className="my-17">
      <div className="flex flex-col mt-5 mb-[60px]">
        <div className="flex space-x-2.5 items-center">
          <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
          <span className="text-red-700 text-sm">This Month</span>
        </div>
        <div className="flex space-x-2.5 justify-between items-center">
        <h1 className="text-3xl font-semibold text-black mt-5 font-inter">
        Best Selling Products
          </h1>
          <Link
            to="/products"
            className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-sm"
            onClick={() => scrollTo(0, 0)}
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-13">
        {products?.filter((product) => product.price > 500).sort((a, b) => b.price- a.price ).slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default Products;
