import { ReactNode } from 'react'
import { Quintessential } from 'next/font/google'
interface Layout{
    children:ReactNode,
  }

const quin = Quintessential({subsets:['latin'], weight:['400']})

export default function Layout({ children }:Layout) {
    return (
      <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
        <div className='absolute top-0 left-0 right-0 md:static'>
          <main>{children}</main>
        </div>
        <div className="bg-red-900 flex flex-col text-white justify-center items-center gap-14 w-full h-full bg-blend-screen md:bg-blend-multiply sm:justify-start sm:pt-36 lg:justify-center lg:pt-0" style={{backgroundImage:'URL(/model3.jpg)'}}>
          <h1 className='text-3xl border-b-2 border-white'>Alexa Boutique</h1>
          <div className='text-center'>
            <p className='text-2xl  md:text-3xl lg:text-4xl'>Inspired by your life</p>
            <p className={`${quin.className} text-xl md:text-2xl lg:text-3xl`}>Beauty and Glory</p>
          </div>
        </div>
        
      </div>
      
    )
  }