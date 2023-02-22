import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const MenuSideBar = ({handleCloseMenu}) => {
    return (
        <div className='bg-black'>
            <div className='h-screen bg-white w-[85%] p-3'>
                <div className='flex items-center justify-between px-3'>
                    <div className='flex gap-1 items-center border-b-[1px] py-2'>
                        <BsSearch size={20} />
                        <input type="text" placeholder='Tìm kiếm ...' className='outline-none' />
                    </div>
                    <div>
                        <AiOutlineClose size={20} onClick={() => handleCloseMenu()}/>
                    </div>
                </div>
                <div>Menu</div>
            </div>
        </div>
    )
}

export default MenuSideBar
