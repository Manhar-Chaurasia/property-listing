import React, { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import Modal from "../components/Modal";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const Home = () => {
  const { properties } = useContext(PropertyContext);
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <SearchFilter />
        <div className="flex flex-wrap gap-14 justify-center">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onBook={() => setSelectedProperty(property)}
              />
            ))
          ) : (
            <p className="w-full text-center text-gray-600">
              No properties found
            </p>
          )}
        </div>
        <Pagination />
        {selectedProperty && (
          <Modal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
