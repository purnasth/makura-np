import React, { useState } from "react";
import { TbSearch } from "react-icons/tb"; // Importing the search icon from react-icons/tb

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Perform search actions or filtering if needed.
  };

  return (
    <div className="relative w-full max-w-xs">
      <TbSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 text-light text-base" />

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search Products ..."
        className="w-full pl-8 pr-2 py-1.5 bg-transparent text-light placeholder-light focus:outline-none transition duration-200"
      />
    </div>
  );
};

export default SearchBar;