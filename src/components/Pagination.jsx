import React, { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Previous Page"
        >
          Previous
        </button>
      )}
      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Next Page"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
