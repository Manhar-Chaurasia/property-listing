import { createContext, useState } from "react";
import propertiesData from "../data/properties.json";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(15000);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8; // Change as needed

  // Filter properties based on search and price
  const filteredProperties = propertiesData.filter(
    (property) =>
      property.price <= maxPrice &&
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  return (
    <PropertyContext.Provider
      value={{
        properties: paginatedProperties,
        setSearchTerm,
        setMaxPrice,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
