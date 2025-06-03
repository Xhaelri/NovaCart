import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import { addToFav, removeFromFav } from "../redux/slices/favSlice";
import { getUser } from "../Services/UserAuthFirebase";
import useProductById from "../Hooks/useProductById";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getProductAverageRating } from "../Services/Rating";
import ProductRating from "../components/StarRating/ProductRating";

const ProductDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(getUser());
  const { product, isLoading, isError } = useProductById(id);
  const dispatch = useDispatch();
  
  const fav = useSelector((state) => state.fav);
  const cart = useSelector((state) => state.cart);

  // State for product details
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [ratings, setRatings] = useState({ average: 4.5, count: 150 });
  const [activeImage, setActiveImage] = useState(0);

  // Check if product is in favorites
  const isProductInFav = fav.products.some((item) => item?.id === id);

  // Check if product is in cart
  const productInCart = cart.products.find((item) => item?.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  // Re-check user and get ratings on component mount
  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);

    // Fetch product ratings
    const fetchRatings = async () => {
      try {
        if (id) {
          const productRatings = await getProductAverageRating(id);
          if (productRatings && productRatings.count > 0) {
            setRatings(productRatings);
          }
        }
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchRatings();
  }, [id]);

  // Set default color when product loads
  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);



  const handleAddToCart = () => {
    if (product) {

      dispatch(addToCart(product));
    }
  };

  const handleToggleFavorite = () => {
    if (product) {
      if (isProductInFav) {
        dispatch(removeFromFav(product));
      } else {
        dispatch(addToFav(product));
      }
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };

  // Generate thumbnail images for the product
  const getThumbnailImages = () => {
    // In a real app, you might have multiple images per product
    // For now, we'll just use the same image 4 times
    return Array(4).fill(product?.image || "");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-200 rounded-lg h-96 w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="mt-2">
            The product you're looking for does not exist or could not be
            loaded.
          </p>
        </div>
      </div>
    );
  }

  const thumbnails = getThumbnailImages();

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Gallery - Now with thumbnails on left and main image on right */}
        <div className="w-full md:w-1/2 flex flex-row ">
          {/* Thumbnail Column on Left */}
          <div className="flex flex-col gap-4 w-1/4 mr-4">
            {thumbnails.map((img, index) => (
              <div
                key={index}
                className={`bg-[#F5F5F5] rounded-lg p-2 flex items-center justify-center h-[100px] cursor-pointer ${
                  activeImage === index ? "border-2 border-gray-400" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={img}
                  alt={`${product.title} view ${index + 1}`}
                  className="max-h-[80px] max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image on Right */}
          <div className="bg-[#F5F5F5] rounded-lg p-6 flex items-center justify-center w-3/4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[350px] max-w-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">
            {product.title || "Havic HV G-92 Gamepad"}
          </h1>

          {/* Product Rating */}
          <div className="flex items-start justify-start  gap-2 mb-4 relative">
            <div className="flex items-center ">
              <ProductRating productId={id}  inDetails={true}/>
            </div>
            <div className="pt-3 absolute left-20">
              <span className="text-gray-600 pe-2">({ratings.count} Reviews)</span>
              <span className="text-gray-600">|</span>
              <span className="text-green-500 ps-2">In Stock</span>
            </div>
          </div>

          {/* Product Price */}
          <div className="mb-6">
            <span className="text-xl font-medium">
              ${product.price || "192.00"}
            </span>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <p className="text-gray-600">
              {product.description ||
                "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive."}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Colours:</h3>
            <div className="flex gap-3">
              {product.colors ? (
                product.colors.map((color, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      className="hidden"
                    />
                    <span
                      className={`w-5 h-5 rounded-full ms-1 border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? "border-2 border-gray-400"
                          : "border-transparent"
                      }`}
                      style={{
                        backgroundColor: color,
                        outline:
                          selectedColor === color
                            ? `1px solid ${color}`
                            : "none",
                      }}
                    ></span>
                  </label>
                ))
              ) : (
                // Fallback colors if product doesn't have colors defined
                <>
                  <div
                    className={`w-5 h-5 ms-1 rounded-full border cursor-pointer ${
                      selectedColor === "white" ? "ring-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: "white" }}
                    onClick={() => setSelectedColor("white")}
                  ></div>
                  <div
                    className={`w-5 h-5 ms-1 rounded-full border cursor-pointer ${
                      selectedColor === "red" ? "ring-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: "red" }}
                    onClick={() => setSelectedColor("red")}
                  ></div>
                </>
              )}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size:</h3>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center border rounded ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 mb-6">
            <div className="flex border rounded">
              <button
                className="px-4 py-2 border-r"
                onClick={handleDecreaseQuantity}
              >
                —
              </button>
              <div className="px-4 py-2 flex items-center justify-center min-w-[40px]">
                {quantity}
              </div>
              <button
                className="px-4 py-2 border-l"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded"
            >
              Buy Now
            </button>
            <button
              className="border rounded p-2 flex items-center justify-center w-10 h-10"
              onClick={handleToggleFavorite}
            >
              {isProductInFav ? (
                <AiFillHeart className="text-red-500 text-xl" />
              ) : (
                <AiOutlineHeart className="text-gray-500 text-xl" />
              )}
            </button>
          </div>

          {/* Delivery Information */}
          <div className="border rounded mb-4">
            <div className="flex items-center p-4 border-b">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-600">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm text-gray-600">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="text-blue-600">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
