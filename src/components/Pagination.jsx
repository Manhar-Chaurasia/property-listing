import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(PropertyContext);

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="bg-blue-200 px-3 py-1 rounded disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-4 py-1 border rounded">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="bg-blue-200 px-3 py-1 rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
