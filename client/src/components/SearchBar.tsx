'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if(name){
            router.push(`/list?name=${name}`)
        }
    };
  return (
    
        <form className='flex  justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input type='text' name='name' placeholder='Search' className='flex-1 outline-none'/>
            <button className='cursor-pointer'>
                <FaSearch/>
            </button>
        </form>
    
  )
}

export default SearchBar