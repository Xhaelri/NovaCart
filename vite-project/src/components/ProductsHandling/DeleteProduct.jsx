import useGetAllProducts from "../../Hooks/useGetAllProducts";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../Services/products";
import { toast } from "react-toastify";
import useDeleteProduct from "../../Hooks/useDeleteProduct";

const DeleteProduct = () => {
  const { products } = useGetAllProducts();

  const { mutate } = useDeleteProduct();

  const handleDelete = (id) => {
    mutate(id);
  };

  return (
    <div className="mx-4 sm:mx-[10%] grid grid-rows-1 pt-4 min-h-screen">
      <div className="flex flex-col justify-start items-start ">
        <div className="mb-7  w-full  ">
          <table className="w-full">
            <thead className="shadow-sm shadow-gray-200 rounded-lg w-full h-14 font-medium">
              <tr>
                <th className="text-start ps-7 text-black font-medium">
                  Product
                </th>
                <th className="text-center text-black font-medium">Price</th>
                <th className=" text-black font-medium">Delete</th>
                <th className=" text-black font-medium">Update</th>
              </tr>
            </thead>
            {products?.map((product) => (
              <tbody key={product.id}>
                <tr className="h-7"></tr>
                <tr className="shadow-sm shadow-gray-200 rounded-lg h-24">
                  <td className="text-start ps-7">
                    <div className="flex items-center text-black gap-5">
                      <img className="w-[54px]" src={product.image} />
                      {product.title}
                    </div>
                  </td>
                  <td className="text-center text-black">${product.price}</td>
                  <td className="ps-15 text-2xl cursor-pointer text-black">
                    <MdDeleteOutline onClick={() => handleDelete(product.id)}/>
                  </td>
                  <td className="ps-15 text-2xl cursor-pointer text-black">
                    <RxUpdate />
                  </td>
                </tr>
                <tr className="h-2"></tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
