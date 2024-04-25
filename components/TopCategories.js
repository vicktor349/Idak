import React from 'react';
import { FiThumbsUp } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoCompassOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { Carousel } from '@mantine/carousel';
import classes from "../styles/Carousel.module.css"


const Categories = ({ text, iconComponent, backgroundColor }) =>
{
    const bgColors = {
        "orange-600": "bg-orange-500/20",
        "red-600": "bg-red-500/20",
        "green-600": "bg-green-500/20",
        "purple-600": "bg-purple-500/20",
        "blue-600": "bg-blue-500/20"

    };

    const bgColorClass = bgColors[backgroundColor]
    return (
        <div className="border border-gray-200 rounded-full flex items-center sm:w-auto w-full h-14 hover:cursor-pointer">
            <div className={`${bgColorClass} w-10 h-10 flex items-center justify-center rounded-full ml-3`}>
                {iconComponent}
            </div>
            <p className="mx-3">{text}</p>
        </div>
    );
};


const TopCategories = () =>
{
    return (
        <div className='my-16'>
            <h3 className='font-bold text-black/80 ssm:text-2xl sm:text-3xl text-center'>Browse From Top Categories</h3>
            <div className='flex items-center justify-center mt-2 space-x-3'>
                <p className='bg-primaryColor text-center ssm:w-28 sm:w-32 h-2 rounded-full'></p>
                <p className='bg-primaryColor text-center w-5 h-2 rounded-full'></p>
            </div>
            <div className='ssm:mx-5 sm:mx-10 my-10 ssm:hidden xl:flex items-center justify-center space-x-12'>
                <Categories backgroundColor="blue-600" text="Commercial Properties" iconComponent={<PiCurrencyDollarThin className='text-blue-500' />} />
                <Categories backgroundColor="green-600" text="Residential Spaces" iconComponent={<GoHome className='text-green-500 font-bold' />} />
                <Categories backgroundColor="red-600" text="Holiday Rentals" iconComponent={<FiThumbsUp className='text-red-500' />} />
                <Categories backgroundColor="purple-600" text="Event Spaces" iconComponent={<IoCompassOutline className='text-purple-500' />} />
                <Categories backgroundColor="orange-600" text="More" iconComponent={<IoEllipsisHorizontal className='text-orange-500' />} />
            </div>
            <div>
                <Carousel
                    loop
                    slideSize={{ sm: "25%" }}
                    slideGap="md"
                    align="start"
                    classNames={classes}
                    className='ssm:grid xl:hidden sm:mx-20 my-10'
                >
                    <Carousel.Slide>
                        <Categories backgroundColor="blue-600" text="Commercial Properties" iconComponent={<PiCurrencyDollarThin className='text-blue-500' />} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Categories backgroundColor="green-600" text="Residential Spaces" iconComponent={<GoHome className='text-green-500 font-bold' />} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Categories backgroundColor="red-600" text="Holiday Rentals" iconComponent={<FiThumbsUp className='text-red-500' />} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Categories backgroundColor="purple-600" text="Event Spaces" iconComponent={<IoCompassOutline className='text-purple-500' />} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Categories backgroundColor="orange-600" text="More" iconComponent={<IoEllipsisHorizontal className='text-orange-500' />} />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </div>
    );
};

export default TopCategories;
