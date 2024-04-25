import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiUser } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { useRouter } from 'next/router';

const Navbar = () =>
{
    const location = useRouter()
    const activeColor = (p) => location.pathname === p ? "#E93740" : "#000000"
    const [opened, { toggle }] = useDisclosure();
    return (
        <div className='bg-white sticky top-0 z-[999]'>
            <div className='ssm:mx-2 sm:mx-6 lg:mx-16 xl:mx-30'>
                <div className='flex items-center h-24'>
                    <Link href="/">
                        <Image src={"/images/logo.png"} alt='Website Logo' width={500} height={500} className='w-24 h-10' priority />
                    </Link>
                    <div className='ssm:hidden lg:flex items-center space-x-8 justify-center mx-auto'>
                        <Link href="/" className='font-semibold' style={{ color: activeColor("/") }}>Home</Link>
                        <Link href="/" className='font-semibold'>Listings</Link>
                        <Link href="/" className='font-semibold'>Locations</Link>
                        <Link href="/" className='font-semibold'>Articles</Link>
                    </div>
                    <div className='flex items-center space-x-5 ssm:ml-auto lg:ml-0'>
                        <section className="text-primaryColor flex items-center hover:cursor-pointer space-x-1">
                            <FiUser size={24} />
                            <p className='font-semibold ssm:hidden lg:flex'>Sign in</p>
                        </section>
                        <div className='bg-primaryColor rounded-3xl w-48 h-10 text-white items-center justify-center text-center hover:cursor-pointer ssm:hidden lg:flex'>
                            <IoMdAdd size={20} />
                            <p>Post Listing</p>
                        </div>
                        <Burger size="sm" opened={opened} onClick={toggle} aria-label="Toggle navigation" className='ssm:flex items-center lg:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar