"use client"
import './navbar.css'
import Link from 'next/link'
import { Lora } from 'next/font/google'
import React, { useState } from 'react'
import Hamburger from '@/components/hamburger/hamburger'

const lora = Lora({subsets:['latin'], weight:['400','500', '600']})

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const hamburgerMenu = () => {
        setOpened((prev) => !prev)
    }
  return (
    <div className='overflow-x-hidden'>
        <div className={`${lora.className} w-full h-28 bg-white flex justify-between items-center p-5 fixed top-0 sm:p-10 lg:p-20`}>
            <Link href='/'>
                <h1 className='text-xl border-b-2 sm:text-2xl'>Alexa</h1>
                <p className='text-base opacity-60'>Boutique</p>
            </Link>
            <ul className={`flex flex-col justify-evenly fixed top-0 right-0 w-3/4 h-[100vh] items-center transition-all duration-700  ${opened?  'translate-x-0' : 'translate-x-[1000px]'} sm:static sm:translate-x-0 sm:flex-row sm:h-full sm:bg-transparent sm:justify-between sm:w-1/2`}>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <Hamburger hamburger={opened} burgerF={hamburgerMenu}/>
        </div>
    </div>
  )
}
