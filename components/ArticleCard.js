import articledata from '@/data/articledata'
import Image from 'next/image'
import React from 'react'

const ArticleCard = () =>
{
  return (
    <div>
      {articledata.map((data) => (
        <div className='flex xl:space-x-5 xl:mb-4' key={data.id}>
          <Image src={data.imageUrl} width={500} height={500} alt="Article Image" className='w-52 h-32 cursor-pointer' />
          <div className='xl:space-y-3'>
            <p className='text-red-500 font-semibold cursor-pointer'>{data.date}</p>
            <p className='font-semibold cursor-pointer'>{data.title}</p>
            <p className='text-[#8b8b8b] text-sm w-[33rem] cursor-pointer'>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticleCard