import React from 'react';
import FilterTabs from './FilterTabs';
import { ExportButton, AddProductButton } from './Button';

const ProductsHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4 p-4 bg-gray-100 border-b border-gray-200">

      <div className="flex-1">
        <FilterTabs />
      </div>

      <div className="flex space-x-4">
        <ExportButton />
        <AddProductButton />
      </div>
    </div>
  );
};

export default ProductsHeader;
