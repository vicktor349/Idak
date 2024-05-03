import featuredlocation from '@/data/featuredlocationdata'
import React from 'react'

const FeaturedLocationsCard = () =>
{
    return (
        <div className='flex ssm:mx-2 sm:mx-4 md:mx-16 select-none' data-aos="zoom-in-right">
            <div className='w-72 h-96 xl:w-80 xl:h-[28rem] overflow-hidden rounded-xl ssm:hidden lg:flex'>
                <div style={{ backgroundImage: `url(${"/featuredlocation/kandy.png"})` }} className='relative flex flex-col justify-end w-full h-full bg-center bg-cover bg-no-repeat rounded-xl hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300'>
                    <p className='text-white mb-6 ml-6'>Kandy</p>
                </div>
            </div>
            <div data-aos="zoom-in" className='grid sm:grid-cols-2 lg:gap-5 lg:mx-5 gap-10 xl:mx-10'>
                {featuredlocation.map((location) => (
                    <div className="w-full ssm:h-72 lg:h-44 xl:h-52 overflow-hidden rounded-xl" key={location.id}>
                        <div className="relative ssm:w-96 lg:w-96 h-full bg-center bg-cover bg-no-repeat flex flex-col justify-end rounded-xl hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300" style={{ backgroundImage: `url(${location.imageUrl})` }}>
                            <p className="text-white mb-6 ml-6">{location.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-72 h-96 xl:w-80 xl:h-[28rem] overflow-hidden rounded-xl ssm:hidden lg:flex' data-aos="zoom-in-left">
                <div style={{ backgroundImage: `url(${"/featuredlocation/Colombo.png"})` }} className='relative flex flex-col justify-end w-full h-full bg-center bg-cover bg-no-repeat rounded-xl hover:cursor-pointer hover:scale-[1.05] ease-in-out duration-300'>
                    <p className='text-white mb-6 ml-6'>Colombo</p>
                </div>
            </div>
        </div>

    )
}

export default FeaturedLocationsCard