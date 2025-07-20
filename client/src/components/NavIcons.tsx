'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import CartModal from './CartModal';

const NavIcons = () => {
    const router = useRouter()
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    // TEMPORARY
    const isLoggedIn = true;

    const handleProfile = () => {
        if (!isLoggedIn){
            router.push("/login");
        }
        setIsProfileOpen((prev)=>!prev);
    }
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
        <CgProfile className='text-xl xl:text-2xl text-blue-800' onClick={handleProfile}/>
            {isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-lg z-10'>
                <Link href="/">Profile</Link>
                <div className='mt-2 cursor-pointer'>Logout</div>
                </div>}
        <IoMdNotifications className='text-xl xl:text-2xl text-blue-800'/>
        <div className='relative cursor-pointer'>
            <FaCartShopping className='text-xl xl:text-2xl text-blue-800' onClick={() => setIsCartOpen((prev) => !prev)}/>
                <div className='absolute -top-4 -right-4 w-6 h-6 bg-main rounded-full text-sm flex items-center justify-center'>2</div>
        </div>
            {isCartOpen && <CartModal/>}
    </div>
  )
}

export default NavIcons