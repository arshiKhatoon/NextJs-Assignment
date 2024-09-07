'use client'
import React from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import FilterTabs from '@/components/FilterTabs';
import { Menu } from '@headlessui/react';
import { FiShoppingCart, FiHome, FiUser } from 'react-icons/fi';
import { LuUsers2 } from 'react-icons/lu';
import { IconBox } from '@tabler/icons-react';
import { GoGraph } from 'react-icons/go';

const links = [
  { label: 'Dashboard', href: '/#', icon: <FiHome /> },
  { label: 'Orders', href: '/#', icon: <FiShoppingCart /> },
  { label: 'Products', href: '/', icon: <IconBox /> },
  { label: 'Customers', href: './customers', icon: <LuUsers2 /> },
  { label: 'Analytics', href: '#', icon: <GoGraph /> },
];

export default function ProfileMenu() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar>
        <SidebarBody>
          {links.map(link => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray">
            <span>Dashboard</span>
            <span className="text-xs text-gray-400 mx-1">{'>'}</span>
            <span>Products</span>
            <span className="text-xs text-gray-400 mx-1">{'>'}</span>
            <span>All Products</span>
          </div>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            {/* Search box */}
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1"
            />

            {/* Profile Menu */}
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
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
        </header>

 
        <div className="mt-8">

          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Customer Section</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div className="p-4 bg-gray-100 rounded-md">Customer Info 1</div>
              <div className="p-4 bg-gray-100 rounded-md">Customer Info 2</div>
              <div className="p-4 bg-gray-100 rounded-md">Customer Info 3</div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
