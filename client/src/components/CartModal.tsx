"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  // TEMPORARY
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping List</h2>
          {/* // LIST */}
          <div className="flex flex-col gap-8">
            {/* item */}
            <div className="flex gap-6">
              <Image
                src="/a.jpg"
                alt="Image"
                width={100}
                height={80}
                className="object-cover rounded"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="flex items-center justify-between gap-8">
                  {/* TITLE */}
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-6">
              <Image
                src="/a.jpg"
                alt="Image"
                width={100}
                height={80}
                className="object-cover rounded"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="flex items-center justify-between gap-8">
                  {/* TITLE */}
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/*LAST BOTTOM SECTION */}
            <div>
              <div>
                <span className="flex items-center justify-between font-semibold">
                  SubTotal
                </span>
                <span className="">$49</span>
                <p className="tex-gray-500 text-sm mt-2 mb-4">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="flex justify-between text-sm">
                  <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                    View Cart
                  </button>
                  <button className="rounded-md py-3 px-4 bg-black text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
