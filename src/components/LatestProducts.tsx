import React from "react";
import { TbShoppingCart } from "react-icons/tb";

import { products } from "../constants/products";
import { Product } from "../interfaces/Product";

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
          {products.map((product: Product) => (
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
                <div className="md:mt-2">
                  {product.discount ? (
                    <>
                      <span className="line-through text-red-600">
                        Rs.{product.productPrice}
                      </span>
                      <span className="mx-2 text-red-600">
                        Save{product.discount}%
                      </span>
                      <span className="text-lg font-bold">
                        Rs.
                        {Math.round(
                          parseInt(product.productPrice) *
                            (1 - parseInt(product.discount) / 100)
                        )}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">
                      Rs {product.productPrice}
                    </span>
                  )}
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
