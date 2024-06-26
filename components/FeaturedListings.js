import React from 'react'
import { Carousel } from '@mantine/carousel';
import FeaturedListingCard from './FeaturedListingCard';

const Selection = ({ text }) =>
{
    return (
        <div className="text-gray-900 border-gray-200 bg-gray-300 rounded-full border-solid hover:cursor-pointer xl:hover:text-white xl:hover:bg-primaryColor xl:hover:border-primaryColor">
            <div className="flex items-center p-2 py-4 justify-center">
                <p className='text-sm truncate'>{text}</p>
            </div>
        </div>
    )
}


const FeaturedListings = () =>
{
    return (
        <div className='md:mx-7 lg:mx-16'>
            <h3 className='font-bold text-black/80 ssm:text-2xl sm:text-3xl text-center'>Featured Listings</h3>
            <div className='flex items-center justify-center mt-2 space-x-3'>
                <p className='bg-primaryColor text-center ssm:w-20 sm:w-28 h-2 rounded-full'></p>
                <p className='bg-primaryColor text-center w-5 h-2 rounded-full'></p>
            </div>
            <div className='grid-cols-7 gap-3 my-12 ssm:hidden xl:grid'>
                <div data-aos='zoom-in' data-aos-duration="1000"><Selection text="All Items" /></div>
                <div data-aos="zoom-in" data-aos-duration="1500"><Selection text="Residential Spaces" /></div>
                <div data-aos="zoom-in" data-aos-duration="2000"><Selection text="Sport Venue" /></div>
                <div data-aos="zoom-in" data-aos-duration="2500"><Selection text="Meeting Spaces" /></div>
                <div data-aos="zoom-in" data-aos-duration="3000"><Selection text="Vans & Buses" /></div>
                <div data-aos="zoom-in" data-aos-duration="3500"><Selection text="Cars & SUVs" /></div>
                <div data-aos="zoom-in" data-aos-duration="4000"><Selection text="Industrial Vehicles" /></div>
            </div>
            <div className='xl:hidden my-12'>
                <Carousel
                    loop
                    slideSize={{ md: "33.33333%", sm: "50%", xs: "50%" }}
                    slideGap="md"
                    withControls={false}
                    className='ssm:grid xl:hidden ssm:mx-3 sm:mx-10 my-10'
                >
                    <Carousel.Slide><Selection text="All Items" /></Carousel.Slide>
                    <Carousel.Slide><Selection text="Residential Spaces" /></Carousel.Slide>
                    <Carousel.Slide>
                        <Selection text="Sport Venue" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Selection text="Meeting Spaces" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Selection text="Meeting Spaces" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Selection text="Cars & SUVs" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Selection text="Industrial Vehicles" />
                    </Carousel.Slide>
                </Carousel>
            </div>
            <FeaturedListingCard />
        </div >
    )
}

export default FeaturedListings