import Image from 'next/image'
import React from 'react'
import ArticleCard from './ArticleCard'

const ImportantArticles = () =>
{
    return (
        <div className='grid place-items-center'>
            <div className='my-12 lg:mx-16 xl:mx-36'>
                <h3 className='font-bold text-black/80 ssm:text-2xl sm:text-3xl text-center'>Important Articles</h3>
                <div className='flex items-center justify-center mt-2 space-x-3'>
                    <p className='bg-primaryColor text-center ssm:w-20 sm:w-28 h-2 rounded-full'></p>
                    <p className='bg-primaryColor text-center w-5 h-2 rounded-full'></p>
                </div>
                <div className='my-12 grid grid-cols-2 gap-x-5'>
                    <div className='space-y-1'>
                        <Image src={"/articles/tips.png"} alt="Top Tips for Finding the Perfect Rental" height={750} width={750} />
                        <p className='text-red-500 font-semibold text-xl'>February 4, 2023</p>
                        <h3 className='font-semibold text-lg'>Top Tips for Finding the Perfect Rental</h3>
                        <p className='text-[#8b8b8b] text-md'>Discover expert advice on how to find the ideal rental property that meets your needs and budget.</p>
                    </div>
                    <ArticleCard />
                </div>
            </div>
        </div>
    )
}

export default ImportantArticles