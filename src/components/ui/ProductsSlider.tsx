import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import product3 from "../../assets/products/3.jpg";

import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 2,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 3,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 4,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 5,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 6,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 7,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 8,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 9,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 10,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 11,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
  {
    id: 12,
    category: "Watch",
    name: "Makura Tracksuit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product3,
  },
];

const ProductsSlider: React.FC = () => {
  const itemsPerView = 4; // Show 4 items per slide
  const totalItems = products.length; // Total number of products

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: itemsPerView, // Keep showing 4 items at once
      spacing: 12, // Add space between slides
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    loop: true,
    created(slider) {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 5000);
      }

      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });

      nextTimeout();
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  });

  // Calculate the start and end item numbers dynamically
  const currentItemStart = Math.min(currentSlide + 1, totalItems);
  const currentItemEnd = Math.min(currentSlide + itemsPerView, totalItems);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider mt-4">
        {products.map((product) => (
          <a
            key={product.id}
            href="#"
            className="keen-slider__slide group space-y-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-contain bg-[#ede9e6] shadow-md group-hover:shadow-lg transition-all duration-300 border border-dark/10"
            />
            <h4 className="text-lg text-dark/80 group-hover:text-dark flex items-center gap-2 font-semibold">
              <span className="h-[1px] w-4 group-hover:w-12 bg-dark/80 transition-all duration-300"></span>
              {product.name}
            </h4>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4 my-4">
        <span className="text-dark text-sm space-x-2">
          Products
          <strong className="mx-1">
            {currentItemStart} - {currentItemEnd}
          </strong>
          out of
          <strong>{totalItems}</strong>
        </span>
        <div className="space-x-2">
          <button
            className="hover-outline text-xl rounded-full py-0 px-2 bg-gradient group-hover:bg-black/30 backdrop-blur-sm border text-dark outline-dark/50 cursor-pointer"
            onClick={() => instanceRef.current?.prev()}
          >
            <TbArrowNarrowLeft />
          </button>
          <button
            className="hover-outline text-xl rounded-full py-0 px-2 bg-gradient group-hover:bg-black/30 backdrop-blur-sm border text-dark outline-dark/50 cursor-pointer"
            onClick={() => instanceRef.current?.next()}
          >
            <TbArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
