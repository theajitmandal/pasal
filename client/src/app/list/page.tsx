import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* COMPAIGN */}
      <div className='bg-pink-50 p-4 flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
        <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab upto 50% off on <br/> Selected Products</h1>
        <button className='rounded-3xl bg-amber-500 text-white  w-max py-3 px-5 text-sm'>Buy Now</button>
        </div>
        <div className='relative w-1/3'>
          <Image src="/mobile.jpg" alt='' fill className='object-cover'/>
        </div>
      </div>
      {/* FILTER */}
      <Filter/>
      {/* PRODUCTS */}
      <h1 className='mt-12 text-xl font-semibold'>Shoes for you</h1>
      <ProductList/>
    </div>
  )
}

export default page