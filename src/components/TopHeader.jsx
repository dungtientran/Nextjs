import Link from 'next/link';
import React from 'react';
import homePage from "../assets/data/data";

const TopHeader = () => {
    const day = new Date().getDay() + 1;
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const yeah = new Date().getFullYear();

    return (
        <div className='p-1 bg-white border-[1px] w-full text-[12px] font-semibold'>
            <div className='max-w-[1100px] m-auto flex gap-3'>
                <Link href={'/'} className='text-hover text-[#555555]'>
                    <span>Thứ</span>
                    <span>{day}</span>
                    <span>, {date}</span>
                    <span>/{month}</span>
                    <span>/{yeah}</span>
                </Link>
                <div className='flex'>
                    {homePage?.topHeader?.map((item, index) => (
                        <Link key={index} href={'/'} className='text-hover uppercase text-[#10427C]'>
                            <span className='mx-1'>-</span>
                            <span>{item}</span>
                        </Link>   
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopHeader
