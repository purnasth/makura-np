import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ProductsFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 20000]); // Updated for price slider
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isSortByOpen, setIsSortByOpen] = useState<boolean>(false);

  const categories = ["All", "Clothing", "Watches", "Shoes", "Accessories"];
  const colors = ["Black", "Silver", "Gold", "Khaki", "Green"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const sortOptions = [
    { label: "Newest First", value: "newest" },
    { label: "Price: Low to High", value: "low-high" },
    { label: "Price: High to Low", value: "high-low" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  return (
    <aside className="products-scroll sticky top-16 p-2 md:pr-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="mt-3 flex items-center justify-between select-none">
        <h5 className="text-lg font-semibold">Filter by</h5>
        <button
          className="text-sm text-red-600  bg-red-100 border border-red-600 px-4 py-1 rounded-full font-semibold "
          onClick={() => {
            setSelectedCategory("");
            setSelectedPriceRange([0, 20000]);
            setSelectedColors([]);
            setSelectedSize("");
            setSortBy("");
          }}
        >
          Reset
        </button>
      </div>

      <hr className="border-dark/20 my-5" />

      <div className="">
        <h6
          className="text-base font-semibold flex justify-between items-center cursor-pointer select-none"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          Category
          <FaChevronDown
            className={`text-sm transition-transform ${
              isCategoryOpen ? "rotate-180" : ""
            }`}
          />
        </h6>
        {isCategoryOpen && (
          <ul className="mt-4 space-y-0">
            {categories.map((category) => (
              <li key={category}>
                <label className="w-full inline-flex items-center gap-2 hover:font-semibold hover:text-dark transition-all duration-300">
                  <input
                    type="radio"
                    className="form-radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="border-dark/20 my-5" />

      {/* Price Filter with Slider */}
      <div className="">
        <h6 className="text-base font-semibold">Price Range</h6>
        <div className="mt-2">
          <input
            type="range"
            className="w-full"
            min="0"
            max="20000"
            step="100"
            value={selectedPriceRange[1]}
            onChange={(e) =>
              setSelectedPriceRange([0, parseInt(e.target.value)])
            }
          />
          <div className="flex justify-between mt-1">
            <span>Rs 0</span>
            <span>Rs {selectedPriceRange[1]}</span>
          </div>
        </div>
      </div>

      <hr className="border-dark/20 my-5" />

      {/* Color Filter with Circles */}
      <div className="select-none">
        <h6 className="text-base font-semibold">Color</h6>
        <ul className="mt-2 flex flex-wrap gap-3 gap-y-0">
          {colors.map((color) => (
            <li key={color} className="relative">
              <div
                className={`size-6 rounded-full border border-dark cursor-pointer transition-all duration-150 ${
                  selectedColors.includes(color) ? "scale-110" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorChange(color)}
              />
              {selectedColors.includes(color) && (
                <span className="absolute -top-2 -right-3 text-sm text-green-600 font-bold">
                  ✓
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-dark/20 my-5" />

      {/* Size Filter */}
      <div className="select-none">
        <h6 className="text-base font-semibold">Size</h6>
        <ul className="mt-2 flex flex-wrap gap-5 gap-y-0">
          {sizes.map((size) => (
            <li key={size}>
              <label className="w-full inline-flex items-center gap-1 hover:font-semibold hover:text-dark transition-all duration-300">
                <input
                  type="radio"
                  className="form-radio text-green-600"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                />
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-dark/20 my-5" />

      {/* Sort By Dropdown */}
      <div className="select-none">
        <h6
          className="text-base font-semibold flex justify-between items-center cursor-pointer"
          onClick={() => setIsSortByOpen(!isSortByOpen)}
        >
          Sort By
          <FaChevronDown
            className={`transition-transform ${
              isSortByOpen ? "rotate-180" : ""
            }`}
          />
        </h6>
        {isSortByOpen && (
          <ul className="mt-4 space-y-0">
            {sortOptions.map((option) => (
              <li key={option.value}>
                <label className="w-full inline-flex items-center gap-2 hover:font-semibold hover:text-dark transition-all duration-300">
                  <input
                    type="radio"
                    className="form-radio text-green-600"
                    name="sort"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={() => setSortBy(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Apply Button */}
      <button className="hover-outline mt-10 w-full bg-gradient text-dark py-2 rounded-full font-semibold">
        Apply Filters
      </button>
    </aside>
  );
};

export default ProductsFilter;
