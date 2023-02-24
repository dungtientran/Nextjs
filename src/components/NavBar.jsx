import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

import homePage from "../assets/data/data";


const NavBar = ({ check, listMenu }) => {
  // console.log(listMenu);
  return (
    <div className={`hidden text-[14px] uppercase h-8 max-w-[1100px] m-auto md:flex items-center justify-between ${!check ? 'bg-red-700 text-white' : 'bg-[#f7f7f7] text-black'}`}>
      <Link href='/' className={`${!check ? 'nav-item' : 'nav-item-footer'}`}>
        <AiOutlineHome size={18} />
      </Link>
      {listMenu?.map((item, index) => (
        <div className='nav-item relative' key={index}>
          <Link href="/" className=''>{item?.name}</Link>
          <div className='absolute hidden text-[13px] top-full left-0 min-w-[200px] bg-green-800'>
            {item?.list?.map((item, index) => (
              <Link href='/' key={index}
                className='block border-t-[0.3px] border-white px-4 py-2 hover:bg-green-900'>
                {item?.name}
              </Link>
            ))}
          </div>        </div>

      ))}
      <span className='nav-item'>
        <BsSearch size={18} />
      </span>
    </div>
  )
}

export default NavBar
