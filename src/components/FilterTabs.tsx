import React, { useState } from 'react';

const tabs = [
  { name: 'All' },
  { name: 'Active' },
  { name: 'Draft' },
  { name: 'Archived' }
];

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab.name
              ? 'text-gray-900 border-b-2 border-black'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabClick(tab.name)}
          aria-selected={activeTab === tab.name}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
