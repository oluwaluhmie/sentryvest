import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="fixed bottom-4 right-5 h-10 w-10 rounded-full border-2 bg-white cursor-pointer text-gray-800 border-gray-800 hover:animate-none hover:bg-gray-800 hover:text-white hover:border-white"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;