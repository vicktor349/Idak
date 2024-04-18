import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

const HeroSection = () =>
{
    return (
        <div className="bg-[url('/images/herobanner.png')] bg-auto ssm:h-[40rem]  w-full bg-no-repeat flex items-center justify-center ">
            <div className='space-y-5 '>
                <h3 className='ssm:text-2xl text-center sm:text-3xl md:text-5xl text-black/75 font-bold'>Discover Your <span className='text-primaryColor'>Perfect Rental</span></h3>
                <p className='text-center ssm:text-sm sm:text-2xl'>Rent Cars, Houses, and Items in Just a Few Clicks</p>
                <div className='grid grid-cols-3 ssm:gap-x-2 sm:gap-x-0  place-items-center md:mx-24'>
                    <p className='bg-white w-32 h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Places</p>
                    <p className='bg-white w-32 h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Rides</p>
                    <p className='bg-white w-32 h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Things</p>
                </div>
                <div className='bg-white xl:h-20 2xl:h-20 2xl:w-full rounded-full ssm:hidden md:flex items-center'>
                    <RiSearch2Line size={24} className='text-gray-500 ml-4' />
                    <input type="text" className='flex-grow md:h-16 lg:h-20 rounded-l-full border-r-2 pl-5 pr-5 outline-none' placeholder='Search for cars, houses, and more...' />
                    <input type="text" className='flex-grow md:h-16 lg:h-20 rounded-r-full pl-5 pr-5 outline-none' placeholder='Search for locations...' />
                    <div className='mr-3 bg-primaryColor md:w-10 md:h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full hover:cursor-pointer'><RiSearch2Line size={24} className='text-white rounded-full' /></div>
                </div>
                <div className='space-y-4 ssm:grid md:hidden'>
                    <div className='bg-white flex h-12 rounded-full'>
                        <input type="text" className='px-5 rounded-full w-full outline-none' placeholder='Search for cars, houses, and more...' />
                        <RiSearch2Line size={24} className='text-gray-500 mr-3 mt-3' />
                    </div>
                    <div className='bg-white flex h-12 rounded-full'>
                        <input type="text" className='px-5 rounded-full w-full outline-none' placeholder='Search for locations...' />
                        <div className='bg-primaryColor w-14 h-12 flex items-center justify-center rounded-full hover:cursor-pointer'><RiSearch2Line size={24} className='text-white rounded-full' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection