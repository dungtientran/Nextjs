import Link from 'next/link';
import React from 'react';
import { AiOutlineFileSearch, AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

import homePage from "../assets/data/data";


const NavBar = ({check}) => {

  return (
    <div className={`hidden h-8 max-w-[1100px] m-auto md:flex items-center justify-between ${!check ? 'bg-red-700 text-white' : 'bg-[#f7f7f7] text-black'}`}>
      <Link href='/' className={`${!check ? 'nav-item' : 'nav-item-footer'}`}>
        <AiOutlineHome size={18} />
      </Link>
   
      <span className='nav-item'>
        <BsSearch size={18} />
      </span>
    </div>
  )
}

export default NavBar
