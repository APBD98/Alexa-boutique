"use client"
import './navbar.css'
import Link from 'next/link'
import { Lora } from 'next/font/google'
import {AiOutlineShopping, AiOutlineUser} from 'react-icons/ai'
import React, { useState } from 'react'
import Hamburger from '@/components/hamburger/hamburger'
import Cart from '../cart/cart'
import { useSession } from 'next-auth/react'

const lora = Lora({subsets:['latin'], weight:['400','500', '600']})

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const [cart, setCart] = useState(false)
    const [isLogin, setIslogin] = useState(false)
    const {data:session} = useSession()
    const hamburgerMenu = () => {
        setOpened((prev) => !prev)
    }

    const showCart = () => {
        setCart(true)
    }
  return (
    <div className='overflow-x-hidden'>
        <div className={`${lora.className} border-b-2 w-full h-28 bg-white flex justify-between items-center p-5 fixed top-0 sm:p-10 lg:flex-row lg:p-20`}>
            
            <div className='flex items-center lg:justify-start gap-10 lg:gap-28 lg:w-1/2'>
                <Hamburger hamburger={opened} burgerF={hamburgerMenu}/>
                <Link href='/home' className='relative z-10 lg:static'>
                    <h1 className='text-xl border-b-2 sm:text-2xl'>Alexa</h1>
                    <p className='text-base opacity-60'>Boutique</p>
                </Link>
                <ul className={`bg-white flex flex-col justify-evenly fixed top-0 right-0 w-full h-[90vh] items-center transition-all duration-700  ${opened?  'translate-x-0' : 'translate-x-[1000px]'} lg:static lg:translate-x-0 lg:flex-row lg:h-full lg:justify-between lg:w-1/2`}>
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
            </div>

            <div className='flex flex-row items-center justify-center gap-5 md:gap-10'>
                <div className='flex items-center gap-2 z-10 relative lg:static cursor-pointer'
                onClick={showCart}>
                    <AiOutlineShopping/>
                    <h1>Shopping bag</h1>
                </div>
                <div className='relative w-10'>
                    <div className='pl-3 cursor-pointer' onClick={() => setIslogin((prev) => !prev)}>
                        <AiOutlineUser/>
                    </div>
                    <div className={`absolute top-4 left-0 underline ${isLogin? 'inline' :'hidden'}`}>
                        {
                            session? <Link href={'/auth/signout'}>Logout</Link> : <Link href={'/auth/signin'}>Login</Link>
                        }
                        
                    </div>
                </div>          
            </div>
            
        </div>
        <div>
            <Cart
             styling={cart}
             closeCart={() => setCart(false)}   />
        </div>
    </div>
  )
}
