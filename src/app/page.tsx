
'use client'
import React from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import ProductsHeader from '@/components/ProductsHeader';
import ProductTable from '@/components/ProductTable';
import FilterTabs from '@/components/FilterTabs';
import { Menu } from '@headlessui/react';
import { FiShoppingCart, FiHome, FiUsers, FiSettings, FiSearch, FiUser } from 'react-icons/fi';
import { LuUsers2 } from 'react-icons/lu';
import { IconBox } from '@tabler/icons-react';
import { GoGraph } from 'react-icons/go';
import { BsBoxArrowInRight } from 'react-icons/bs'; // for sign-in icon
import ProfileMenu from '@/components/ProfileMenu';

const links = [
  { label: 'Dashboard', href: '#', icon: <FiHome /> },
  { label: 'Orders', href: '#', icon: <FiShoppingCart /> },
  { label: 'Products', href: '/', icon: <IconBox /> },
  { label: 'Customers', href: './customers', icon: <LuUsers2 /> },
  { label: 'Analytics', href: '#', icon: <GoGraph /> },
];


const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar>
        <SidebarBody>
          {links.map(link => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

        <main className="flex-1 p-6 overflow-y-auto relative pt-0">
        <ProfileMenu></ProfileMenu>
          <ProductsHeader />
          <ProductTable />
        </main>
      
    </div>
  
  );
};

export default Home;
