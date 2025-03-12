import useGetAllProducts from "../../Hooks/useGetAllProducts";


import ProductRow from "./ProductRow";

const DeleteProduct = () => {
  const { products } = useGetAllProducts();

  return (
    <div className="mx-4 sm:mx-[10%] pt-4 min-h-screen">
          <table className="w-full">
            <thead className="shadow-sm shadow-gray-200 rounded-lg w-full h-14 font-medium">
              <tr>
                <th className="text-start ps-7 text-black font-medium">
                  Product
                </th>
                <th className=" text-black font-medium">Price</th>
                <th className=" text-black font-medium">Delete</th>
                <th className=" text-black font-medium">Update</th>
                <th className=" text-black font-medium">Duplicate</th>
              </tr>
            </thead>
            {products?.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </table>
    </div>
  );
};

export default DeleteProduct;
