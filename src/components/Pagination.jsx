import React, { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';

const Pagination = () => {
  const { pages, handlePageChange, totalpages } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-center space-x-4 mb-2">
       
        {pages > 1 && (
          <button
            onClick={() => handlePageChange(pages - 1)}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
          >
            Previous
          </button>
        )}
        
        {pages < totalpages && (
          <button
            onClick={() => handlePageChange(pages + 1)}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-400"
          >
            Next
          </button>
        )}

         <span className="text-gray-700">
          Page {pages} of {totalpages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
