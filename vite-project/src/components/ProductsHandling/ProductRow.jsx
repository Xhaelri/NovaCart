import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import useDeleteProduct from "../../Hooks/useDeleteProduct";
import AddProduct from "./AddProduct";
import { GoDuplicate } from "react-icons/go";
import useAddProduct from "../../Hooks/useAddProduct";


const ProductRow = ({ product }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const { mutate } = useDeleteProduct();
  const {mutate: addProduct,isLoading:isCreating} = useAddProduct();

  

  const handleDelete = (id) => {
    mutate(id);
  };

  const handleDupliacte = () => {
    addProduct({
        title: `Copy of ${product.title}`,
        description: product.description,
        price: product.price,
        image: product.image
    });
  };

  return (
    <>
      <tbody key={product.id}>
        <tr className="h-7"></tr>
        <tr className="shadow-sm shadow-gray-200 rounded-lg h-24">
          <td className="text-start ps-7">
            <span className="flex items-center text-black gap-5">
              <img className="w-[54px]" src={product.image} />
              {product.title}
            </span>
          </td>
          <td className="text-center text-black">${product.price}</td>

          {/* Centering Delete Icon */}
          <td className="text-black text-2xl">
            <div className="flex items-center justify-center">
              <MdDeleteOutline 
                onClick={() => handleDelete(product.id)} 
                className="cursor-pointer hover:text-red-500 transition-colors duration-200" 
              />
            </div>
          </td>

          {/* Centering Update Icon */}
          <td className="text-black text-2xl">
            <div className="flex items-center justify-center">
              <RxUpdate 
                onClick={() => setShowUpdate(!showUpdate)} 
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200" 
              />
            </div>
          </td>

          <td className="text-black text-2xl">
            <div className="flex items-center justify-center">
              <GoDuplicate 
 
                onClick={() => handleDupliacte()} 
                className="cursor-pointer hover:text-green-500 transition-colors duration-200" 
              />
            </div>
          </td>
        </tr>
        <tr className="h-2"></tr>

        {/* Animated Transition for Edit Form */}
        <AnimatePresence>
          {showUpdate && (
            <motion.tr
              initial={{ opacity: 0, y: -10 }} // Starts hidden and slightly above
              animate={{ opacity: 1, y: 0 }} // Fades in and moves down
              exit={{ opacity: 0, y: -10 }} // Fades out when removed
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <td colSpan="4">
                <AddProduct productToEdit={product} isEditing={true} />
              </td>
            </motion.tr>
          )}
        </AnimatePresence>
      </tbody>
    </>
  );
};

export default ProductRow;
