import React from "react";
import { TbShoppingCart } from "react-icons/tb";

import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";

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
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 2,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
  {
    id: 3,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 4,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
  {
    id: 5,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 6,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
  {
    id: 7,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 8,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
  {
    id: 9,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 10,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
  {
    id: 11,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product1,
  },
  {
    id: 12,
    category: "Watch",
    name: "Makura Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt aperiam? Numquam animi illo accusantium cumque nulla non facilis veritatis!",
    price: "17999",
    originalPrice: "20000",
    image: product2,
  },
];

const LatestProducts: React.FC = () => {
  return (
    <main>
      <div className="flex gap-4 flex-col max-w-xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug lg:leading-snug uppercase">
          Latest Products
        </h3>
        <p className="text-sm text-dark/60">
          Discover our stunning collection of latest innovations and designs,
          all crafted to perfection just for you. Wear the spirit with Makura.
        </p>
      </div>

      <section>
        <div className="mt-16 grid grid-cols-1 gap-4 gap-y-12 md:gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="size-full">
              <img
                className="size-full max-h-[28rem] object-cover shadow-lg"
                src={product.image}
                alt={product.name}
              />
              <div className="px-2 py-4">
                <span className="text-xs text-dark/60 uppercase">
                  {product.category}
                </span>
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="text-dark/60 line-clamp-1">
                  {product.description}
                </p>
                <div className="mt-2">
                  <span className="line-through text-red-600">
                    Rs {product.originalPrice}
                  </span>
                  <span className="ml-2">Save 10%</span>
                  <span className="ml-2 text-lg font-bold">
                    Rs {product.price}
                  </span>
                </div>
                <button className="hover-outline mt-5 group bg-gradient px-6 py-1 rounded-full border border-dark/50 flex items-center justify-center gap-2 font-semibold transition-all duration-500">
                  Add to Cart
                  <TbShoppingCart className="text-xl group-hover:translate-x-2 transition-all duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LatestProducts;
