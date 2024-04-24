import React, { useState } from 'react';

function CustomDropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block ">
      {/* Three dots icon */}
      <div className="cursor-pointer" onClick={toggleDropdown}>&#x22EE;</div>
      
      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute mt-2 py-1 w-48 bg-white border border-gray-300 rounded shadow-lg left-0">
          <div className="py-1 ">
            {options.map((option, index) => (
              <div key={index} className="px-4 py-2 cursor-pointer  hover:bg-gray-200">{option}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
