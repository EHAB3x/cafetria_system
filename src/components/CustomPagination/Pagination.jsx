import React from 'react';

const CustomPagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className={`${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              } px-4 py-2 border border-gray-300 mx-1 rounded`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomPagination;
