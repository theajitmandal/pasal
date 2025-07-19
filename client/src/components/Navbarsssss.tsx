'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
  isButton?: boolean;
}

interface NavbarProps {
  brandName?: string;
  mainNavItems?: NavItem[];
  accountNavItems?: NavItem[];
  primaryColor?: string;
  secondaryColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName, mainNavItems, accountNavItems, primaryColor, secondaryColor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(brandName);
  console.log(primaryColor);
  console.log(secondaryColor);

  // Dynamic Tailwind classes based on props
  const activeLinkClass = `text-${primaryColor}-600 border-b-2 border-${primaryColor}-600`;
  const hoverLinkClass = `hover:text-${primaryColor}-500 hover:border-b-2 hover:border-${primaryColor}-500`;
  const buttonClass = `bg-${primaryColor}-600 text-white hover:bg-${primaryColor}-700`;
  const mobileActiveClass = `bg-${primaryColor}-50 text-${primaryColor}-600`;
  const mobileHoverClass = `hover:bg-${secondaryColor}-100 hover:text-${primaryColor}-500`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-xl font-bold text-${secondaryColor}-800 hover:text-${primaryColor}-600`}
            >
              {brandName}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {mainNavItems?.map((item) => (
                <Link
                  key={`${item.name}-${item.path}`}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.path
                      ? activeLinkClass
                      : `text-${secondaryColor}-700 ${hoverLinkClass}`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {accountNavItems?.map((item) => (
              <Link
                key={`${item.name}-${item.path}`}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  item.isButton
                    ? buttonClass
                    : `text-${secondaryColor}-700 ${
                        pathname === item.path ? activeLinkClass : hoverLinkClass
                      }`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-${secondaryColor}-700 hover:text-${primaryColor}-500 hover:bg-${secondaryColor}-100 focus:outline-none`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {mainNavItems?.map((item) => (
            <Link
              key={`mobile-${item.name}-${item.path}`}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path
                  ? mobileActiveClass
                  : `text-${secondaryColor}-700 ${mobileHoverClass}`
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className={`border-t border-${secondaryColor}-200 pt-4`}>
            {accountNavItems?.map((item) => (
              <Link
                key={`mobile-account-${item.name}-${item.path}`}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.isButton
                    ? buttonClass
                    : `text-${secondaryColor}-700 ${
                        pathname === item.path ? mobileActiveClass : mobileHoverClass
                      }`
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// for LayoutRouter.tsx
        {/* <Navbar
          brandName="MyShop"
          primaryColor="indigo"
          secondaryColor="black"
          mainNavItems={[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Deals", path: "/deals" },
          ]}
          accountNavItems={[
            { name: "Login", path: "/login" },
            { name: "Wishlist", path: "/wishlist" },
            { name: "Cart", path: "/cart", isButton: true },
          ]}
        /> */}