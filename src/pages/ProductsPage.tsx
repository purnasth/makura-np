import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import ProductsFilter from "../components/ui/ProductsFilter";
import { products } from "../constants/products";
import { Product } from "../interfaces/Product";

const ProductsPage: React.FC = () => {
  return (
    <main className="px-2 md:px-4 py-20">
      <div className="md:hidden max-w-5xl mx-auto text-left md:text-center space-y-3 md:space-y-4 my-12 md:mb-32">
        <span className="text-xs md:text-base uppercase">
          Proudly made in Nepal
        </span>
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-relaxed">
          Wear the Spirit with Makura
        </h3>
        <p className="text-sm text-justify md:text-base md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          praesentium molestias officiis reprehenderit cumque placeat iste
          deserunt impedit adipisci voluptatum dolorum architecto, eaque rerum
          accusantium. Tenetur iusto ab ut! Omnis cumque amet labore sint
          similique, veniam expedita totam quod aspernatur, dolore voluptatem
          quidem temporibu
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-y-16">
        <div className="col-span-1">
          <ProductsFilter />
        </div>
        <aside className="col-span-5">
          <p className="my-5">24 items found.</p>
          <div className="grid grid-cols-2 gap-2 gap-y-8 md:gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product: Product) => (
              <div key={product.id} className="size-full">
                {/* !! Use the below one : if the id is not unique since key is given the id*/}
                {/* {products.map((product: Product, index) => (
              <div key={index} className="size-full"> */}
                <img
                  className="size-full h-48 md:h-full lg:h-80 2xl:h-[28rem] object-cover shadow-lg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-2">
                  <span className="text-xs text-dark/60 uppercase">
                    {product.category}
                  </span>
                  <h4 className="text-base md:text-xl font-semibold">
                    {product.name}
                  </h4>
                  <p className="text-xs md:text-sm 2xl:text-base text-dark/60 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="md:mt-2">
                    {product.discount ? (
                      <>
                        <span className="text-xs md:text-base line-through text-red-600">
                          Rs.{product.productPrice}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base mx-1 md:mx-2 text-red-600">
                          Save{product.discount}%
                        </span>
                        <span className="text-sm md:text-lg font-bold">
                          Rs.
                          {Math.round(
                            parseInt(product.productPrice) *
                              (1 - parseInt(product.discount) / 100)
                          )}
                        </span>
                      </>
                    ) : (
                      <span className="text-sm md:text-lg font-bold">
                        Rs {product.productPrice}
                      </span>
                    )}
                  </div>

                  <button className="text-xs md:text-base hover-outline mt-2 md:mt-5 group bg-gradient px-6 py-1 rounded-full border border-dark/50 flex items-center justify-center gap-2 font-semibold transition-all duration-500">
                    Add to Cart
                    <TbShoppingCart className="text-base md:text-xl group-hover:translate-x-2 transition-all duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ProductsPage;
