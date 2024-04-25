import featuredlistingdata from '@/data/featuredlistingdata'
import { Avatar } from '@mantine/core'
import React from 'react'

const FeaturedListingCard = () =>
{
    return (
        <div>
            <div className='ssm:space-y-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-auto ssm:mx-4 sm:mx-7 gap-5'>
                {featuredlistingdata.map((housing) => (
                    <div className='border border-gray-200 border-solid rounded-xl' key={housing.id}>
                        <div style={{ backgroundImage: `url(${housing.imageurl})` }} className='ssm:h-80 sm:h-48 bg-cover md:h-[21rem] lg:h-56 xl:h-64 2xl:h-[21rem] bg-no-repeat relative rounded-t-xl'>
                            <p className='bg-green-500 rounded-full text-white w-fit py-2 px-4 text-sm absolute top-7 right-10 select-none'>For Rent</p>
                        </div>
                        <div className='space-y-3 mx-6 my-3'>
                            <p><span className='text-red-500'>{housing.pricing}</span>/Month</p>
                            <p className="font-semibold xl:text-xl">{housing.location}</p>
                            <section className='flex justify-between'>
                                <p className="font-light">{housing.bedrooms} bedroom</p>
                                <p className="font-light">{housing.size} Sqaure FT</p>
                            </section>
                        </div>
                        <hr className='w-full' />
                        <div className='flex items-center space-x-4 mx-6 ssm:my-3 xl:my-5'>
                            <Avatar variant="light" radius="xl" size="lg" src="" />
                            <section className='space-y-2'>
                                <p className='font-semibold'>{housing.seller}</p>
                                <p className='text-gray-400'>Propery seller</p>
                            </section>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedListingCard