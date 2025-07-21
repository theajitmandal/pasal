import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="/mobile.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-800" />
          <Image src="/d.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div> 
        <button className="rounded-2xl ring-1 ring-amber-300 text-amber-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white">Add to Cart</button>
      </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="/mobile.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-800" />
          <Image src="/d.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div> 
        <button className="rounded-2xl ring-1 ring-amber-300 text-amber-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white">Add to Cart</button>
      </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="/mobile.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-800" />
          <Image src="/d.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div> 
        <button className="rounded-2xl ring-1 ring-amber-300 text-amber-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white">Add to Cart</button>
      </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="/mobile.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-800" />
          <Image src="/d.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div> 
        <button className="rounded-2xl ring-1 ring-amber-300 text-amber-400 py-2 px-4 text-xs hover:bg-red-400 hover:text-white">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
