import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const MenuSideBar = ({ handleCloseMenu, listMenu }) => {
    return (
        <div className='bg-black'>
            <div className='h-screen bg-white w-[85%] p-3'>
                <div className='flex items-center justify-between px-3'>
                    <div className='flex gap-1 items-center border-b-[1px] py-2'>
                        <BsSearch size={20} />
                        <input type="text" placeholder='Tìm kiếm ...' className='outline-none' />
                    </div>
                    <div>
                        <AiOutlineClose size={20} onClick={() => handleCloseMenu()} />
                    </div>
                </div>
                <div className='text-[14px]'>
                    <Link href='/' className=' text-red-700 py-4 uppercase inline-block'>Trang chủ</Link>
                    {listMenu?.map((item, index) => (
                        <div key={index}>
                            <Link
                                href={item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('-')}
                                className='flex flex-col uppercase text-green-700 py-4 border-t-[1px]'
                            >
                                {item?.name}
                            </Link>
                            <div>
                                {item?.list?.map((item, index) => (
                                    <Link
                                        href="/"
                                        key={index}
                                        className='nav-item-sidebar'
                                    >
                                        {item?.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuSideBar
