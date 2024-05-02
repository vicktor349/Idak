import React from 'react'
import FeaturedLocationsCard from './FeaturedLocationsCard'

const FeaturedLocation = () =>
{
    return (
        <div className='grid place-items-center'>
            <h3 className='font-bold text-black/80 ssm:text-2xl sm:text-3xl text-center'>Featured Location</h3>
            <div className='flex items-center justify-center mt-4 space-x-3'>
                <p className='bg-primaryColor text-center ssm:w-20 sm:w-28 h-2 rounded-full'></p>
                <p className='bg-primaryColor text-center w-5 h-2 rounded-full'></p>
            </div>
            <div className='mt-12'>
                <FeaturedLocationsCard />
            </div>
        </div>
    )
}

export default FeaturedLocation