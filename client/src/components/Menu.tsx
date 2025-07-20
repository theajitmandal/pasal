"use client";
import Link from "next/link";
import { useState } from "react";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <RxHamburgerMenu
        className="cursor-pointer text-2xl"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-xl gap-8 z-10">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Logout</Link>
        <Link href="/">Cart(1)</Link>
        
        </div>}
    </div>
  );
};

export default Menu;
