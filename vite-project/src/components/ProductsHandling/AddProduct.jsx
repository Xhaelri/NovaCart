import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../Services/products";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("Product added successfully");
      queryClient.invalidateQueries(["PRODUCTS"]);
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center py-[60px]">
      <div>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl leading-7 tracking-widest text-black md:text-3xl font-medium">
                  Add New Product
                </h1>
                <p className="text-md font-[400] text-black text-center">
                  Enter Details
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Title Field */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Title"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("title", {
                        required: "Title is required",
                      })}
                    />
                    {errors.title && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* Description Field */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="text"
                      id="description"
                      placeholder="Description"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("description", {
                        required: "Description is required",
                      })}
                    />
                    {errors.description && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Price Field */}
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="number"
                      id="price"
                      placeholder="Price"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("price", {
                        required: "Price is required",
                      })}
                    />
                    {errors.price && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  {/* Image URL Field */}
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="text"
                      id="image"
                      placeholder="Image URL"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("image", {
                        pattern: {
                          value:
                            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                          message: "Please enter a valid URL",
                        },
                      })}
                    />
                    {errors.image && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.image.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="w-full cursor-pointer text-white bg-[#DB4444] hover:opacity-90 rounded px-5 py-4 text-center"
                    >
                      {isCreating ? "Adding Product..." : "Add Product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
