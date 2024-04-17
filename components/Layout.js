import React from 'react'
import Navbar from './Navbar'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) =>
{
    return (
        <div className={`${inter.className}`}>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout