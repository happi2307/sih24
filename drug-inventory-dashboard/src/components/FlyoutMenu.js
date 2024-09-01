import React, { useState } from 'react';

const FlyoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAddDrug = (e) => {
    e.preventDefault();
    // Logic to handle adding a drug
    console.log("Drug added");
  };

  return (
    <div className="relative">
      {/* Button to toggle flyout menu */}
      <button
        onClick={toggleMenu}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Drug
      </button>

      {/* Flyout menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded shadow-lg z-50">
          <form onSubmit={handleAddDrug} className="p-4">
            <h3 className="text-lg font-semibold mb-4">Add New Drug</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Drug Name</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter drug name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantity"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter supplier"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FlyoutMenu;
