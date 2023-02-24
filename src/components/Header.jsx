"use client";
import React, { useState } from 'react'
import homePage from "../assets/data/data";
import Banner from './Banner';
import TopHeader from './TopHeader';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import MenuSideBar from './MenuSideBar';
import NavBar from './NavBar';

const Header = () => {

  const [isOpenMenuSideBar, setIsOpenMenuSideBar] = useState(false);
  const handleCloseMenu = () => setIsOpenMenuSideBar(false);

  return (

    <div>
      <div className='hidden md:block'>
        <TopHeader />
      </div>
      <div className='hidden md:flex justify-between max-w-[1100px] m-auto py-3'>
        <Banner banner={homePage?.banner?.banner1} address="/" />
        <Banner banner={homePage?.banner?.banner2} address="/about" />
      </div>
      <div>
         <NavBar listMenu = {homePage?.catogery}/>
      </div>

      {/* mobile */}
      <div className='bg-red-600 flex md:hidden items-center justify-between px-3'>
        <div className='flex items-center'>
          <AiOutlineMenu
            size={20} className='text-white text-hover cursor-pointer mr-3'
            onClick={() => setIsOpenMenuSideBar(true)}
          />
          <Link href='/'>
            <img
              src="https://img.cand.com.vn/Content/images/logom.png"
              alt=""
              className='max-w-[180px]'
            />
          </Link>
        </div>
        <div>
          <BsSearch size={20} className='text-white text-hover cursor-pointer' />
        </div>
      </div>
      {isOpenMenuSideBar && (
        <div className='fixed top-0 left-0 w-full'>
          <MenuSideBar handleCloseMenu={handleCloseMenu} listMenu={homePage?.catogery}/>
        </div>
      )}
    </div>
  )
}

export default Header
