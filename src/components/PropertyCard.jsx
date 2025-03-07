import React from "react";

const PropertyCard = ({ property, onBook }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mt-2">{property.name}</h2>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="text-sm font-bold mt-1">₹{property.price} per night</p>
        <button
          onClick={onBook}
          className="bg-blue-500 text-white px-3 py-1 mt-2 rounded w-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
