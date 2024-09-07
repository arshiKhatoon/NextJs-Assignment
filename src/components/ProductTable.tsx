"use client";

import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const products = [
  { id: 1, name: "VR Headset Plus", status: "Active", price: "$349.00", sales: 120, date: "6/23/2024", image: "/images/vr-headset.jpg" },
  { id: 2, name: "Smartwatch Elite", status: "Active", price: "$249.00", sales: 250, date: "6/23/2024", image: "/images/smartwatch.jpg" },
  { id: 3, name: "Bluetooth Speaker Max", status: "Active", price: "$99.00", sales: 400, date: "6/23/2024", image: "/images/speaker.jpg" },
  { id: 4, name: "Laptop Pro", status: "Active", price: "$1299.00", sales: 85, date: "6/23/2024", image: "/images/laptop.jpg" },
  { id: 5, name: "Gaming Mouse X", status: "Active", price: "$49.00", sales: 300, date: "6/23/2024", image: "/images/mouse.jpg" },
  { id: 6, name: "Smartphone Y", status: "Active", price: "$899.00", sales: 200, date: "6/23/2024", image: "/images/smartphone.jpg" },
  { id: 7, name: "Wireless Charger", status: "Active", price: "$29.00", sales: 500, date: "6/23/2024", image: "/images/charger.jpg" },
  { id: 8, name: "Tablet Z", status: "Active", price: "$599.00", sales: 150, date: "6/23/2024", image: "/images/tablet.jpg" },
  { id: 9, name: "Noise Cancelling Headphones", status: "Active", price: "$199.00", sales: 250, date: "6/23/2024", image: "/images/headphone.jpg" },
  { id: 10, name: "Smart Thermostat", status: "Active", price: "$149.00", sales: 180, date: "6/23/2024", image: "/images/thermostat.jpg" },
];

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="h-[100vh] p-4">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <p className="text-gray-600 mb-6">Manage your products and view their sales performance.</p>
      
      <div className="overflow-x-auto overflow-y-auto max-h-[70vh]">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Total Sales</th>
              <th className="py-2 px-4 border-b">Created at</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">
                  <img src={product.image} alt={product.name} className="h-12 w-12 object-cover" />
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{product.status}</span>
                </td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.sales}</td>
                <td className="py-2 px-4 border-b">{product.date}</td>
                <td className="py-2 px-4 border-b text-right">
                  <ActionsMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
      </div>
    </div>
  );
};

const Pagination: React.FC<{ 
  totalPages: number; 
  currentPage: number; 
  paginate: (pageNumber: number) => void; 
}> = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-600'}`}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`py-2 px-4 ${currentPage === number ? 'text-white bg-blue-600' : 'text-blue-600'}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`py-2 px-4 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-600'}`}
      >
        Next
      </button>
    </div>
  );
};

const ActionsMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          ...
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <p className="block px-4 py-2 text-sm text-gray-700">Action</p>
          
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>   
      </Transition>
    </Menu>
  );
};

export default ProductTable;
