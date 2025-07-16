"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                {/* <span className="font-bold text-xl">ShopName</span> */}
                <Image src='pasallogo-03.svg' alt='Pasal Logo' width={250} height={250}/>
              </Link>
            </div>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/products" className="py-5 px-3 text-gray-700 hover:text-gray-900">Products</Link>
            <Link href="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/contact" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login" className="py-2 px-5 "><IoMdSearch /></Link>
            <Link href="/cart" className="py-2 px-3">
              Cart (0)
            </Link>
            <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300">Login</Link>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button p-2 focus:outline-none">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
        <Link href="/products" className="block py-2 px-4 text-sm hover:bg-gray-200">Products</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</Link>
        <div className="border-t border-gray-200 pt-2 pb-3">
          <Link href="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">Login</Link>
          <Link href="/cart" className="block py-2 px-4 text-sm hover:bg-gray-200">Cart (0)</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;