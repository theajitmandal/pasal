import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagramSquare,
  FaPaypal,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 items-center text-center">
          <Link href="/">
            <Image
              src="/pasallogo-03.svg"
              alt="Pasal Logo"
              width={200}
              height={200}
            />
          </Link>
          <p>3115 Winding way, Central Plaza, Kathmandu, CA 40578 Nepal</p>
          <span className="font-semibold">ajit@ajit.dev</span>
          <span className="font-semibold">+1 245 254 789</span>
          <div className="flex gap-6">
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaInstagramSquare />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliate</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div className="flex">
            <input type="text" placeholder="Email" className="p-4 w-3/4" />
            <button className="w-1/4 bg-amber-500 text-white">JOIN</button>
          </div>
          <span>Secure Payment</span>
          <div className="flex justify-between">
            <FaPaypal />
            <FaCcMastercard />
            <FaCcVisa />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16">
        <div>&copy;2024 Ajit Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="mr-4 text-gray-500">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="mr-4 text-gray-500">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
