import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BackToTop:React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`${
        showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      } z-50 fixed bottom-4 right-4 bg-black/50 backdrop-blur-md text-white p-3 border border-white/50 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-ivory`}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <HiOutlineArrowNarrowRight className="size-4 -rotate-90 animate-arrow-up" />
    </button>
  );
};

export default BackToTop;
