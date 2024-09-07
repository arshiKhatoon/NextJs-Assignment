// src/components/Buttons.tsx
import React from 'react';

export const ExportButton = () => (
  <button className="flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border rounded-md hover:bg-gray-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
    Export
  </button>
);

export const AddProductButton = () => (
  <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
    Add Product
  </button>
);
