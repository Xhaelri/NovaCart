import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const controller = new AbortController();
  useEffect(() => {
    const handleScroll = () => {
      // Show the button when user scrolls 300px down
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

  window.addEventListener("scroll", handleScroll, { signal: controller.signal });
    return () => controller.abort();
  });

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 bg-[#e4e4e4] p-2 rounded-full hover:bg-gray-300 cursor-pointer shadow-lg transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FiArrowUp size={22} color="black" />
    </button>
  );
};

export default ScrollToTopButton;
