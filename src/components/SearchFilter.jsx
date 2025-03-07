import React, { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";

const SearchFilter = () => {
  const { setSearchTerm, setMaxPrice } = useContext(PropertyContext);
  const [price, setPrice] = useState(15000);

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    setMaxPrice(newPrice);
  };

  return (
    <div className="max-w-full mx-auto sm:p-4 mb-4">
      <div className="flex flex-wrap items-center sm:justify-end gap-4 px-11">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border-2 border-gray-300 p-2 rounded-md focus:border-blue-500 outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Price Range Slider */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold">Max Price: ₹{price}</label>
          <input
            type="range"
            min="500"
            max="15000"
            step="500"
            value={price}
            onChange={handlePriceChange}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
