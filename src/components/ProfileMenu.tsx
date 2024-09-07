
'use client'
import React from 'react';
import { Menu } from '@headlessui/react';
import { FiUser } from 'react-icons/fi';
import ProductsHeader from './ProductsHeader';


export default function ProfileMenu() {
  return (
    <div className="relative">
     
      <header className="flex justify items-center p-6 bg-gray shadow">
      
            <div className="text-sm text-gray ">
              <span>Dashboard</span>
              <span className="text-xs text-gray-400 mx-1">{'>'}</span>
              <span>Products</span>
              <span className="text-xs text-gray-400 mx-1">{'>'}</span>
              <span>All Products</span>
            </div>

      </header>

      <div className="absolute top-6 right-6 flex items-center space-x-4 sm:space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1"
        />

        <Menu as="div" className="relative">
          <Menu.Button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100">
            <FiUser className="text-gray-600" />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 px-1">
              <h5 className="block px-4 py-2 text-sm text-gray-900">My Account</h5>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Sign In
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      
    </div>
  );
}

