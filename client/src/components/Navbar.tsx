
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 2xl:px-64'>
        {/* MOBILE */}
        <Link href="/">
            AJIT
        </Link>

    </div>
  )
}

export default Navbar