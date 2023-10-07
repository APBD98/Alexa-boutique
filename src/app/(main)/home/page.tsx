"use client"

import Image from "next/image"
import { Spectral, Quintessential } from "next/font/google"
import Images from '@/utils/imageImporter/imageImporter'
import Buttons from '@/components/button/Button'
import { Parallax } from "react-parallax"

const spectral = Spectral({
  weight:['300'],
  subsets:['latin']
})

const quintessential = Quintessential({
  subsets:['latin'],
  weight:['400']

})

const image1 =
"https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80";





export default function Home() {


  return (
    <div className={`${spectral.className} w-full min-h-[1000px]`}>
      <div className="head w-full min-h-[500px] bg-red-950 pt-28 flex flex-col-reverse items-start p-5 gap-10 sm:items-center lg:flex-row lg:justify-evenly lg:p-0 lg:pt-36">
        <Image 
        src={Images.model1}
        alt="model 1 image"
        width={400}
        height={400}/>
        <div className="mt-16 text-white sm:text-center lg:text-left lg:mt-0">
          <h1 className='text-2xl mb-2 sm:text-3xl lg:text-4xl'>Refresh your closet</h1>
          <p className="sm:text-xl">Shop the latest looks today</p>
          <Buttons
            href="/shop"
            styling="bg-white text-black w-40 h-16"
            title="Shop now"
          />
        </div>
      </div>

      <div className="w-full min-h-[500px] flex flex-col mt-10 p-5 gap-10 sm:items-center lg:flex-row lg:gap-2 lg:items-center lg:justify-evenly">
        <div className="text-center lg:text-left">
          <h1 className="text-lg font-semibold mb-2 lg:text-3xl">Fall Collection '20</h1>
          <p className="text-sm">Discover the pre-fall collectiona arriving now.</p>
          <Buttons
            href="/shop"
            styling="bg-black text-white w-40 h-16"
            title="Shop now"
          />
        </div>
        <Image 
          src={Images.model4} 
          alt="model 2 image"  
          height={400} 
          className="w-[400px] lg:w-[300px]"
        />
        <Image 
          src={Images.model2} 
          alt="model 3 image" 
          height={400} 
          className="w-[400px] lg:w-[300px]"
        />
        <Image
          src={Images.model5} 
          alt="model 4 image" 
          height={400} className="w-[400px] lg:w-[300px]"
          />
      </div>

      <div className="mt-[100px]">
        <Parallax bgImage={image1} bgImageAlt="the model as parallax" strength={200} >
          <div className="w-full h-[500px] flex items-center justify-center flex-col text-red-950 sm:text-red-100 lg:text-white">
            <h1 className={`${spectral.className} text-3xl font-bold lg:text-4xl`}>Inspired by your life</h1>
            <p className={`${quintessential.className} text-2xl lg:text-3xl`}>Beauty and Glory</p>
          </div>
        </Parallax>
      </div>

      <div className="min-h-[400px] w-full mt-[100px] grid grid-cols-1 place-items-center lg:grid-cols-2 mb-[100px]">
        <div className="p-5">
          <Image 
          src={Images.cloth}
          alt="jewelry preview image"
          height={300}
          className="w-[400px] lg:w-[500px]"/>
          <h1 className="pt-10 text-2xl ">Clothing</h1>
          <p className="pt-3 text-sm text-gray-500">Discover the pieces that complete your wardrobe.</p>
          <Buttons
            href="/shop"
            styling="bg-black text-white w-44 h-16"
            title="Shop clothing"
          />
        </div>

        <div className="p-5 ">
          <Image 
          src={Images.jewelry}
          alt="jewelry preview image"
          height={400}
          className="w-[400px] lg:w-[500px]"/>
          <h1 className="pt-10 text-2xl">Accessories</h1>
          <p className="pt-3 text-sm text-gray-500">No look is complete without there beautiful accessories.</p>
          <Buttons
            href="/shop"
            styling='text-white bg-black w-52 h-16'
            title="Shop accessories"
          />
        </div>
      </div>
    </div>
  )
}
