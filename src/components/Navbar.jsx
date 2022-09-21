import React, {useState} from 'react'

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

function Navbar() {
  const [navbar, setNavbar] = useState(true)

  return (
    <div className='w-full mx-auto flex justify-between items-center p-4'>

      <div className='flex items-center'>
        <AiOutlineMenu className='cursor-pointer' size={30} onClick={()=>setNavbar(true)} />
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      <div className='flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] lg bg-gray-200 rounded-full'>
        <AiOutlineSearch className='cursor-pointer' size={20}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search something' type="text" />
      </div>

      <button className='bg-black hidden md:flex text-white items-center gap-2  py-2 rounded-full'>
        <BsFillCartFill size={20}/>
        Cart
      </button>

      <div className={navbar ? `bg-black/80 fixed w-full h-screen z-10 top-0 left-0` : `hidden`}>
      </div>

      <div className={navbar ? `fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 p-2` : `hidden`}>
        <AiOutlineClose size={30} onClick={()=>setNavbar(false)}/>
      </div>
    </div>
  )
}

export default Navbar