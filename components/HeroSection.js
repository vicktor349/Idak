import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

const HeroSection = () =>
{
    return (
        <div className="bg-[url('/images/herobanner.png')] bg-contain h-screen w-full bg-no-repeat flex items-center justify-center ">
            <div className='space-y-5 -mt-48'>
                <h3 className='lg:text-3xl xl:text-4xl text-center 2xl:text-5xl text-black/75 font-bold'>Discover Your <span className='text-primaryColor'>Perfect Rental</span></h3>
                <p className='text-center xl:text-xl 2xl:text-2xl'>Rent Cars, Houses, and Items in Just a Few Clicks</p>
                <div className='grid grid-cols-3  place-items-center mx-24'>
                    <p className='bg-white lg:w-28 lg:h-10 xl:w-32 xl:h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Places</p>
                    <p className='bg-white lg:w-28 lg:h-10 xl:w-32 xl:h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Rides</p>
                    <p className='bg-white lg:w-28 lg:h-10 w-32 h-12 rounded-3xl flex items-center justify-center hover:cursor-pointer hover:bg-primaryColor hover:text-white'>Things</p>
                </div>
                <div className='bg-white xl:h-20 2xl:h-24 lg:w-[40rem] 2xl:w-full rounded-full flex items-center'>
                    <RiSearch2Line size={24} className='text-gray-500 ml-4' />
                    <input type="text" className='flex-grow xl:h-20 2xl:h-24 rounded-l-full border-r-2 pl-5 pr-5 outline-none' placeholder='Search for cars, houses, and more...' />
                    <input type="text" className='xl:h-20 2xl:h-24 rounded-r-full border-solid border-gray-300 pr-10 pl-5 outline-none sm:hidden' placeholder='Search for locations...' />
                    <div className='mr-3 bg-primaryColor w-14 h-14 flex items-center justify-center rounded-full hover:cursor-pointer'><RiSearch2Line size={24} className='text-white rounded-full' /></div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection