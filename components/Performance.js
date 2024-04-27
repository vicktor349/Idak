import React from 'react'


const Card = ({ text, text2, text3, paragraph1, paragraph2, paragraph3 }) =>
{
    return (
        <div className='bg-black/75 rounded-[1.7rem] ssm:mx-2 sm:mx-0'>
            <div className='ssm:grid ssm:place-items-center sm:flex sm:justify-between items-center ssm:h-80 sm:h-52 ssm:px-5 sm:px-10 md:px-4 lg:px-12 lg:mx-12 xl:mx-28'>
                <div>
                    <p className='text-white text-3xl text-center'>{text} +</p>
                    <p className='text-white text-sm ssm:text-center sm:text-start'>{paragraph1}</p>
                </div>
                <div>
                    <p className='text-white text-3xl text-center'>{text2} +</p>
                    <p className='text-white text-sm  ssm:text-center sm:text-start'>{paragraph2}</p>
                </div>
                <div>
                    <p className='text-white text-3xl text-center'>{text3} +</p>
                    <p className='text-white text-sm  ssm:text-center sm:text-start'>{paragraph3}</p>
                </div>
            </div>
        </div>
    );
};



const Performance = () =>
{
    return (
        <div className='bg-gray-500/10 my-10'>
            <div className='md:grid md:grid-cols-11 place-items-center items-center py-16 sm:mx-10 md:mx-8 lg:mx-16'>
                <h1 className='ssm:text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold ssm:text-center md:text-start md:leading-[4rem] lg:leading-[4rem] xl:w-72 col-start-2 col-end-3'>Insights and Performance Metrics</h1>
                <div className="ssm:w-80 ssm:mx-auto sm:mx-0 sm:col-start-4 sm:col-end-12 sm:w-full ssm:mt-10 md:mt-0">
                    <Card text="5000" text2="1000" text3="30"
                        paragraph1="Total Listings in the System"
                        paragraph2="Active Listings"
                        paragraph3="Articles in the Blog"
                    />
                </div>
            </div>
        </div>
    )
}

export default Performance