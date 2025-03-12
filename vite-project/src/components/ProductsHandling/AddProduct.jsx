import { useForm } from "react-hook-form";
import useAddProduct from "../../Hooks/useAddProduct";
import useUpdateProduct from "../../Hooks/useUpdateProduct";

const AddProduct = ({ productToEdit = {}, isEditing = false }) => {
  const { ...editValues } = productToEdit;
  // To ensure we are editing not adding by checking the editId
  /*   const isEditing = Boolean(editId);
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditing ? editValues : {},
  });

  const {update}=useUpdateProduct();
  //reset the form as a callbackfuntion
  const { mutate:addProduct, isLoading: isCreating } = useAddProduct(() => reset());

  const onSubmit = (data) => {
    if (isEditing) {

      update({ id: productToEdit.id, product: data });
    } else {
      addProduct(data);
    }
  };

  return (
    <>
      {isEditing ? (
        <div className="border border-gray-200 flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg">
  <div className="flex flex-col items-center justify-center w-full">
    <h1 className="text-2xl tracking-wide text-black md:text-3xl font-semibold text-center mb-6">
      Edit Product
    </h1>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-5"
    >
      {/* Title */}
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Product Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter product title"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Product Description
        </label>
        <textarea
          id="description"
          placeholder="Enter product description"
          rows="3"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all resize-none"
          {...register("description", { required: "Description is required" })}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          placeholder="Enter product price"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      {/* Discount */}
      <div className="flex flex-col">
        <label
          htmlFor="discount"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          max={100}
          placeholder="Enter product discount"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("discount")}
        />
        {errors.discount && (
          <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>
        )}
      </div>

      {/* Image URL */}
      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          placeholder="Enter product image URL"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("image", {
            pattern: {
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: "Please enter a valid URL",
            },
          })}
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full text-white text-sm bg-[#DB4444] hover:bg-[#b83232] transition-all duration-200 rounded-lg px-4 py-3 text-center"
        >
          Update Product
        </button>
      </div>
    </form>
  </div>
</div>

      ) : (



<div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
    <h1 className="text-2xl tracking-wide text-black md:text-3xl font-semibold text-center mb-2">
      Add New Product
    </h1>
    <p className="text-md font-medium text-gray-600 text-center mb-6">
      Enter Details Below
    </p>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Title */}
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1 "
        >
          Product Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter product title"
          className="bg-gray-100 text-black border  border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Product Description
        </label>
        <textarea
          id="description"
          placeholder="Enter product description"
          rows="3"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all resize-none"
          {...register("description", { required: "Description is required" })}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          placeholder="Enter product price"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

            {/* Discount */}
            <div className="flex flex-col">
        <label
          htmlFor="discount"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          max={100}
          placeholder="Enter product discount"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("discount")}
        />
        {errors.discount && (
          <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>
        )}
      </div>

      {/* Image URL */}
      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Image URL
        </label>
        <input
          type="text"
          id="image"
          placeholder="Enter product image URL"
          className="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
          {...register("image", {
            pattern: {
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: "Please enter a valid URL",
            },
          })}
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full text-white text-sm bg-[#DB4444] hover:bg-[#b83232] transition-all duration-200 rounded-lg px-4 py-3 text-center"
        >
          {isCreating ? "Adding New Product..." : "Add New Product"}
        </button>
      </div>
    </form>
  </div>
</div>

      )}
    </>
  );
};

export default AddProduct;
